import Image from 'next/image';
// import ProfilePic from '/media/photos/pf_pic.png';

export default function ProfilePicture() { 
    return (
        <div className='bg-day-two'>
            <Image src='/media/photos/pf_pic.png' width={700} height={700} className="max-w-6/12" alt="Profile Picture"/>
        </div>
    );
}