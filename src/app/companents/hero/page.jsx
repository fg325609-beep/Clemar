'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

function Hero() {
  const slides = [
    {
      id: 1,
      title: 'Поломоечные\nмашины',
      subtitle: 'Более 60 моделей в каталоге: Comac, Clemar, Tvx',
      buttonText: 'В каталог',
      bgImage: '/hero-bg.jpg',
    },
    {
      id: 2,
      title: 'Уборочное\nоборудование',
      subtitle: 'Профессиональные решения для вашего бизнеса',
      buttonText: 'В каталог',
      bgImage: '/hero-bg2.jpg',
    },
  ]

  return (
    <section className="w-full py-5">
      <div className="max-w-[1200px] mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-2xl overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="h-[420px] bg-cover bg-right bg-no-repeat flex items-center px-8 md:px-16 relative"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="max-w-[500px] text-white z-10">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight whitespace-pre-line mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-base text-gray-200 mb-7">
                    {slide.subtitle}
                  </p>
                  <a
                    href="#"
                    className="inline-block px-7 py-3 bg-[#0083ca] hover:bg-[#0069a3] text-white font-semibold rounded-lg transition-colors"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero