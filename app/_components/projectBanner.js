import React from 'react';
import Image from 'next/image';
import FadeInIcon from './fadeInIcon';

export default function ProjectBanner({ title, banner }) {
    return (
        <div>
            <FadeInIcon className='w-full flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center  bg-day-three p-4 rounded-lg shadow-lg text-3xl font-bold mb-4 text-day-trim'>
                    <h1>
                        {title}
                    </h1>
                    <Image 
                        src={banner} 
                        alt={`${title} Banner`}
                        height={300}
                        width={600}
                        
                    />  
                </div>
            </FadeInIcon>
        </div>
    );
}