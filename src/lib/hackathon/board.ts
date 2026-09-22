import { MAX_PEOPLE, MAX_TEAMS, MIN_MEMBERS } from "@/lib/hackathon/constants"

export type PublicTeam = {
  teamName: string
  memberCount: number
}

export type HackathonBoard = {
  teamCount: number
  personCount: number
  availableSpots: number
  isFull: boolean
  teams: PublicTeam[]
}

export function computeBoard(teams: PublicTeam[]): HackathonBoard {
  const teamCount = teams.length
  const personCount = teams.reduce((sum, team) => sum + team.memberCount, 0)
  const remainingTeams = Math.max(0, MAX_TEAMS - teamCount)
  const remainingPeople = Math.max(0, MAX_PEOPLE - personCount)
  const isFull = remainingTeams === 0 || remainingPeople < MIN_MEMBERS

  return {
    teamCount,
    personCount,
    availableSpots: isFull ? 0 : remainingPeople,
    isFull,
    teams,
  }
}

export function formatOccupancy(board: HackathonBoard) {
  return `${board.teamCount}/${MAX_TEAMS} equipos · ${board.personCount}/${MAX_PEOPLE} personas`
}
