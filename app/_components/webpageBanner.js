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

    const shrinkAmount = Math.min(scrollY, 100);
    const height = 500 - shrinkAmount * 3;
    const bannerHeight = Math.max(height, 0);

    return (
        <div 
            className="relative w-full mx-auto overflow-hidden transition-all duration-300"
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
                <div className='absolute inset-0 flex items-center justify-center'>
                    {/* <h1 className='text-9xl font-bold tracking-wide text-center
                                bg-clip-text text-fixed-day-one text-transparent text-outline 
                                leading-tight'
                    
                    >
                        Hello! 
                    </h1> */}
                    {/* <h1 className='text-9xl font-bold tracking-wide text-center
                                bg-clip-text text-fixed-day-one text-transparent text-outline 
                                leading-tight'
                    >
                        Edward Magtoto
                    </h1> */}
                </div>
            </div>

        </div>
    );
}