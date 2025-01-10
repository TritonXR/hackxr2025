'use client'

import { CountdownRenderProps } from "react-countdown";

const TimerRenderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    return (
        <h1 className="text-8xl font-bold">
            {String(days).padStart(2, '0')}:{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </h1>
    );
};

export default TimerRenderer;