import "server-only"
import { createHmac, timingSafeEqual } from "crypto"
import { cookies, headers } from "next/headers"
import { JUDGE_COOKIE, JUDGE_SESSION_HOURS } from "@/lib/hackathon/constants"

type CookiePayload = {
  v: 1
  u: string
  exp: number
}

function getSecret() {
  const secret = process.env.HACKATHON_JUDGE_SECRET
  if (!secret || secret.length < 32) {
    throw new Error("Falta HACKATHON_JUDGE_SECRET")
  }
  return secret
}

function sign(body: string) {
  return createHmac("sha256", getSecret()).update(body).digest("base64url")
}

export function hashJudgeIp(ip: string) {
  return createHmac("sha256", getSecret()).update(ip).digest("hex")
}

export async function readRequestIpHash() {
  const requestHeaders = await headers()
  const forwarded = requestHeaders.get("x-forwarded-for")
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown"
  return hashJudgeIp(ip)
}

export function encodeJudgeCookie(username: string) {
  const payload: CookiePayload = {
    v: 1,
    u: username,
    exp: Date.now() + JUDGE_SESSION_HOURS * 60 * 60 * 1000,
  }
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url")
  return `${body}.${sign(body)}`
}

export function decodeJudgeCookie(token: string | undefined) {
  if (!token) return null
  const dot = token.lastIndexOf(".")
  if (dot < 1) return null
  const body = token.slice(0, dot)
  const mac = token.slice(dot + 1)
  const expected = sign(body)
  const left = Buffer.from(mac)
  const right = Buffer.from(expected)
  if (left.length !== right.length || !timingSafeEqual(left, right)) return null

  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as CookiePayload
    if (payload.v !== 1 || typeof payload.u !== "string" || payload.exp < Date.now()) {
      return null
    }
    return payload.u
  } catch {
    return null
  }
}

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/jurados",
  secure: process.env.NODE_ENV === "production",
  maxAge: JUDGE_SESSION_HOURS * 60 * 60,
}

export async function writeJudgeCookie(username: string) {
  const store = await cookies()
  store.set(JUDGE_COOKIE, encodeJudgeCookie(username), cookieOptions)
}

export async function clearJudgeCookie() {
  const store = await cookies()
  store.set(JUDGE_COOKIE, "", { ...cookieOptions, maxAge: 0 })
}

export async function readJudgeCookieUsername() {
  const store = await cookies()
  return decodeJudgeCookie(store.get(JUDGE_COOKIE)?.value)
}
