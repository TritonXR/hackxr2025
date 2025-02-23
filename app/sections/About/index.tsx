'use client';

import React from 'react';
import AboutStars from '@/components/AboutStars';
import AboutHeader from './components/AboutHeader';
import { motion } from 'framer-motion';

function About() {
    return (
        <section
            id="about"
            className="h-screen w-full relative flex flex-col justify-center items-center p-8"
        >
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(4px)' }}
                        className="w-full animate-[spin_300s_linear_infinite]"
                    >
                        <AboutStars color="fill-highlight" className="w-full overflow-hidden" />
                    </motion.div>
                </div>
                <div className="relative z-10 h-full">
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    >
                        <AboutHeader />
                    </motion.div>
                    <div className="flex flex-col md:flex-row overflow-hidden">
                        <motion.h3
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="max-w-80 bg-black/50 md:rounded-l-xl rounded-t-xl p-4 font-bold text-center md:text-right md:w-1/2"
                        >
                            Our mission is to inspire creativity and innovation
                            in virtual reality by bringing together developers,
                            designers, and visionaries to collaboratively push
                            the boundaries of immersive technology.
                        </motion.h3>

                        <div className="hidden md:block w-1 bg-highlight self-stretch"></div>

                        <motion.h3
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="max-w-80 bg-black/50 md:rounded-r-xl rounded-b-xl p-4 font-bold text-center md:text-left md:w-1/2"
                        >
                            Through hands-on collaboration, we empower
                            participants to shape the future of extended
                            reality, fostering a community of creators dedicated
                            to building transformative experiences.
                        </motion.h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
