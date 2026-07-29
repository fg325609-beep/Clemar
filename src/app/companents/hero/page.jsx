'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// 1. Rasmlarni import qilish
import heroImg1 from '@/public/Hero.png';
import heroImg2 from '@/public/hero1.png';
import heroImg3 from '@/public/hero3.png';

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
      imageSrc: heroImg1,
    },
    {
      id: 2,
      title: 'Профессиональные\nпылесосы',
      subtitle: 'Сухая и влажная уборка для любых помещений',
      buttonText: 'Смотреть модели',
      buttonLink: '/catalog/vacuums',
      imageSrc: heroImg2,
    },
    {
      id: 3,
      title: 'Моющие\nсредства',
      subtitle: 'Эффективная химия для эффективной чистки',
      buttonText: 'Выбрать химию',
      buttonLink: '/catalog/chemistry',
      imageSrc: heroImg3,
    },
  ];

  return (
    <section className="relative w-full bg-[#f8f9fa] py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            bulletActiveClass: '!bg-blue-600 !w-8 transition-all duration-300',
            bulletClass:
              'inline-block w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer transition-all duration-300',
          }}
          className="hero-swiper pb-12"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[400px]">
                {/* Chap taraf: Matn va Tugma */}
                <div className="flex flex-col items-start z-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight whitespace-pre-line mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md">
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

                {/* O'ng taraf: Import qilingan Rasm */}
                <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] flex items-center justify-center">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title.replace('\n', ' ')}
                    priority={slide.id === 1}
                    className="object-contain max-h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}