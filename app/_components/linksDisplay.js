"use client";
import React, { useEffect, useState } from 'react';

export default function LinksDisplay({ links }) {
    return (
        <div className='flex flex-col text-center items-center mt-8 mb-8'>
            <h2 className='font-bold text-4xl'>Links</h2>
            {links.map((link, index) => (
                <a
                    className='text-link hover-transition mt-2'
                    key={index}
                    href={link.url}
                >
                    {link.name}
                </a>
            ))}
        </div>
    )
}