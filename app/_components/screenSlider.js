"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function ScreenSlider({ screenshots }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
            setIsTransitioning(false);
        }, 500); // Transition duration
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1));
            setIsTransitioning(false);
        }, 500); // Transition duration
    };

    return (
        <div>
            <div className="relative flex items-center justify-center p-4">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 p-2 py-48 bg-day-three text-day-one rounded-full shadow-md z-10 sm:-ml-4 duration-300 hover:scale-110"
                    aria-label="Previous screenshot"
                >
                    ◄
                </button>
                <div className="flex-shrink-0 w-auto h-auto rounded shadow-md overflow-hidden">
                    <div className={`relative ${isTransitioning ? 'transition-opacity duration-500 opacity-0' : 'transition-opacity duration-500 opacity-100'}`}>
                        <Image
                            src={screenshots[currentIndex]}
                            alt={`Screenshot ${currentIndex + 1}`}
                            width={900}
                            height={600}
                            className="rounded shadow-md"
                        />
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="absolute right-0 p-2 py-48 bg-day-three text-day-one rounded-full shadow-md z-10 sm:-mr-4 duration-300 hover:scale-110"
                    aria-label="Next screenshot"
                >
                    ►
                </button>
            </div>
            <div className="flex space-x-2 mt-4 items-center justify-center">
                {screenshots.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}
