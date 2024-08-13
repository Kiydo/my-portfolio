import Capstone from '../_components/projectShowcase/projectCapstone';
import GameJamSpace from '../_components/projectShowcase/gameJamSpace';

export default function Projects() {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-4 mt-8 bg-day-one'>
                Projects
            </h1>
            <div>
                <p className='text-center'>
                    I am currently working on a few projects. I will update this page with more information soon.
                </p>
            </div>
            <div>
                <Capstone />
            </div>
            <div>
                <GameJamSpace />
            </div>
        </div>
    )
}