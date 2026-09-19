"use client"

import { useActionState, useEffect, useState } from "react"
import {
  registerHackathonTeam,
  type RegisterTeamState,
} from "@/app/actions/hackathon-teams"
import {
  computeBoard,
  formatOccupancy,
  type HackathonBoard,
} from "@/lib/hackathon/board"
import { MAX_MEMBERS, MIN_MEMBERS } from "@/lib/hackathon/constants"
import type { RegisterTeamsCopy } from "@/content/types"

const initialState: RegisterTeamState = { status: "idle" }

type Props = {
  copy: RegisterTeamsCopy
  contactEmail: string
}

export function RegisterTeamsForm({ copy, contactEmail }: Props) {
  const [state, formAction, pending] = useActionState(registerHackathonTeam, initialState)
  const [board, setBoard] = useState<HackathonBoard>(() => computeBoard([]))
  const [memberSlots, setMemberSlots] = useState(() =>
    Array.from({ length: MIN_MEMBERS }, () => ""),
  )

  useEffect(() => {
    let cancelled = false

    async function loadBoard() {
      try {
        const response = await fetch("/api/hackathon-board", { cache: "no-store" })
        if (!response.ok) return
        const next = (await response.json()) as HackathonBoard
        if (!cancelled) setBoard(next)
      } catch {
        // Keep the last known board if the poll fails.
      }
    }

    void loadBoard()
    const poll = window.setInterval(() => {
      if (document.visibilityState === "visible") void loadBoard()
    }, 8000)

    const onVisible = () => {
      if (document.visibilityState === "visible") void loadBoard()
    }
    document.addEventListener("visibilitychange", onVisible)

    let channel: { unsubscribe: () => void } | undefined
    void import("@/lib/supabase/client")
      .then(({ createClient }) => {
        if (cancelled) return
        const supabase = createClient()
        channel = supabase
          .channel("hackathon-team-listings")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "hackathon_team_listings" },
            () => {
              void loadBoard()
            },
          )
          .subscribe()
      })
      .catch(() => {
        // Polling still updates the board if Realtime is unavailable.
      })

    return () => {
      cancelled = true
      window.clearInterval(poll)
      document.removeEventListener("visibilitychange", onVisible)
      channel?.unsubscribe()
    }
  }, [])

  const displayedBoard =
    state.status === "success" && state.board.teamCount > board.teamCount
      ? state.board
      : board
  const locked = pending || state.status === "success" || displayedBoard.isFull
  const submitLabel =
    pending ? copy.submitting : state.status === "success" ? copy.submitted : copy.submit

  return (
    <div className="teams">
      <p className="teams-badge" aria-live="polite">
        {formatOccupancy(displayedBoard)}
      </p>

      {displayedBoard.isFull ? (
        <p className="teams-full" role="status">
          {copy.fullMessage}
        </p>
      ) : null}

      {state.status === "success" ? (
        <p className="teams-success" role="status">
          {copy.successTemplate
            .replace("{name}", state.teamName)
            .replace("{email}", contactEmail)}
        </p>
      ) : null}

      {state.status === "error" ? (
        <p className="teams-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <form action={formAction} className="teams-form">
        <fieldset disabled={locked && !pending}>
          <div className="teams-field">
            <label htmlFor="teamName">{copy.teamNameLabel}</label>
            <input
              id="teamName"
              name="teamName"
              type="text"
              required
              minLength={2}
              maxLength={80}
              autoComplete="organization"
            />
          </div>

          <fieldset className="teams-members">
            <legend className="teams-legend">{copy.membersLegend}</legend>
            {memberSlots.map((value, index) => (
              <div className="teams-member-row" key={index}>
                <div className="teams-field">
                  <label htmlFor={`member-${index}`}>
                    {copy.memberLabel.replace("{n}", String(index + 1))}
                  </label>
                  <input
                    id={`member-${index}`}
                    name="members"
                    type="text"
                    required
                    value={value}
                    autoComplete="name"
                    onChange={(event) => {
                      const next = event.target.value
                      setMemberSlots((current) =>
                        current.map((slot, slotIndex) =>
                          slotIndex === index ? next : slot,
                        ),
                      )
                    }}
                  />
                </div>
                {memberSlots.length > MIN_MEMBERS ? (
                  <button
                    className="teams-text-btn"
                    type="button"
                    onClick={() => {
                      setMemberSlots((current) =>
                        current.filter((_, slotIndex) => slotIndex !== index),
                      )
                    }}
                  >
                    {copy.removeMember}
                  </button>
                ) : null}
              </div>
            ))}
          </fieldset>

          <div className="teams-actions">
            {memberSlots.length < MAX_MEMBERS ? (
              <button
                className="teams-text-btn"
                type="button"
                onClick={() => {
                  setMemberSlots((current) =>
                    current.length < MAX_MEMBERS ? [...current, ""] : current,
                  )
                }}
              >
                {copy.addMember}
              </button>
            ) : null}
          </div>

          <div className="teams-field">
            <label htmlFor="contact">{copy.contactLabel}</label>
            <p className="teams-hint" id="contact-hint">
              {copy.contactHint}
            </p>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              maxLength={120}
              autoComplete="email"
              inputMode="email"
              aria-describedby="contact-hint"
            />
          </div>

          <input
            className="teams-honeypot"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </fieldset>

        <button
          className="band teams-submit"
          type="submit"
          disabled={locked}
        >
          {submitLabel}
        </button>
      </form>

      <div className="teams-list">
        <h3>{copy.listHeading}</h3>
        {displayedBoard.teams.length === 0 ? (
          <p className="note">{copy.emptyList}</p>
        ) : (
          <ul>
            {displayedBoard.teams.map((team) => (
              <li key={team.teamName}>
                <span>{team.teamName}</span>
                <span>
                  {copy.memberCountLabel.replace("{n}", String(team.memberCount))}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
