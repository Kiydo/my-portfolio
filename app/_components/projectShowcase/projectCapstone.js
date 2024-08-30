"use client";
import React, { useState } from 'react';
import ProjectVideo from '../projectVideo';
import FadeInIcon from '../fadeInIcon';
import ProjectFeatures from '../projectFeatures';
import ScreenSlider from '../screenSlider';
import LinksDisplay from '../linksDisplay';
import Image from 'next/image';
import ProjectBanner from '../projectBanner';
import GwnBanner from "@/public/media/photos/projects/capstone/gwnBanner.PNG";


export default function ProjectCapstone() {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const features = [
        { feature: "Transactions", logo: '/media/photos/projects/capstone/moneyIcon.png' },
        { feature: "Scheduling", logo: '/media/photos/projects/capstone/calenderIcon.png' },
        { feature: "Content Management", logo: '/media/photos/projects/capstone/editIcon.png' },
        { feature: "Blogging", logo: '/media/photos/projects/capstone/blogIcon.png' },
        { feature: "Newsletters", logo: '/media/photos/projects/capstone/newsLetterIcon.png' },
        { feature: 'Admin Roles', logo: '/media/photos/projects/capstone/adminIcon.png' }
    ];

    const renderFeatures = (item) => (
        <div className="flex flex-col items-center font-bold">
            <Image src={item.logo} alt={item.feature} width={100} height={100} />
            <p>{item.feature}</p>
        </div>
    );

    const projectDescription =
        "Capstone project for the Software Development program at SAIT. For an organization based in Calgary, Grow Within Nutrition. The project is a prototype for a new web application the organization requested. The application includes features such as transactions, scheduling, content management, blogging, newsletters, and admin roles. This allows them to manage their business more efficiently and help promote their services.";

    const screenShots = [
        "/media/photos/projects/capstone/slideOne.PNG",
        "/media/photos/projects/capstone/slideTwo.PNG",
        "/media/photos/projects/capstone/slideThree.PNG",
        "/media/photos/projects/capstone/slideFour.PNG",
        "/media/photos/projects/capstone/slideFive.PNG",
        "/media/photos/projects/capstone/slideSix.PNG",
        "/media/photos/projects/capstone/slideSeven.PNG",
        "/media/photos/projects/capstone/slideEight.PNG",
    ]

    const links = [
        { name: "Website Link", url: "https://gwn-temporary.vercel.app/" },
        { name: "Github Link", url: "https://github.com/pltduchoang/GWNTemporary" }
    ]

    return (
        <div className="min-h-screen flex flex-col items-center bg-day-one">
            {/* <div className='flex flex-col items-center my-12 bg-day-three p-4 rounded-lg shadow-lg text-3xl font-bold mb-4 text-day-trim'>
                <FadeInIcon className="w-full flex flex-col items-center justify-center">
                    <h1>
                        Grow Within Nutrition
                    </h1>
                    <Image src={GwnBanner} alt="Grow Within Nutrition Banner" />
                    
                </FadeInIcon>
            </div> */}
            <ProjectBanner 
                title="Grow Within Nutrition"
                banner={GwnBanner}
            />
            <button
                onClick={toggleDescription}
                className="text-day-three hover-transition flex items-center gap-2 px-4 py-2 text-day-three rounded-md font-bold bg-day-two"
            >
                {showDescription ? '▲' : '▼'} {/* Unicode characters for up and down arrows */}
                {showDescription ? 'Hide Details' : 'Show Details'}
            </button>
            {showDescription && (
                <div>
                    <FadeInIcon className="w-full">
                        <ProjectVideo
                            videoSrc="/media/videos/capstone/trailer.webm"
                            title=""
                        />
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
    );
}
