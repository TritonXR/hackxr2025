'use client';

import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import HackXRLogo from '../HackXRLogo';

const Content = () => {
    const linkStyle =
        'justify-center text-foreground hover:text-highlight transition-colors flex items-center gap-2';

    const links = [
        { Icon: FaInstagram, href: 'https://www.instagram.com/ucsdtxr/' },
        { Icon: FaDiscord, href: 'https://discord.gg/ZSW7caV2dE' },
        { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/virtual-reality-club-at-ucsd/' },
    ];

    return (
        <div className="w-full bg-white pt-8 px-8">
            <div className="grid grid-cols-2 gap-8">
                {/* About */}
                <div className="flex flex-col items-start">
                    <HackXRLogo color="black" animation={false} height="4rem" />
                    <h3 className="font-bold text-black">
                        TritonXR{' '}
                        <span className="text-highlight">@ UC San Diego</span>
                    </h3>
                </div>
                {/* Social */}
                <ul className="justify-evenly items-center rounded-t-xl py-8 sm:flex space-y-4 sm:space-y-0 bg-background">
                    {links.map(({ Icon, href }) => (
                        <li key={href}>
                            <a
                                className={linkStyle}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="w-12 h-12" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div
            className="relative h-[270px] sm:h-[140px]"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="relative h-[calc(100vh+270px)] sm:h-[calc(100vh+140px)] -top-[100vh]">
                <div className="h-[270px] sm:h-[140px] sticky top-[calc(100vh-20px)] sm:top-[calc(100vh-140px)]">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default Footer;
