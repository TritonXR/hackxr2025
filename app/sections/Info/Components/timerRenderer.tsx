'use client';

import { CountdownRenderProps } from 'react-countdown';
import { useState, useEffect } from 'react';

const SlidingDigit = ({ digit }: { digit: string }) => {
    const [prevDigit, setPrevDigit] = useState(digit);
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        if (digit !== prevDigit) {
            setSlide(true);
            const timer = setTimeout(() => {
                setPrevDigit(digit);
                setSlide(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [digit, prevDigit]);

    const digitStyles =
        'absolute inset-0 flex items-center justify-center text-8xl font-bold';

    return (
        <div className="h-24 w-16 overflow-hidden relative">
            <span
                className={digitStyles}
                style={{
                    transform: slide
                        ? 'translateY(100%)'
                        : 'translateY(0)',
                    transition: slide
                        ? 'transform 300ms ease-in-out'
                        : 'none',
                }}
            >
                {prevDigit}
            </span>
            {slide && (
                <span
                    className={digitStyles}
                    style={{
                        transform: 'translateY(-100%)',
                        animation: 'timerSlideIn 300ms ease-in-out forwards',
                    }}
                >
                    {digit}
                </span>
            )}
        </div>
    );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="flex">
            {String(value)
                .padStart(2, '0')
                .split('')
                .map((digit, i) => (
                    <SlidingDigit key={i} digit={digit} />
                ))}
        </div>
        <span className="text-sm mt-2">{label}</span>
    </div>
);

const TimerRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
}: CountdownRenderProps) => {
    if (completed) {
        // const hackTheme =
        //     process.env.NEXT_PUBLIC_HACK_THEME ||
        //     'Please Contact Executive Board';
        return (
            <div className="text-center overflow-hidden">
                <h3 className="text-dim">
                    {/* The Theme Is */}
                    HACKXR 2025 has concluded...
                </h3>
                <div className="w-32 h-0.5 bg-dim mx-auto mb-5" />
                <h1 className="text-7xl font-black w-screen mb-5 py-5 bg-highlight">
                    {/* {hackTheme} */}
                    2026 PENDING
                </h1>
                <div className="w-32 h-0.5 bg-dim mx-auto" />
                <h3 className="mb-5 text-dim">
                    {/* Happy Hacking ! */}
                    See you next time!
                </h3>
            </div>
        );
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <TimeUnit key="days" value={days} label="Days" />
            <div className="hidden sm:block w-1 h-32 bg-highlight"></div>
            <TimeUnit key="hours" value={hours} label="Hours" />
            <div className="hidden sm:block w-1 h-32 bg-highlight"></div>
            <TimeUnit key="minutes" value={minutes} label="Minutes" />
            <div className="hidden sm:block w-1 h-32 bg-highlight"></div>
            <TimeUnit key="seconds" value={seconds} label="Seconds" />
        </div>
    );
};

export default TimerRenderer;
