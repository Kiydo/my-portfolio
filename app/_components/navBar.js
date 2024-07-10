"use client";
import React from 'react';


export default function navBar() { 
    return (
        <div className='bg-day-three'>
            <div className='fixed w-full bg-day-three z-50'>
                <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 sm:mx-20">
                    <h1 className="text-4xl font-bold mx-0 sm:mb-0 text-fixed-day-one">Edward Magtoto</h1>
                    <nav>
                        <ul className="flex flex-wrap space-x-8 sm:space-x-12">
                            <li className="text-day-one">Home</li>
                            <li className="text-day-one">About</li>
                            <li className="text-day-one">Projects</li>
                            <li className="text-day-one">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
