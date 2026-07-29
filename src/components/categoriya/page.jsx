'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Kategoriya = () => {
  const categories = [
    {
      id: 1,
      title: 'Бумажная продукция',
      imageSrc: '/1.png', 
      link: '/catalog/paper',
    },
    {
      id: 2,
      title: 'Моющие средства',
      imageSrc: '/2.png',
      link: '/catalog/chemistry',
    },
    {
      id: 3,
      title: 'Поломоечные машины',
      imageSrc: '/3.png',
      link: '/catalog/scrubbers',
    },
    {
      id: 4,
      title: 'Пылесосы',
      imageSrc: '/4.png',
      link: '/catalog/vacuums',
    },
    {
      id: 5,
      title: 'Уборочный инвентарь',
      imageSrc: '/5.png',
      link: '/catalog/tools',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] tracking-tight">
            Категории
          </h2>
          <Link
            href="/catalog"
            className="text-[#009ee2] hover:text-[#008ec9] font-medium text-sm md:text-base flex items-center gap-1.5 transition-colors group"
          >
            Смотреть все
            <span className="inline-block transform transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              href={cat.link}
              key={cat.id}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-square bg-[#f5f5f7] rounded-2xl flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-sm group-hover:bg-[#ededf0]">
                <div className="relative w-full h-full">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-gray-900 font-medium text-sm md:text-[15px] text-left leading-snug transition-colors group-hover:text-[#009ee2]">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Kategoriya;