"use client";
import React, { useEffect, useState } from 'react';
import FadeInIcon from '../fadeInIcon';
import ProjectFeatures from '../projectFeatures';
import LinksDisplay from '../linksDisplay';
import ScreenSlider from '../screenSlider';
import Image from 'next/image';
import ImageSearchBanner from "@/public/media/photos/projects/imageBrowser/imageSearchBanner.PNG";

export default function ProjectCapstone() {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const features = [
        { feature: "Image Search", logo: '/media/photos/projects/imageBrowser/searchIcon.png' },
        { feature: "User Accounts", logo: '/media/photos/projects/imageBrowser/accountIcon.png' },
        { feature: "Save Photos", logo: '/media/photos/projects/imageBrowser/saveIcon.png' },
        { feature: "Cloud Database", logo: '/media/photos/projects/imageBrowser/cloudDataIcon.png' },
    ];

    const renderFeatures = (item) => (
        <div className="flex flex-col items-center font-bold">
            <Image src={item.logo} alt={item.feature} width={100} height={100} />
            <p>{item.feature}</p>
        </div>
    );

    const projectDescription =
        "A web application that allows users to search for images and save them to their account. The application uses the Unsplash API to search for images. Users can create an account to save their favorite images. The application uses Firebase for the database to store user accounts and saved images.";

    const screenShots = [
        "/media/photos/projects/imageBrowser/imageSearchHome.PNG",
        "/media/photos/projects/imageBrowser/imageSearchUsed.PNG",
        "/media/photos/projects/imageBrowser/imageSearchSaved.PNG",
        "/media/photos/projects/imageBrowser/imageSearchLogin.PNG"
    ];

    const links = [
        { name: "Website Link", url: "https://cprg306-project-omega.vercel.app/pages" },
        { name: "Github Link", url: "https://github.com/Kiydo/cprg306-project"}
    ];

    return(
        <div className='min-h-screen flex flex-col items-center bg-day-one'>
            <div className='flex flex-col items-center  bg-day-three p-4 rounded-lg shadow-lg text-3xl font-bold mb-4 text-day-trim'>
                <FadeInIcon className='w-full flex flex-col items-center justify-center'>
                    <h1>
                        Photo Search Tool
                    </h1>
                    <Image src={ImageSearchBanner} alt="Photo Search Banner" />
                </FadeInIcon>
            </div>
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
                        <h2 className='text-center font-bold text-4xl mt-12'>
                            Features
                        </h2> 
                        <ProjectFeatures items={features} renderItem={renderFeatures} />
                        <ScreenSlider screenshots={screenShots} />
                        <LinksDisplay links={links} />
                    </FadeInIcon>
                </div>
            )}
        </div>
    )
}