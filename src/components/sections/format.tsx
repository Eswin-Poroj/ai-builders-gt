import type { CSSProperties } from "react"
import { event } from "@/content/event"
import type { EventDay, EventRoom, EventSlot, EventTalk, RoomAccent } from "@/content/types"
import "./format.css"

const speakersById = new Map(
  event.speakers.items.map((speaker) => [speaker.id, speaker] as const),
)

type SharedTone = "umbral" | "pause"

type SharedBand = {
  kind: "shared"
  tone: SharedTone
  time: string
  title: string
  place?: string
}

type ParallelBand = {
  kind: "parallel"
  time: string
  columns: Array<{
    room: EventRoom
    talks: EventTalk[]
  }>
}

type AgendaBand = SharedBand | ParallelBand

function clockToMinutes(clock: string): number {
  const [hours, minutes] = clock.split(":").map(Number)
  return hours * 60 + minutes
}

function rangeFromLabel(time: string): { start: number; end: number } | null {
  const match = time.match(/(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/)
  if (!match) return null
  return { start: clockToMinutes(match[1]), end: clockToMinutes(match[2]) }
}

function talkInRange(talk: EventTalk, start: number, end: number): boolean {
  const range = rangeFromLabel(talk.time)
  if (!range) return false
  return range.start < end && range.end > start
}

function sharedTone(title: string): SharedTone {
  return /coffee|café/i.test(title) ? "pause" : "umbral"
}

function sundayTone(title: string): SharedTone {
  return /coffee|café|almuerzo|traslado/i.test(title) ? "pause" : "umbral"
}

function talkMinutes(talk: EventTalk): number {
  if (talk.duration) {
    const hours = talk.duration.match(/(\d+(?:[.,]\d+)?)\s*h/i)
    const minutes = talk.duration.match(/(\d+)\s*min/i)
    return (
      (hours ? Number.parseFloat(hours[1].replace(",", ".")) * 60 : 0) +
      (minutes ? Number(minutes[1]) : 0)
    )
  }

  const range = rangeFromLabel(talk.time)
  return range ? range.end - range.start : 30
}

function daySpan(schedule: EventSlot[]): string | null {
  const first = rangeFromLabel(schedule[0]?.time ?? "")
  const last = rangeFromLabel(schedule[schedule.length - 1]?.time ?? "")
  if (!first || !last) return null
  return `${schedule[0].time.split(/[–-]/)[0].trim()} – ${schedule[schedule.length - 1].time.split(/[–-]/).at(-1)?.trim()}`
}

function buildAgenda(day: EventDay): AgendaBand[] {
  const rooms = day.rooms ?? []
  const schedule = day.schedule ?? []

  return schedule.map((slot) => {
    if (!/paralelas|charlas/i.test(slot.label)) {
      return {
        kind: "shared",
        tone: sharedTone(slot.label),
        time: slot.time,
        title: slot.label,
        place: slot.place,
      }
    }

    const range = rangeFromLabel(slot.time)
    return {
      kind: "parallel",
      time: slot.time,
      columns: rooms.map((room) => ({
        room,
        talks: range
          ? room.talks.filter((talk) => talkInRange(talk, range.start, range.end))
          : room.talks.filter((talk) => talk.kind !== "break"),
      })),
    }
  })
}

export function FormatSection() {
  const saturday = event.format.days.find((day) => day.id === "day-1")
  const sunday = event.format.days.find((day) => day.id === "day-2")

  return (
    <section className="wall wall-deep" id="formato" aria-labelledby="formato-title">
      <h2 id="formato-title" className="wall-title">
        {event.format.heading}
      </h2>
      {saturday ? <SaturdaySummit day={saturday} /> : null}
      {sunday ? <SundayTrail day={sunday} /> : null}
    </section>
  )
}

function SaturdaySummit({ day }: { day: EventDay }) {
  const rooms = day.rooms ?? []
  const hasRooms = rooms.length > 0
  const bands = hasRooms ? buildAgenda(day) : null
  const span = day.schedule ? daySpan(day.schedule) : null

  return (
    <article className="summit" id="agenda">
      <header className="summit-head">
        <h3 className="summit-title">{day.title}</h3>
        <p className="summit-meta">
          {day.dateLabel}
          {span ? ` · ${span}` : null}
        </p>
        {day.roomsNote ? <p className="summit-pill">{day.roomsNote}</p> : null}
      </header>
      {rooms.length > 1 ? <RoomPick rooms={rooms} /> : null}
      {bands ? (
        <ol className="agenda-board">
          {bands.map((band) =>
            band.kind === "shared" ? (
              <SharedMoment key={`shared-${band.time}-${band.title}`} band={band} />
            ) : (
              <ParallelBlock key={`parallel-${band.time}`} band={band} />
            ),
          )}
        </ol>
      ) : (
        <ul className="summit-fallback">
          {day.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

function SundayTrail({ day }: { day: EventDay }) {
  const slots = day.schedule && day.schedule.length > 0 ? day.schedule : null
  const span = day.schedule ? daySpan(day.schedule) : null

  return (
    <article className="day-trail" id="hackathon">
      <header className="summit-head">
        <h3 className="day-trail-title">{day.title}</h3>
        <p className="summit-meta">
          {day.dateLabel}
          {span ? ` · ${span}` : null}
        </p>
        {day.roomsNote ? <p className="summit-pill">{day.roomsNote}</p> : null}
      </header>
      {slots ? (
        <ol className="agenda-board">
          {slots.map((slot) => (
            <SharedMoment
              key={`${day.id}-${slot.time}-${slot.label}`}
              band={{
                kind: "shared",
                tone: sundayTone(slot.label),
                time: slot.time,
                title: slot.label,
                place: slot.place,
              }}
            />
          ))}
        </ol>
      ) : (
        <ul className="day-trail-slots">
          {day.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

function RoomPick({ rooms }: { rooms: EventRoom[] }) {
  return (
    <fieldset className="agenda-pick">
      <legend className="agenda-pick-legend">Aula</legend>
      {rooms.map((room, index) => (
        <label key={room.id} className="agenda-pick-choice">
          <input
            className="agenda-pick-input"
            type="radio"
            name="agenda-aula"
            id={`agenda-room-${room.id}`}
            value={room.id}
            defaultChecked={index === 0}
          />
          {room.name}
        </label>
      ))}
    </fieldset>
  )
}

function SharedMoment({ band }: { band: SharedBand }) {
  return (
    <li className={band.tone === "pause" ? "agenda-span agenda-span-pause" : "agenda-span"}>
      <p className="agenda-span-time">{band.time}</p>
      <div>
        <p className="agenda-span-title">{band.title}</p>
        {band.place ? <p className="agenda-span-place">{band.place}</p> : null}
      </div>
    </li>
  )
}

function ParallelBlock({ band }: { band: ParallelBand }) {
  const blockMins = Math.max(
    30,
    ...band.columns.map((column) =>
      column.talks.reduce((total, talk) => total + talkMinutes(talk), 0),
    ),
  )

  return (
    <li className="agenda-split">
      <div
        className="agenda-vanos"
        style={{ "--block-mins": blockMins } as CSSProperties}
      >
        {band.columns.map(({ room, talks }) => (
          <section
            key={room.id}
            className="agenda-aula"
            data-room={room.id}
            data-accent={room.accent ?? "brand"}
            aria-label={room.name}
          >
            <h4 className="agenda-aula-name">{room.name}</h4>
            <ul className="agenda-talks">
              {talks.map((talk) => (
                <TalkCard
                  key={`${room.id}-${talk.time}-${talk.speakerId ?? talk.title}`}
                  talk={talk}
                  accent={room.accent ?? "brand"}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </li>
  )
}

function TalkCard({ talk, accent }: { talk: EventTalk; accent: RoomAccent }) {
  const speaker = talk.speakerId ? speakersById.get(talk.speakerId) : undefined
  const title = talk.title ?? speaker?.topic
  const live = talk.modality === "en-linea"
  const isBreak = talk.kind === "break"

  return (
    <li
      className={isBreak ? "agenda-talk agenda-talk-break" : "agenda-talk"}
      data-accent={accent}
      style={{ "--talk-mins": talkMinutes(talk) } as CSSProperties}
    >
      <p className="agenda-talk-clock">{talk.time}</p>
      {speaker ? <p className="agenda-talk-speaker">{speaker.name}</p> : null}
      {title ? <p className="agenda-talk-title">{title}</p> : null}
      {live ? <p className="agenda-talk-live">En línea</p> : null}
    </li>
  )
}
