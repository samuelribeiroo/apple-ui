import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import { featuredSeries } from '../../database/data'

import './style.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function FeaturedSeries(): JSX.Element {
  return (
    <>
      <section className="featured-container">
        <h2>Séries em destaques</h2>
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
          <div className="featured-serie-list">
            {featuredSeries.map(({ image, title, description, category }) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                <SwiperSlide>
                  <span className="teams">
                    <button type="button">
                      <img src={image} alt={title} />
                    </button>
                  </span>
                  <div className="serie-information">
                    <p className="category">{category}</p>
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
      </section>
    </>
  )
}
