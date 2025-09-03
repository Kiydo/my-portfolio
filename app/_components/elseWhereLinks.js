"use client";
import React, { useEffect, useState } from 'react';
import FadeInIcon from './fadeInIcon';
import Image from 'next/image';

// import GitHub from '/media/photos/linkIcons/github-mark.png';
// import LinkedIn from '/media/photos/linkIcons/in-logo.png';
// import Email from '/media/photos/linkIcons/email.png';

export default function ElseWhereLinks() {
    const icons = [
        { name: 'GitHub', icon: '/media/photos/linkIcons/github-mark-white.png', url: 'https://github.com/Kiydo' },
        { name: 'LinkedIn', icon: '/media/photos/linkIcons/in-logo-white.png', url: 'https://www.linkedin.com/in/edward-magtoto-964b711a0/?trk=opento_sprofile_goalscard' },
        { name: 'Email', icon: '/media/photos/linkIcons/email-white.png', url: 'mailto:edward.magtoto@hotmail.com' },
        { name: 'Itch', icon: '/media/photos/linkIcons/itch.png', url: 'https://kydo13.itch.io/'}
    ];

    return (
        <div>
            <div className='flex items-center justify-center'>
                {icons.map((icon, index) => (
                    <FadeInIcon key={index} className="px-10 py-4 flex flex-col items-center justify-center">
                        <a
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110'
                        >
                            <Image src={icon.icon} alt={icon.name} width={50} height={50} />
                            <p className='text-day-one text-center'>{icon.name}</p>
                        </a>
                    </FadeInIcon>
                ))}
            </div>
        </div>
    );
}