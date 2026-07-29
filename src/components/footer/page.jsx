import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] border-b-[4px] border-[#009ee2]">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* 1. Logotip va qisqacha matn (Chap taraf) */}
          <div className="col-span-1 md:col-span-6 flex flex-col items-start">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo2.png" // 🚀 To'g'rilangan joyi: public so'zi olib tashlandi
                alt="Clemar Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-[15px] text-gray-300 leading-relaxed max-w-sm">
              Clemar — Представляем лучшие мировые бренды в<br />
              Узбекистане
            </p>
          </div>

          {/* 2. Havolalar (O'rta taraf) */}
          <div className="col-span-1 md:col-span-3">
            <ul className="space-y-3.5 text-[15px] text-gray-300 font-light">
              <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition-colors">My Wishlist</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">My Cart</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Sign In</Link></li>
              <li><Link href="/checkout" className="hover:text-white transition-colors">Check Out</Link></li>
            </ul>
          </div>

          {/* 3. Kontaktlar (O'ng taraf) */}
          <div className="col-span-1 md:col-span-3">
            <ul className="space-y-3 text-[15px] text-gray-300 font-light">
              <li>Phone: (+63) 555 1212</li>
              <li>Fax: (+63) 555 0100</li>
              <li className="pt-4">New York,</li>
              <li>96th Street, NY 10129</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;