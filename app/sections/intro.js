import React from 'react';
import Image from 'next/image';
import ProfilePicture from '../_components/profilePicture';
import TechSkillsList from '../_components/techSkillsList';
import ElseWhere from '../_components/elseWhereLinks';
import { useContextProvider } from "@/app/_utils/globalContext";
import test from "../../styles/intro-curve.svg";

export default function Intro() { 
    return (
        <div className="relative bg-day-two overflow-hidden">
            <div className="h-full flex">
                <div className="flex-grow flex-shrink w-3/4 p-4 mt-36 ml-24">
                    <p className="text-7xl font-bold text-center mb-4 font-serif italic text-day-three">
                        Hey There!
                    </p>
                    <p className='text-day-three'>
                        My name is Edward Magtoto, I am a full-stack developer who recently graduated from the Southern Alberta Institute of Technology. Throughout my academic career, I've honed my abilities in various programming languages such as Python, Java, and JavaScript, and gained hands-on experience with frameworks like React and Node.js. My projects have ranged from developing web applications to creating innovative solutions for real-world problems, demonstrating my ability to adapt and thrive in different programming environments.
                    </p>
                    <div>
                        <TechSkillsList />
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0">
                    <ProfilePicture />
                </div>
            </div>
            <div className="curved-bottom">
                {/* <Image src="../../styles/intro-curve.svg" alt="Curved Bottom" layout="fill" objectFit="cover" /> */}
            </div>
        </div>
    );
}