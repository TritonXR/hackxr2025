import React from 'react';
import AboutStars from '@/components/AboutStars';
import AboutHeader from './components/AboutHeader';

function About() {
    return (
        <section
            id="about"
            className="h-screen w-full relative flex flex-col justify-center items-center p-8"
        >
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl overflow-hidden">
                    <div className="w-full animate-[spin_300s_linear_infinite] blur-sm">
                        <AboutStars color="fill-highlight" className="w-full" />
                    </div>
                </div>
                <div className="relative z-10 h-full">
                    <AboutHeader />
                    <h3 className="max-w-2xl text-center ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default About;
