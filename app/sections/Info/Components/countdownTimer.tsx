'use client'

const Countdown = dynamic(() => import('react-countdown'), { ssr: false });
import dynamic from 'next/dynamic';
import TimerRenderer from './timerRenderer';

const hackDate: Date = new Date("February 28, 2025 17:00:00");

const CountdownTimer = () => {
    return (
        <div className='flex w-full justify-center'>
            <Countdown 
                date={hackDate} 
                renderer={TimerRenderer}
            />
        </div>
    );
}

export default CountdownTimer;