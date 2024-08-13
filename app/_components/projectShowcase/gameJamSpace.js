"use client";
import React, { useState } from 'react';
import FadeInIcon from '../fadeInIcon';
import ProjectFeatures from '../projectFeatures';
import ScreenSlider from '../screenSlider';
import Image from 'next/image';
// import GameBanner from "/media/photos/projects/spaceJam/gameBanner.png";
import GameBanner from "@/public/media/photos/projects/spaceJam/gameBanner.png";

export default function GameJamSpace() {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const projectDescription = "The game 'Do Fire Extinguishers Work In Space!?' was created during 'Micro Jam 016' with the theme being Space. The game is first person where the players only option for traversing is via fire extinguisher while they are stranded in space. The player must collect oxygen tanks and extra fire extinguishers to survive and avoid asteroids to reach the escape pod. The game was created in 48 hours using Unity, Blender, and Asprite."

    const screenShots = [
        "/media/photos/projects/spaceJam/spaceDamage.png",
        "/media/photos/projects/spaceJam/spaceEnv.png",
        "/media/photos/projects/spaceJam/spaceOxy.png",
        "/media/photos/projects/spaceJam/spacePod.png",
    ]

    return (
        <div className='min-h-screen flex flex-col items-center bg-day-one'>
            <FadeInIcon className='w-full flex flex-col items-center justify-center my-12'>
                <h1 className='flex flex-col items-center my-12 bg-day-two p-4 rounded-lg shadow-lg text-3xl font-bold mb-4 text-day-three'>
                    Micro Jam 016: Space
                </h1>
                <Image src={GameBanner} alt="Space Jam Banner"  />
            </FadeInIcon>
            <button
                onClick={toggleDescription}
                className="text-day-three hover-transition flex items-center gap-2 px-4 py-2 text-day-three rounded-md font-bold bg-day-two"
            >
                {showDescription ? '▲' : '▼'}
                {showDescription ? ' Hide Details' : ' Show Details'}
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

                        <ScreenSlider screenshots={screenShots} />

                        <div className='flex flex-col text-center items-center mt-8'>
                            <p>Micro Jam 016: Space: https://itch.io/jam/micro-jam-016</p>
                            <p>Game Link: https://botmark.itch.io/fire-extinguisher</p>
                            <p>Github Link: https://github.com/markpwns1/FireHydrantSpace</p>
                        </div>

                    </FadeInIcon>
                </div>
            )}
        </div>
    )

}