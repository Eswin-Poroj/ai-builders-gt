"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { HACKATHON_JUDGE_PATH } from "@/lib/hackathon/constants"
import {
  clearJudgeCookie,
  readJudgeCookieUsername,
  readRequestIpHash,
  writeJudgeCookie,
} from "@/lib/hackathon/judge-session"
import { parseEvaluationForm } from "@/lib/hackathon/judge-validate"
import { createAdminClient } from "@/lib/supabase/admin"

export type JudgeLoginState = { error?: string }

const GATE_ERROR = "No se pudo entrar. Revisa los datos e inténtalo de nuevo."
const SAVE_ERROR = "No se pudo guardar la ficha. Inténtalo de nuevo."

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function loginJudge(
  _prev: JudgeLoginState,
  formData: FormData,
): Promise<JudgeLoginState> {
  const username = String(formData.get("username") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")

  await sleep(280)

  try {
    const admin = createAdminClient()
    const ipHash = await readRequestIpHash()

    const blocked = await admin.rpc("hackathon_judge_gate_blocked", {
      p_ip_hash: ipHash,
    })
    if (blocked.error || blocked.data === true) {
      return { error: GATE_ERROR }
    }

    const verified = await admin.rpc("hackathon_judge_verify", {
      p_username: username,
      p_password: password,
    })

    const ok =
      !verified.error &&
      verified.data &&
      typeof verified.data === "object" &&
      "username" in (verified.data as object)

    await admin.rpc("hackathon_judge_gate_record", {
      p_ip_hash: ipHash,
      p_success: Boolean(ok),
    })

    if (!ok || !verified.data || typeof verified.data !== "object") {
      return { error: GATE_ERROR }
    }

    const session = verified.data as { username: string }
    await writeJudgeCookie(session.username)
  } catch {
    return { error: GATE_ERROR }
  }

  redirect(`${HACKATHON_JUDGE_PATH}/equipos`)
}

export async function logoutJudge() {
  await clearJudgeCookie()
  redirect(HACKATHON_JUDGE_PATH)
}

export type SaveEvaluationState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success"; total: number }

export async function saveJudgeEvaluation(
  teamId: string,
  _prev: SaveEvaluationState,
  formData: FormData,
): Promise<SaveEvaluationState> {
  const username = await readJudgeCookieUsername()
  if (!username) {
    redirect(HACKATHON_JUDGE_PATH)
  }

  const parsed = parseEvaluationForm(formData)
  if (!parsed.ok) {
    return { status: "error", message: parsed.message }
  }

  try {
    const admin = createAdminClient()
    const { data, error } = await admin.rpc("hackathon_judge_upsert_evaluation", {
      p_username: username,
      p_team_id: teamId,
      p_comprension: parsed.data.scores.comprension,
      p_arquitectura: parsed.data.scores.arquitectura,
      p_codigo: parsed.data.scores.codigo,
      p_reto: parsed.data.scores.reto,
      p_practicas: parsed.data.scores.practicas,
      p_reproducibilidad: parsed.data.scores.reproducibilidad,
      p_dominio: parsed.data.dominio,
      p_comentarios: parsed.data.comentarios,
      p_anotaciones: parsed.data.anotaciones,
    })

    if (error || !data || typeof data !== "object") {
      return { status: "error", message: SAVE_ERROR }
    }

    revalidatePath(`${HACKATHON_JUDGE_PATH}/equipos`)
    revalidatePath(`${HACKATHON_JUDGE_PATH}/equipos/${teamId}`)
    revalidatePath(`${HACKATHON_JUDGE_PATH}/resultados`)

    const total = Number((data as { total?: number }).total)
    return { status: "success", total: Number.isFinite(total) ? total : 0 }
  } catch {
    return { status: "error", message: SAVE_ERROR }
  }
}
