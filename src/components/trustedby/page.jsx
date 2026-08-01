'use client';

import React, { useState } from 'react';
import { FiLock, FiRotateCcw, FiTruck, FiHeadphones } from 'react-icons/fi';

const features = [
    {
        id: 1,
        icon: FiLock,
        title: 'Безопасная оплата',
        subtitle: '100% безопасная оплата',
    },
    {
        id: 2,
        icon: FiRotateCcw,
        title: 'Возврат в течение 30 дней',
        subtitle: 'Если у товара есть проблемы',
    },
    {
        id: 3,
        icon: FiTruck,
        title: 'Бесплатная доставка',
        subtitle: 'Для всех заказов',
    },
    {
        id: 4,
        icon: FiHeadphones,
        title: 'Поддержка 24/7',
        subtitle: 'Круглосуточная поддержка',
    },
];

const logos = [
    { id: 1, name: 'KIA', domain: 'kia.com' },
    { id: 2, name: 'TEXNOPARI', domain: 'texnopari.uz' },
    { id: 3, name: 'BYD', domain: 'byd.com' },
    { id: 4, name: 'SAG', domain: 'sag.uz' },
    { id: 5, name: 'SAMARKAND CARPETS', domain: 'samarkandcarpets.com' },
    { id: 6, name: 'artel', domain: 'artelgroup.org' },
    { id: 7, name: 'akfa', domain: 'akfagroup.com' },
    { id: 8, name: 'ecobozor', domain: 'ecobozor.uz' },
    { id: 9, name: 'UzAuto MOTORS', domain: '' },
    { id: 10, name: 'TASHKENT CITY MALL', domain: 'tashkentcitymall.uz' },
    { id: 11, name: 'UZBEKISTAN airways', domain: 'uzairways.com' },
    { id: 12, name: 'METRO', domain: 'metro.de' },
    { id: 13, name: 'IT PARK', domain: 'it-park.uz' },
    { id: 14, name: 'pepsi', domain: 'pepsi.com' },
    { id: 15, name: 'Coca-Cola', domain: 'coca-cola.com' },
    { id: 16, name: 'TASHKENT CITY', domain: 'tashkentcity.uz' },
    { id: 17, name: 'uzum', domain: 'uzum.uz' },
    { id: 18, name: 'Hilton', domain: 'hilton.com' },
    { id: 19, name: 'HYATT REGENCY', domain: 'hyatt.com' },
    { id: 20, name: 'INTERCONTINENTAL', domain: 'ihg.com' },
    { id: 21, name: 'Safia', domain: 'safiabakery.uz' },
    { id: 22, name: 'GIOTTO', domain: 'giotto.uz' },
    { id: 23, name: 'LOOOOK', domain: 'loolook.uz' },
    { id: 24, name: 'CAEx', domain: 'caex-uzbekistan.com' },
    { id: 25, name: 'ENTER ENGINEERING', domain: 'ent-en.com' },
    { id: 26, name: 'Silk Road Samarkand', domain: 'silkroad-samarkand.com' },
    { id: 27, name: 'Magic City', domain: 'magiccity.uz' },
    { id: 28, name: 'TEXNOPARI', domain: 'texnopari.uz' },
    { id: 29, name: 'BYD', domain: 'byd.com' },
    { id: 30, name: 'KIA', domain: 'kia.com' },
];

function LogoItem({ logo }) {
    const clearbitApiUrl = `https://logo.clearbit.com/${logo.domain}`;
    const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`;
    
    const [imgSrc, setImgSrc] = useState(clearbitApiUrl);
    const [errored, setErrored] = useState(false);

    if (errored) {
        return (
            <span className="text-[14px] md:text-base font-bold text-gray-700 uppercase text-center leading-tight px-2 tracking-wide">
                {logo.name}
            </span>
        );
    }

    return (
        <img
            src={imgSrc}
            alt={logo.name}
            loading="lazy"
            onError={() => {
                if (imgSrc === clearbitApiUrl) {
                    setImgSrc(googleFaviconUrl);
                } else {
                    setErrored(true);
                }
            }}
            /* O'zgartirilgan joy: w-full va h-full qilib belgilandi */
            className="w-full h-full object-contain"
        />
    );
}

const TrustedBy = () => {
    return (
        <section className="w-full bg-white">
            <div className="w-full bg-[#1c1c1c]">
                <div className="max-w-[1200px] mx-auto px-5 py-8 md:py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div key={feature.id} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-[15px] leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/60 text-[13px] mt-0.5">
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-5 py-12 md:py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] tracking-tight text-center mb-10">
                    Нам доверяют
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="bg-white border border-gray-100 rounded-xl h-[100px] md:h-[110px] flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                        >
                            <LogoItem logo={logo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;