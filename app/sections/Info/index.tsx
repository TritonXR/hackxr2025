'use client'

import React from 'react';
import CountdownTimer from './components/countdownTimer';
import { motion } from 'framer-motion';

function Info() {
    return (
        <motion.section
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            id="info"
            className="h-screen w-full"
        >
            <CountdownTimer />
        </motion.section>
    );
}

export default Info;
