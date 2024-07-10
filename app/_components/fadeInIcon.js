"use client";
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInIcon({ children, className = '' }) {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`transform transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
        >
            {children}
        </div>
    );
};
