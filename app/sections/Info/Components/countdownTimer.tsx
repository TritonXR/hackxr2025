'use client';

const Countdown = dynamic(() => import('react-countdown'), { ssr: false });
import dynamic from 'next/dynamic';
import TimerRenderer from './timerRenderer';

const hackDate: Date = new Date('March 1, 2025 12:00:00');

const CountdownTimer = () => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <Countdown date={hackDate} renderer={TimerRenderer} />
        </div>
    );
};

export default CountdownTimer;
