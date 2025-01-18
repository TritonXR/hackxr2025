'use client';

import React from 'react';
import HackXRLogo from '@/components/HackXRLogo';

function AboutHeader() {
    return (
        <span className='text-center'>
            <h1>THE</h1>
            <HackXRLogo animation={false} height='4rem'/>
            <h1 className='text-7xl'>MISSION</h1>
        </span>
    );
}

export default AboutHeader;
