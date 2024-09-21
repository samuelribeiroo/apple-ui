import type { ReactNode } from 'react'

export type GlobalImagesType = {
  id: number
  src: string
  alt: string
}

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onClick?: () => void
  children: ReactNode
}

export type ButtonProps = {
  onClick?: () => void
}

export interface Matches {
  id?: number
  hour: string
  teams: string
  image: string
  league: string
}

export interface FinishedMatches extends Matches {
  id: number,
  goals: {
    team1: number
    team2: number
  }
  finished: boolean
}

export interface ScoreBoxProps  {
  match: {
    teams: string
    goals: {
      team1: number
      team2: number
    }
  }
}