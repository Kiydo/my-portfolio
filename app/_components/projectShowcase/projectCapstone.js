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
        "Capstone project for the Software Development program at SAIT. For an organization based in, Grow Within Nutrition (no longer active). The project is a prototype for a new web application the organization requested. The application includes features such as transactions, scheduling, content management, blogging, newsletters, and admin roles. This allows them to manage their business more efficiently and help promote their services.";

    const projectOverview = "Our team was tasked by Grow Within Nutrition to develop a new web application to replace their outdated static website. The goal was to create a more interactive and engaging platform for both staff and clients, making it easier to connect with new customers while streamlining the organization's daily operations. To achieve this, we implemented role-based accounts to distinguish between staff and clients. Staff members gained the ability to create newsletters and blog posts to better engage with their audience. Additional features such as transaction processing and appointment scheduling were integrated to simplify staff workflows and allow clients to easily book appointments online."

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
        <div className="flex flex-col items-center font-bold">
            <button
                onClick={toggleDescription}
                className="hover-transition"
            >
                <ProjectBanner 
                    title="Grow Within Nutrition"
                    banner={GwnBanner}
                />
            </button>
            {showDescription && (
                <div>
                    <FadeInIcon className="w-full text-fixed-day-one">
                        <ProjectVideo
                            videoSrc="/media/videos/capstone/trailer.webm"
                            title=""
                        />
                        <h2 className='text-center font-bold text-4xl mt-12'>
                            Description
                        </h2>
                        <div className="my-10 max-w-4xl mx-12 text-day-two-fixed bg-day-three">
                            <p>{projectDescription}</p>
                        </div>
                        <h2 className='text-center font-bold text-4xl mt-12'>
                            Project Overview
                        </h2>
                        <div className="my-10 max-w-4xl mx-12 text-day-two-fixed bg-day-three">
                            <p>{projectOverview}</p>
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
