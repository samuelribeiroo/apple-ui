import React from 'react'
import { allClubs, featuredSeries } from '../../database/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'

import './style.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Clubs(): JSX.Element {
  return (
    <>
      <section className="clubs-highlight-container">
        <h2>Todos os Clubes</h2>
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
              slidesPerView: 8,
              scrollbar: true,
            },

            1024: {
              slidesPerView: 8,
              spaceBetween: 50,
              scrollbar: true,
            },

            1025: {
              slidesPerView: 8,
            },

            1313: {
              slidesPerView: 10,
            },

            1400: {
              slidesPerView: 10,
            },

            320: {
              slidesPerView: 2,
              spaceBetween: 216,
            },
          }}
        >
          <div className="featured-serie-list">
            {allClubs.map(({ image, name }) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                <SwiperSlide>
                  <span className="clubs-information-container">
                    <div className="club-img">
                      <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        aria-label={name}
                      />
                    </div>
                    <span>
                      <p>{name}</p>
                    </span>
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
