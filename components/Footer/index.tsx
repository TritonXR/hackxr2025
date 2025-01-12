import React from 'react';
import { FaDiscord, FaInstagram} from 'react-icons/fa';

const Content = () => {
    const linkStyle =
        'justify-center text-foreground hover:text-highlight transition-colors flex items-center gap-2';

    const links = [
        { Icon: FaInstagram, href: 'https://www.instagram.com/ucsdtxr/' },
        { Icon: FaDiscord, href: 'https://discord.gg/ZSW7caV2dE' },
    ];

    return (
        <div className="w-full h-full bg-white pt-8 px-8">
            <div className="grid grid-cols-2 h-full gap-8">
                {/* About */}
                <h3 className="p-2 font-theme font-bold h-full text-6xl text-background [writing-mode:vertical-lr] sm:[writing-mode:horizontal-tb]">
                    HackXR
                </h3>

                {/* Social */}
                <ul className="justify-center items-center h-full  rounded-t-xl py-2 sm:flex gap-16 space-y-4 sm:space-y-0 bg-background">
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
            className="relative h-[300px] sm:h-[150px]"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="relative h-[calc(100vh+300px)] sm:h-[calc(100vh+150px)] -top-[100vh]">
                <div className="h-[300px] sm:h-[150px] sticky top-[calc(100vh-300px)] sm:top-[calc(100vh-150px)]">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default Footer;
