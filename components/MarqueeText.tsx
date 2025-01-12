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
            className="bg-foreground py-4 sm:py-2 select-none"
          >
            <span className="font-black text-xl text-background">
              ✦ {text}&nbsp;
            </span>
    </Marquee>
  )
}

export default MarqueeText