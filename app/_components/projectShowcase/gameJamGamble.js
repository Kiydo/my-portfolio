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

    const features = [
        {feature: "Multiple Endings", logo: '/media/photos/projects/gambleJam/multirouteIcon.png'},
        {feature: "Puzzle Platformer", logo: '/media/photos/projects/gambleJam/puzzleIcon.png'},
        {feature: "Up to Chance", logo: '/media/photos/projects/gambleJam/diceIcon.png'}
    ]

    const renderFeatures = (item) => (
        <div className="flex flex-col items-center font-bold">
            <Image src={item.logo} alt={item.feature} width={100} height={100} />
            <p>{item.feature}</p>
        </div>
    )

    const projectDescription = "'Lady Luck' was created during Micro Jam 045' with the themes being Minature and Gambling Addiction. In this game you Control the forces of luck and decide who wins or loses with the oputcome of the game dependent on not just your choices but also your luck. The game was created in 48 hours using Godot and Asprite." 

    const screenShots = [
        "/media/photos/projects/gambleJam/capture2.PNG",
        "/media/photos/projects/gambleJam/capture3.PNG",
        "/media/photos/projects/gambleJam/capture4.png",
        "/media/photos/projects/gambleJam/capture5.png",
        "/media/photos/projects/gambleJam/gamecapture.PNG"
    ]

    const links = [
        { name: "Micro Jam 045: Minature", url: "https://kydo13.itch.io/lady-luck"},
        { name: "Game Link", url: "https://kydo13.itch.io/lady-luck"},
        { name: "Github Link", url: "https://github.com/Kiydo/GameJam45"}
    ]

    return (
        <div className='flex flex-col items-center font-bold'>
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
                    <FadeInIcon className='w-full text-fixed-day-one'>
                        <h2 className='text-center font-bold text-4xl mt-12'>
                                Description
                        </h2>
                        <div className="my-10 max-w-4xl mx-12 text-day-two-fixed bg-day-three">
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