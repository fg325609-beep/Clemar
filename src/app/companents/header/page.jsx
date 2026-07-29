import React from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi'; // react-icons kutubxonasidan

const Header = () => {
    return (
        <header className="w-full bg-white border-b border-gray-100 font-sans">
            <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-5 py-4">
                
                {/* Chap tomon: Logo va Katalog */}
                <div className="flex items-center gap-8">
                    <div className="flex items-center">
                        <img 
                            src="src/app/companents/img/logo.png" 
                            alt="Clemar Logo" 
                            className="h-9 object-contain" 
                        />
                    </div>
                    
                    {/* Katalog menyusi */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 cursor-pointer tracking-wide hover:text-[#009ee2] transition-colors duration-200">
                        <span>КАТАЛОГ</span>
                        <svg className="mt-0.5" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                {/* O'ng tomon: Qidiruv, Savatcha, Ish vaqti va Tugma */}
                <div className="flex items-center gap-6">
                    {/* Qidiruv tugmasi */}
                    <button className="bg-transparent border-none cursor-pointer text-gray-950 p-1 hover:text-[#009ee2] transition-colors duration-200 flex items-center justify-center" aria-label="Search">
                        <FiSearch size={22} />
                    </button>
                    
                    {/* Savatcha tugmasi */}
                    <button className="bg-transparent border-none cursor-pointer text-gray-950 p-1 hover:text-[#009ee2] transition-colors duration-200 flex items-center justify-center" aria-label="Cart">
                        <FiShoppingBag size={22} />
                    </button>

                    {/* Ish tartibi (Режим работы) */}
                    <div className="flex flex-col text-xs text-gray-950 leading-tight">
                        <span className="font-normal text-gray-400">РЕЖИМ РАБОТЫ:</span>
                        <span className="font-semibold">ПН-ПТ С 9:00 ДО 18:00</span>
                    </div>

                    {/* Sotuv bo'limi ko'k tugmasi */}
                    <button className="bg-[#009ee2] hover:bg-[#0084c2] text-white border-none px-6 py-3 text-sm font-bold rounded-lg tracking-wide transition-colors duration-200 cursor-pointer">
                        ОТДЕЛ ПРОДАЖ
                    </button>
                </div>

            </nav>
        </header>
    );
};

export default Header;