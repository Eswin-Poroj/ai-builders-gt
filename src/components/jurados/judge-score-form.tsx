"use client"

import { useActionState, useMemo, useState } from "react"
import {
  saveJudgeEvaluation,
  type SaveEvaluationState,
} from "@/app/jurados/actions"
import { judgeSheet } from "@/content/judge-sheet"
import {
  CRITERIA,
  CRITERIA_TOTAL,
  DOMAIN_OPTIONS,
  scoreBand,
  type CriterionKey,
} from "@/lib/hackathon/rubric"
import type { JudgeSheet } from "@/lib/hackathon/judge-data"

const initial: SaveEvaluationState = { status: "idle" }

type Props = {
  teamId: string
  sheet: JudgeSheet
}

export function JudgeScoreForm({ teamId, sheet }: Props) {
  const action = saveJudgeEvaluation.bind(null, teamId)
  const [state, formAction, pending] = useActionState(action, initial)
  const evaluation = sheet.evaluation

  const [scores, setScores] = useState<Record<CriterionKey, number>>(() => ({
    comprension: evaluation?.c_comprension ?? 0,
    arquitectura: evaluation?.c_arquitectura ?? 0,
    codigo: evaluation?.c_codigo ?? 0,
    reto: evaluation?.c_reto ?? 0,
    practicas: evaluation?.c_practicas ?? 0,
    reproducibilidad: evaluation?.c_reproducibilidad ?? 0,
  }))

  const total = useMemo(
    () => CRITERIA.reduce((sum, item) => sum + (scores[item.key] ?? 0), 0),
    [scores],
  )

  const members = Array.isArray(sheet.team.members)
    ? sheet.team.members.join(", ")
    : ""

  return (
    <form className="jurados-sheet" action={formAction}>
      <p className="jurados-meta">
        {judgeSheet.teamLabel}: {sheet.team.team_name}
        <br />
        {judgeSheet.membersLabel}: {members}
        <br />
        {judgeSheet.evaluatorLabel}: {sheet.judge.display_name}
      </p>

      {state.status === "error" ? (
        <p className="jurados-error">{state.message}</p>
      ) : null}
      {state.status === "success" ? (
        <p className="jurados-success">
          {judgeSheet.savedOk} {state.total}/100 · {scoreBand(state.total)}
        </p>
      ) : null}

      {CRITERIA.map((criterion) => (
        <fieldset key={criterion.key} className="jurados-criterion">
          <legend className="jurados-legend">
            {criterion.label} (máx. {criterion.max})
          </legend>
          <p className="jurados-hint">{criterion.hint}</p>
          <div className="jurados-score-row">
            <label htmlFor={`c-${criterion.key}`} className="jurados-hint">
              Puntos
            </label>
            <input
              id={`c-${criterion.key}`}
              name={criterion.key}
              type="number"
              inputMode="numeric"
              min={0}
              max={criterion.max}
              step={1}
              required
              value={scores[criterion.key]}
              onChange={(event) => {
                const next = Number(event.target.value)
                setScores((current) => ({
                  ...current,
                  [criterion.key]: Number.isFinite(next) ? next : 0,
                }))
              }}
            />
          </div>
        </fieldset>
      ))}

      <p className="jurados-total">
        {judgeSheet.totalLabel}: {total}/{CRITERIA_TOTAL} · {scoreBand(total)}
      </p>

      <fieldset className="jurados-domain">
        <legend className="jurados-legend">{judgeSheet.domainLegend}</legend>
        <p className="jurados-hint">{judgeSheet.domainQuestion}</p>
        {DOMAIN_OPTIONS.map((option) => (
          <label key={option.value} className="jurados-domain-option">
            <input
              type="radio"
              name="dominio"
              value={option.value}
              required
              defaultChecked={evaluation?.dominio === option.value}
            />
            <span>
              <strong>{option.label}</strong>
              <span className="jurados-hint"> — {option.hint}</span>
            </span>
          </label>
        ))}
      </fieldset>

      <div className="jurados-field">
        <label htmlFor="comentarios">{judgeSheet.comments}</label>
        <textarea
          id="comentarios"
          name="comentarios"
          maxLength={4000}
          defaultValue={evaluation?.comentarios ?? ""}
        />
      </div>
      <div className="jurados-field">
        <label htmlFor="anotaciones">{judgeSheet.notes}</label>
        <textarea
          id="anotaciones"
          name="anotaciones"
          maxLength={4000}
          defaultValue={evaluation?.anotaciones ?? ""}
        />
      </div>

      <button className="band band-hero jurados-submit" type="submit" disabled={pending}>
        {pending ? judgeSheet.saving : judgeSheet.save}
      </button>

      <details className="jurados-help">
        <summary>{judgeSheet.questionsTitle}</summary>
        <ul>
          {judgeSheet.questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </details>
    </form>
  )
}
