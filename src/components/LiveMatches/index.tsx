import React from 'react'
import { format } from 'date-fns'
import { liveMatches } from '../../database/data'
import './style.scss'

export default function LiveMatches(): JSX.Element {
  const date = () => {
    const today = format(new Date(), 'dd/MM/yyyy')

    return today
  }

  return (
    <>
      <section className="live-match-grid">
        <h2>Partidas hoje {date()}</h2>
        <div className="live-match-grid-body">
            {liveMatches.map(({ image, teams, league, hour }, index) => (
              // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
              <span className="teams">
                <button type="button">
                  <img src={image} alt={teams} />
                  {index < 3 ? (
                    <p className="snippets live">AO VIVO</p>
                  ) : (
                    <p className="snippets time">{hour}</p>
                  )}
                </button>
                <div>
                  <p>{teams}</p>
                  <span>{league}</span>
                </div>
              </span>
            ))}
        </div>
      </section>
    </>
  )
}
