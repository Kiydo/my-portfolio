import ElseWhereLinks from '../_components/elseWhereLinks';
import TechSkillsList from '../_components/techSkillsList';

export default function ElseWhere() {
    return (
        <div className="relative bg-day-three overflow-hidden text-fixed-day-one">
            <div className="h-full flex">
                <div className="flex-grow flex-shrink w-3/4 p-4 mt-24 ml-24">
                    <p className="text-7xl font-bold text-center mb-4 font-serif italic">
                        Hey There!
                    </p>
                    <p className="">
                        My name is Edward Magtoto, I am a full-stack developer who recently graduated from the Southern Alberta Institute of Technology. Throughout my academic career, I've honed my abilities in various programming languages such as Python, Java, and JavaScript, and gained hands-on experience with frameworks like React and Node.js. My projects have ranged from developing web applications to creating innovative solutions for real-world problems, demonstrating my ability to adapt and thrive in different programming environments.
                    </p>
                    <div>
                        <TechSkillsList />
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-day-three py-16'>
                    <h1 className='text-4xl font-bold text-center text-fixed-day-one'>
                        My Links
                    </h1>
                    <div>
                        <ElseWhereLinks />
                    </div>
                    
                </div>
                {/* <div className="curved-bottom">
                </div> */}
            </div>
        </div>
    )
}