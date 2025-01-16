import React from 'react';
import SponsorItems from './components/SponsorItems';

function Sponsors() {
    return (
        <main
            id="sponsors"
            className="pt-16 h-screen w-full border border-white flex items-center"
        >
            {/* DO NOT APPLY FLEX TO MARQUEE WITHOUT PROPER WIDTH CONSTRAINTS*/}
            <div className='w-full'>
                <SponsorItems />
            </div>
        </main>
    );
}

export default Sponsors;
