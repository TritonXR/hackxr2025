import React from 'react';
import TXRLogo from '@/public/Triton_XR_Logo.png';
import Image from 'next/image';

function About() {
    return (
        <main
            id="about"
            className="h-screen w-full relative flex flex-col justify-center items-center"
        >
            <div>
                <Image
                    src={TXRLogo}
                    width={500}
                    height={500}
                    alt="TXR Logo"
                    className="opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className='relative z-10 h-full'>
                    <h1 className="text-center">HackXR&apos;s Mission</h1>
                    <h3 className='max-w-2xl text-center '>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </h3>
                </div>
            </div>
        </main>
    );
}

export default About;
