import React from 'react';
import Intro from './sections/intro';
import ElseWhere from './sections/elseWhere';
import Projects from './sections/projects';
import NavBar from './_components/navBar';
import '../styles/globals.css';
import Footer from './_components/footer';

export default function Home() {
    return (
        <div className='min-h-screen bg-day-one font-serif text-day-three'>
            <div>
                <NavBar />
            </div>
            <div>
                <Intro />
            </div>
            <div>
                <ElseWhere />
            </div>
            <div>
                <Projects />
            </div>
            <div className='mt-64'>
                <Footer />
            </div>
        </div>
    );
}