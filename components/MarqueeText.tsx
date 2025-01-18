import React from 'react';
import Marquee from 'react-fast-marquee';

interface MarqueeProps {
    text: string;
    direction?: 'left' | 'right' | 'up' | 'down' | undefined;
}

{
    /* DO NOT APPLY FLEX TO MARQUEE WITHOUT PROPER WIDTH CONSTRAINTS*/
}

const MarqueeText: React.FC<MarqueeProps> = ({ text, direction }) => {
    return (
        <Marquee
            autoFill={true}
            direction={direction}
            className="overflow-hidden bg-background select-none"
            gradient={true}
            gradientColor={'var(--background)'}
            speed={3}
        >
            <span className="font-black text-xl py-2 inline-block text-foreground">
            ✖ {text}&nbsp;
            </span>
        </Marquee>
    );
};

export default MarqueeText;
