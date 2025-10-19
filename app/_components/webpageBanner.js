"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import ProfilePic from '/media/photos/pf_pic.png';

export default function WebpageBanner() { 

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [])

    const shrinkAmount = Math.min(scrollY, 200);
    const height = 950 - shrinkAmount * 2;
    const bannerHeight = Math.max(height, 500);

    return (
        <div 
            className="relative w-full overflow-hidden transition-all duration-300"
            style={{ height: `${bannerHeight}px` }}
        >
            <div>
                <Image
                    src='/media/photos/person/EdwardBanner.png'
                    alt='Website Banner'
                    fill
                    className='object-cover'
                    priority
                />
                <div className='grid absolute inset-0 flex items-center justify-center'>
                    <h1 className='text-9xl font-bold tracking-wide text-center
                                bg-clip-text text-fixed-day-one text-transparent text-outline 
                                leading-tight'
                    
                    >
                        Hello! 
                    </h1>
                    <h1 className='text-9xl font-bold tracking-wide text-center
                                bg-clip-text text-fixed-day-one text-transparent text-outline 
                                leading-tight'
                    >
                        I am Edward Magtoto
                    </h1>
                </div>
            </div>

        </div>
    );
}