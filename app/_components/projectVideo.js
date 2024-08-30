import React from 'react';

export default function ProjectVideo ({ videoSrc, title, description }) {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-day-three">{title}</h2>
            <video
                controls
                autoPlay
                preload="auto"
                className="bg-black shadow-2xl rounded-lg w-full max-w-4xl mb-4"
                style={{ filter: "grayscale(0.3)" }}
            >
                <source src={videoSrc} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            <p className="text-lg text-day-three text-center">{description}</p>
        </div>
    );
};

