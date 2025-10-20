"use client"
import Capstone from '../_components/projectShowcase/projectCapstone';
import GameJamSpace from '../_components/projectShowcase/gameJamSpace';
import GameJamGamble from '../_components/projectShowcase/gameJamGamble';
import ImageBrowser from '../_components/projectShowcase/imageBrowser';

import AnimateBg from '../_utils/animateBg';
// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";


export default function Projects() {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-4 mt-8 py-2'>
                Projects
            </h1>

            <div className='relatic flex flex-col p-4 rounded-lg overflow-hidden'>
                <div className='absolute inset-0 -z-10'>
                    <AnimateBg />
                </div>

                <div className='flex flex-col relative z-10'>
                    <Capstone />
                    <GameJamSpace />
                    <GameJamGamble />
                    <ImageBrowser />
                </div>
            </div>
        </div>
    )
}