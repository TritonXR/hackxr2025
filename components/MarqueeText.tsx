import React from 'react'
import Marquee from 'react-fast-marquee'

interface MarqueeProps {
    text: string
    direction?: "left" | "right" | "up" | "down" | undefined
}

const MarqueeText: React.FC<MarqueeProps>=({ text, direction }) => {
  return (
    <Marquee
            autoFill={true}
            direction={direction}
            className="overflow-hidden bg-background select-none"
            gradient={true}
            gradientColor={'var(--background)'}
          >
            <span className="font-black text-xl py-2 inline-block text-foreground">
              ✦ {text}&nbsp;
            </span>
    </Marquee>
  )
}

export default MarqueeText