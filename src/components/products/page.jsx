import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Selpak Professional Extra Z-Сложенное полотенце для диспенсера',
    category: 'БУМАЖНАЯ ПРОДУКЦИЯ',
    image: '/produkts1.png', 
    buttonText: 'Подробнее',
    link: '/catalog/t45-50b',
  },
  {
    id: 2,
    title: 'Sens Туалетная бумага 24 шт.',
    category: 'БУМАЖНАЯ ПРОДУКЦИЯ',
    image: '/products2.png',
    buttonText: 'Подробнее',
    link: '/catalog/t35b',
  },
  {
    id: 3,
    title: 'Solo Professional 1/6 Складные салфетки Официант 26,5×33 см 100 шт.',
    category: 'БУМАЖНАЯ ПРОДУКЦИЯ',
    image: '/products3.png',
    buttonText: 'Подробнее',
    link: '/catalog/t55-50bt',
  },
  {
    id: 4,
    title: 'Selpak Professional Extra Туалетная бумага 24 шт.',
    category: 'БУМАЖНАЯ ПРОДУКЦИЯ',
    image: '/products4.png',
    buttonText: 'Подробнее',
    link: '/catalog/t55-50b',
  },
];

function Products() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
          Бумажная продукция
        </h2>
        <a 
          href="#" 
          className="text-xs md:text-sm font-medium text-[#008ce3] hover:underline flex items-center gap-1"
        >
          Смотреть все &rarr;
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg p-4 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-48 mb-4 flex items-center justify-center">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-contain"
              />
            </div>

            <div className="flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-3 mb-2 min-h-[40px]">
                  {item.title}
                </h3>
                <p className="text-[10px] tracking-wider text-gray-400 font-medium uppercase mb-4">
                  {item.category}
                </p>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#009ee2] hover:bg-[#008ec9] text-white font-medium text-sm transition-colors duration-200 shadow-sm rounded-md"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;