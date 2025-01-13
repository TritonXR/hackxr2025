import React from 'react';
import SponsorItems from './components/SponsorItems';

function Sponsors() {
    return (
        <main id="sponsors" className="h-screen w-full border border-white">
            <h1 className="text-center">Our Sponsors</h1>
            <SponsorItems />
        </main>
    );
}

export default Sponsors;
