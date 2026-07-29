'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Aparatlar = () => {
  const products = [
    {
      id: 1,
      title: 'T55/50B',
      category: 'ПОЛОМОЕЧНЫЕ МАШИНЫ',
      imageSrc: '/6.jpg',
      buttonText: 'Подробнее',
      link: '/catalog/t55-50b',
    },
    {
      id: 2,
      title: 'T35B',
      category: 'ПОЛОМОЕЧНЫЕ МАШИНЫ',
      imageSrc: '/6.jpg', 
      buttonText: 'Подробнее',
      link: '/catalog/t35b',
    },
    {
      id: 3,
      title: 'T55/50BT',
      category: 'ПОЛОМОЕЧНЫЕ МАШИНЫ',
      imageSrc: '/6.jpg',
      buttonText: 'Подробнее',
      link: '/catalog/t55-50bt',
    },
    {
      id: 4,
      title: 'T45/50B',
      category: 'ПОЛОМОЕЧНЫЕ МАШИНЫ',
      imageSrc: '/7.jpg', 
      price: '100000 UZS',
      oldPrice: '1200000 UZS',
      buttonText: 'В корзину',
      link: '/catalog/t45-50b',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] tracking-tight">
            Поломоечные машины
          </h2>
          <Link
            href="/catalog/scrubbers"
            className="text-[#009ee2] hover:text-[#008ec9] font-medium text-sm md:text-base flex items-center gap-1.5 transition-colors group"
          >
            Смотреть все
            <span className="inline-block transform transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-start group relative w-full">
              
              <div className="relative w-full h-[260px] flex items-center justify-center mb-4 bg-white rounded-lg p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
                {product.title}
              </h3>

              <div className="h-7 flex items-baseline gap-2 mb-1">
                {product.price ? (
                  <>
                    <span className="text-[16px] font-bold text-gray-950">{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                  </>
                ) : (
                  <span className="block">&nbsp;</span>
                )}
              </div>

              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-5">
                {product.category}
              </p>

              <Link
                href={product.link}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#009ee2] hover:bg-[#008ec9] text-white font-medium text-sm transition-colors duration-200 shadow-sm"
              >
                {product.buttonText}
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Aparatlar;