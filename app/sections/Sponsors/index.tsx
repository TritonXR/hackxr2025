'use client';

import React from 'react';
import SponsorItems from './components/SponsorItems';
import { motion } from 'framer-motion';

function Sponsors() {
    return (
        <section id="sponsors" className="h-screen w-full flex items-center">
            {/* DO NOT APPLY FLEX TO MARQUEE WITHOUT PROPER WIDTH CONSTRAINTS*/}
            <div className="w-full font-bold text-center">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="font-black text-5xl text-center"
                >
                    PARTNERS
                </motion.h1>
                <SponsorItems />
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-md"
                >
                    <h3>Want to be a part of the next HackXR?</h3>
                    <h3>
                        Contact us @{' '}
                        <a
                            href="mailto:admin@tritonxr.org"
                            className="font-bold text-highlight"
                        >
                            admin@tritonxr.org
                        </a>
                    </h3>
                </motion.div>
            </div>
        </section>
    );
}

export default Sponsors;
