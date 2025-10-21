import ElseWhereLinks from '../_components/elseWhereLinks';
import TechSkillsList from '../_components/techSkillsList';
import ProfilePicture from '../_components/profilePicture';

export default function ElseWhere() {
    return (
        <div className="bg-day-three overflow-hidden text-fixed-day-one mx-auto font-serif">
            <div className='grid grid-cols-1 place-items-center'>
                <h1
                    className="mx-auto text-center text-9xl text-bold mt-12 text-day-two-fixed"
                >
                    {'<Edward Magtoto>'}
                </h1>
                <div className='mt-12'>
                    <ProfilePicture />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full flex mt-20 md:ml-36">
                    <div className="flex-grow flex-shrink w-3/4">
                        <p className="text-7xl font-bold text-center mb-4 font-serif italic">
                            Nice to meet you!
                        </p>
                        <p className="p-4 max-w-ld mx-auto">
                            My name is Edward Magtoto, I am a full-stack developer who graduated from the Southern Alberta Institute of Technology. Throughout my academic career, I've honed my abilities in various programming languages such as Python, C#, and JavaScript, and gained hands-on experience with frameworks like React and Node.js. My projects have ranged from developing web applications to creating innovative solutions for real-world problems as well as video games.
                        </p>
                        {/* <div>
                            <TechSkillsList />
                        </div> */}
                    </div>
                </div>
                <div className="mt-36">
                    <div className='bg-day-three'>
                        <h1 className='text-4xl font-bold text-center text-fixed-day-one'>
                            My Links
                        </h1>
                        <div>
                            <ElseWhereLinks />
                        </div>       
                    </div>
                </div>
                <div className="mb-48">

                </div>
                {/* <div className="curved-bottom">
                    </div> */}
            </div>
        </div>
    )
}