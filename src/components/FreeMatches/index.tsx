import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import { freeMatches } from '../../database/data'
import BoxScore from '../ScoreBox'
import type { FinishedMatches } from '../../types'

import './style.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function FreeMatches(): JSX.Element {
  return (
    <>
      <section className="free-matches-container">
        <h2>Partidas gratuitas</h2>
        <Swiper
          className="custom-swiper"
          rewind={true}
          spaceBetween={10}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Keyboard]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 46,
              scrollbar: true,
            },

            879: {
              slidesPerView: 3,
              scrollbar: true,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
              scrollbar: true,
            },

            1025: {
              slidesPerView: 3,
            },

            1313: {
              slidesPerView: 5,
            },

            1400: {
              slidesPerView: 5,
            },

            320: {
              slidesPerView: 2,
              spaceBetween: 216,
            },
          }}
        >
          <div className="team-list">
            {freeMatches.map((match, index) => {
              const { image, teams, league, hour } = match

              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              const isFinishedMatch = (
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                match: any,
              ): match is FinishedMatches => {
                return 'goals' in match
              }

              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                <SwiperSlide>
                  <span className="teams">
                    <button type="button">
                      <img src={image} alt={teams} />
                      {index <= 3 ? (
                        <p className="snippets time" id="oi">
                          {hour}
                        </p>
                      ) : (
                        isFinishedMatch(match) && <BoxScore match={match} />
                      )}
                    </button>
                    <div>
                      <p>{teams}</p>
                      <span>{league}</span>
                    </div>
                  </span>
                </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
      </section>
    </>
  )
}
