import Capstone from '../_components/projectShowcase/projectCapstone';
import GameJamSpace from '../_components/projectShowcase/gameJamSpace';
import ImageBrowser from '../_components/projectShowcase/imageBrowser';

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
                    <ImageBrowser />
                </div>
            </div>
        </div>
    )
}