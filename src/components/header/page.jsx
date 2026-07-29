import React from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full bg-white font-sans border-b border-gray-100">
            <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-4">
                
                
                <div className="flex items-center gap-10">
                    
                    <div className="flex items-center cursor-pointer">
                        <Image 
                          src="/logo.png"          // <-- Mana shunday string ko'rinishida yozing
                          alt="Clemar Logo" 
                          width={160} 
                          height={50} 
                          className="object-contain"
                        />
                    </div>
                    
                    
                    <div className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 cursor-pointer hover:text-[#009ee2] transition-colors duration-200">
                        <span>КАТАЛОГ</span>
                        <svg className="mt-0.5" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                
                <div className="flex items-center gap-8">
                    
                    
                    <div className="flex items-center gap-5">
                        <button className="text-gray-800 hover:text-[#009ee2] transition-colors duration-200 outline-none flex items-center justify-center bg-transparent border-none cursor-pointer" aria-label="Search">
                            <FiSearch size={22} strokeWidth={1.5} />
                        </button>
                        <button className="text-gray-800 hover:text-[#009ee2] transition-colors duration-200 outline-none flex items-center justify-center bg-transparent border-none cursor-pointer" aria-label="Cart">
                            <FiShoppingBag size={22} strokeWidth={1.5} />
                        </button>
                    </div>

                    
                    <div className="flex flex-col text-sm text-gray-900 tracking-tight">
                        <span className="text-[12px] text-gray-600 mb-0.5 uppercase tracking-wide">Режим работы:</span>
                        <span className="font-medium text-[15px]">ПН-ПТ С 9:00 ДО 18:00</span>
                    </div>

                    
                    <button className="bg-[#009ee2] hover:bg-[#0084c2] text-white px-7 py-3 text-[14px] font-medium rounded-md transition-colors duration-200 cursor-pointer outline-none tracking-wide border-none">
                        ОТДЕЛ ПРОДАЖ
                    </button>
                </div>

            </nav>
        </header>
    );
};

export default Header;