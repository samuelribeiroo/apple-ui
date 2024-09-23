import React from 'react'
import './style.scss'
import type { ScoreBoxProps } from "../../types";

export default function ScoreBox({ match }: ScoreBoxProps): JSX.Element {
  const teams = match.teams.split(' vs. ')

  return (
    <>
      <div className="result-box">
        <span className="scored">
          <p>{teams[0].slice(0, 3).toUpperCase()}</p>
          <p>{match.goals.team1}</p>
        </span>
        <span className="scored">
          <p>{teams[1].slice(0, 3).toUpperCase()}</p>
          <p>{match.goals.team2}</p>
        </span>
      </div>
    </>
  )
}
