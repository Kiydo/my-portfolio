import React from 'react';
import Image from 'next/image';
import FadeInIcon from './fadeInIcon';

// import Python from '/media/photos/techLogos/python-logo.png';
// import CSharp from '/media/photos/techLogos/c_sharp_logo.png';
// import Java from '/media/photos/techLogos/java-4-logo.png';
// import JavaScript from '/media/photos/techLogos/JavaScript-logo.png';
// import NodeJs from '/media/photos/techLogos/nodeJs-logo.png';
// import MySQL from '/media/photos/techLogos/Mysql_logo.png';
// import ReactLogo from '/media/photos/techLogos/react-logo.png';
// import HTMLLogo from '/media/photos/techLogos/html5.png';
// import CSSLogo from '/media/photos/techLogos/css-logo.png';

// import UnityLogo from '/media/photos/techLogos/unity-logo.png';
// import FireBase from '/media/photos/techLogos/firebase-logo.png';
// import DockerLogo from '/media/photos/techLogos/docker-logo.png';
// import AndroidStudio from '/media/photos/techLogos/android-studio.webp';
// import MariaDB from '/media/photos/techLogos/maria-db.png';

export default function TechSkillsList() {
    const technologies = [
        { name: 'Python', logo: '/media/photos/techLogos/python-logo.png' },
        { name: 'C#', logo: '/media/photos/techLogos/c_sharp_logo.png' },
        { name: 'JavaScript', logo: '/media/photos/techLogos/JavaScript-logo.png' },
        { name: 'Node.js', logo: '/media/photos/techLogos/nodeJs-logo.png' },
        { name: 'Java', logo: '/media/photos/techLogos/java-4-logo.png' },
        { name: 'MySQL', logo: '/media/photos/techLogos/Mysql_logo.png' },
        { name: 'React', logo: '/media/photos/techLogos/react-logo.png' },
        { name: 'HTML', logo: '/media/photos/techLogos/html5.png' },
        { name: 'CSS', logo: '/media/photos/techLogos/css-logo.png' },
        { name: 'Unity', logo: '/media/photos/techLogos/unity-logo.png'},
        { name: 'Firebase', logo: '/media/photos/techLogos/firebase-logo.png'},
        { name: 'Docker', logo: '/media/photos/techLogos/docker-logo.png' },
        { name: 'Android Studio', logo: '/media/photos/techLogos/android-studio.webp' },
        { name: 'MariaDB', logo: '/media/photos/techLogos/maria-db.png' }
      ];

    return (
        <div className='my-12 bg-day-two'>
            <h1 className='text-4xl font-bold mx-0 text-center sm:mb-8 text-day-three font-serif italic'>Programming Languages and Technologies</h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 p-2'>
                {technologies.map((tech, index) => (
                    <FadeInIcon key={index} className="flex flex-col items-center">
                        <Image src={tech.logo} alt={tech.name} width={50} height={50} />
                        <p className='mt-2 text-day-three text-center'>{tech.name}</p>
                    </FadeInIcon>
                ))}
            </div>
        </div>
    );
}