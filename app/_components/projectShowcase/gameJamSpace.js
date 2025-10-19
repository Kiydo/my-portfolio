"use client";
import React, { useState } from 'react';
import FadeInIcon from '../fadeInIcon';
import ProjectFeatures from '../projectFeatures';
import LinksDisplay from '../linksDisplay';
import ScreenSlider from '../screenSlider';
import Image from 'next/image';
import ProjectBanner from '../projectBanner';
// import GameBanner from "/media/photos/projects/spaceJam/gameBanner.png";
import GameBanner from "@/public/media/photos/projects/spaceJam/gameBanner.png";

export default function GameJamSpace() {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const features = [
        {feature: "Environmental Hazards", logo: '/media/photos/projects/spaceJam/asteroidIcon.png'},
        {feature: "Resource Management", logo: '/media/photos/projects/spaceJam/oxygenIcon.png'},
        {feature: "Propulsion-Based Movement", logo: '/media/photos/projects/spaceJam/extinguisherIcon.png'},
        {feature: "Escape Ending", logo: '/media/photos/projects/spaceJam/shipIcon.png'}
    ]

    const renderFeatures = (item) => (
        <div className="flex flex-col items-center font-bold">
            <Image src={item.logo} alt={item.feature} width={100} height={100} />
            <p>{item.feature}</p>
        </div>
    )


    const projectDescription = "The game 'Do Fire Extinguishers Work In Space!?' was created during 'Micro Jam 016' with the theme being Space. The game is first person where the players only option for traversing is via fire extinguisher while they are stranded in space. The player must collect oxygen tanks and extra fire extinguishers to survive and avoid asteroids to reach the escape pod. The game was created in 48 hours using Unity, Blender, and Asprite."

    const overview = ""

    const screenShots = [
        "/media/photos/projects/spaceJam/spaceDamage.PNG",
        "/media/photos/projects/spaceJam/spaceEnv.PNG",
        "/media/photos/projects/spaceJam/spaceOxy.PNG",
        "/media/photos/projects/spaceJam/spacePod.PNG",
    ]

    const links = [
        { name: "Micro Jam 016: Space", url: "https://itch.io/jam/micro-jam-016" },
        { name: "Game Link", url: "https://botmark.itch.io/fire-extinguisher" },
        { name: "Github Link", url: "https://github.com/markpwns1/FireHydrantSpace"}
    ]

    return (
        <div className='flex flex-col items-center bg-day-one'>
            <button
               onClick={toggleDescription}
               className="hover-transition" 
            >
                <ProjectBanner
                    title="Do Fire Extinguishers Work In Space!?"
                    banner={GameBanner}
                />
            </button>
            {/* <button
                onClick={toggleDescription}
                className="text-day-three hover-transition flex items-center gap-2 px-4 py-2 text-day-three rounded-md font-bold bg-day-two"
            >
                {showDescription ? '▲' : '▼'}
                {showDescription ? ' Hide Details' : ' Show Details'}
            </button> */}
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