import React from 'react';
import SponsorItems from './components/SponsorItems';

function Sponsors() {
    return (
        <main
            id="sponsors"
            className="pt-16 h-screen w-full border border-white flex items-center"
        >
            {/* DO NOT APPLY FLEX TO MARQUEE IT WILL CAUSE YOU TO RUN OUT OF MEMORY */}
            <div className='w-full'>
                <h1 className="text-center">Our Sponsors</h1>
                <SponsorItems />
            </div>
        </main>
    );
}

export default Sponsors;
