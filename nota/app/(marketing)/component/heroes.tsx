"use client"

import Image from 'next/image';

const Heroes = () => {
    return (
        <div className='flex flex-col items-center justify-center max-w-5xl'>
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                <Image
    alt="The guitarist in the concert."
    src="https://note-taking-app-rose.vercel.app/_next/image?url=%2Fdocuments.png&w=1920&q=75"
    width={2250}
    height={1390}
    layout="responsive"
/>              </div>
                <div className='relative h-[400px] w-[400px] hidden md:block'>
                    <Image 
                    alt="The guitarist in the concert."
                    src="https://note-taking-app-rose.vercel.app/_next/image?url=%2Freading.png&w=1920&q=75"
                    width={2250}
                    height={1390}
                    layout="responsive"
                />
                </div>
            </div>
        </div>
    );
}
 
export default Heroes;