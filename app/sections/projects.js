"use client"
import Capstone from '../_components/projectShowcase/projectCapstone';
import GameJamSpace from '../_components/projectShowcase/gameJamSpace';
import GameJamGamble from '../_components/projectShowcase/gameJamGamble';
import ImageBrowser from '../_components/projectShowcase/imageBrowser';

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


export default function Projects() {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-4 mt-8 bg-day-one py-2'>
                Projects
            </h1>
            
            <div className='flex flex-col'>
                <div>
                    <Capstone />
                </div>
                <div>
                    <GameJamSpace />
                </div>
                <div>
                    <GameJamGamble />
                </div>
                <div>
                    <ImageBrowser />
                </div>
            </div>
        </div>
    )
}