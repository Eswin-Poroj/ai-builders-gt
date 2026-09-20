"use client"

import { useActionState } from "react"
import { loginJudge, type JudgeLoginState } from "@/app/jurados/actions"
import { judgeSheet } from "@/content/judge-sheet"

const initial: JudgeLoginState = {}

export function JudgeGateForm() {
  const [state, action, pending] = useActionState(loginJudge, initial)

  return (
    <form className="jurados-form" action={action}>
      {state.error ? <p className="jurados-error">{state.error}</p> : null}
      <div className="jurados-field">
        <label htmlFor="judge-username">{judgeSheet.gateUser}</label>
        <input
          id="judge-username"
          name="username"
          autoComplete="username"
          required
          minLength={3}
          maxLength={40}
        />
      </div>
      <div className="jurados-field">
        <label htmlFor="judge-password">{judgeSheet.gatePassword}</label>
        <input
          id="judge-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>
      <button className="band band-hero jurados-submit" type="submit" disabled={pending}>
        {pending ? judgeSheet.gatePending : judgeSheet.gateSubmit}
      </button>
    </form>
  )
}
