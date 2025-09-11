"use client";
import React, { useState } from 'react';
import FadeInIcon from '../fadeInIcon';
import ProjectFeatures from '../projectFeatures';
import LinksDisplay from '../linksDisplay';
import ScreenSlider from '../screenSlider';
import Image from 'next/image';
import ProjectBanner from '../projectBanner';
import GameBanner from "@/public/media/photos/projects/gambleJam/gambleGameBanner.png";

export default function GameJameGamble() {
    const [showDescription,setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const features = []

    const renderFeatures = (item) => (
        <div className="flex flex-col items-center font-bold">
            <Image src={item.logo} alt={item.feature} width={100} height={100} />
            <p>{item.feature}</p>
        </div>
    )

    const projectDescription = "Lady Luck Description"

    const screenShots = [

    ]

    const links = [
        { name: "Micro Jam 045: Minature", url: "https://kydo13.itch.io/lady-luck"},
        { name: "Game Link", url: "https://kydo13.itch.io/lady-luck"},
        { name: "Github Link", url: "https://github.com/Kiydo/GameJam45"}
    ]

    return (
        <div className='flex flex-col items-center bg-day-one'>
            <button
                onClick={toggleDescription}
                className="hover-transition"
            >
                <ProjectBanner 
                    title="Lady Luck"
                    banner={GameBanner}
                />
            </button>

            {showDescription && (
                <div>
                    <FadeInIcon className='w-full'>
                        <h2 className='text-center font-bold text-4xl mt-12'>
                                Description
                        </h2>
                        <div className="my-10 max-w-4xl mx-12">
                                <p>{projectDescription}</p>
                        </div>
                        <h2 className='text-center font-bold text-4xl mt-12'>
                            Features
                        </h2>

                        <ProjectFeatures items={features} renderItem={renderFeatures} />
                        <ScreenSlider screenshots={screenShots} />

                        <div className=''>
                            <LinksDisplay links={links} />
                        </div>

                    </FadeInIcon>
                </div>
            )}
        </div>
    )
}