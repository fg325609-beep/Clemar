'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper stil fayllari
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: 'Поломоечные\nмашины',
      subtitle: 'Более 60 моделей в каталоге: Comac, Clemar, Tvx',
      buttonText: 'В каталог',
      buttonLink: '/catalog',
      imageSrc: '/Hero.png',
    },
    {
      id: 2,
      title: 'Профессиональные\nпылесосы',
      subtitle: 'Сухая и влажная уборка для любых помещений',
      buttonText: 'Смотреть модели',
      buttonLink: '/catalog/vacuums',
      imageSrc: '/hero1.png',
    },
    {
      id: 3,
      title: 'Моющие\nсредства',
      subtitle: 'Эффективная химия для эффективной чистки',
      buttonText: 'Выбрать химию',
      buttonLink: '/catalog/chemistry',
      imageSrc: '/hero3.png',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-950">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: '!bg-[#009ee0] !opacity-100',
          bulletClass:
            'inline-block w-3 h-3 bg-white/50 rounded-full mx-1.5 cursor-pointer transition-all duration-300 hover:bg-white',
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Har bir slaydning umumiy konteyneri va balandligi */}
            <div className="relative w-full h-[450px] sm:h-[520px] md:h-[600px] flex items-center">
              
              {/* 1. Orqa fondagi to'liq yoyilgan rasm (Background Image) */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title.replace('\n', ' ')}
                  priority={slide.id === 1}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                {/* Matnlar oson o'qilishi uchun qora gradient to'siq (Overlay) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:from-black/70" />
              </div>

              {/* 2. Old tarafdagi kontentlar (Matn va Tugma) */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-left">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight whitespace-pre-line mb-4 drop-shadow-sm">
                    {slide.title}
                  </h1>

                  <p className="text-gray-200/90 text-base sm:text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#009ee0] hover:bg-[#008ec9] text-white font-medium text-base rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 transform"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}