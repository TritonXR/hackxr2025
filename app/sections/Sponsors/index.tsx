import React from 'react';
import SponsorItems from './components/SponsorItems';

function Sponsors() {
    return (
        <section id="sponsors" className="h-screen w-full flex items-center">
            {/* DO NOT APPLY FLEX TO MARQUEE WITHOUT PROPER WIDTH CONSTRAINTS*/}
            <div className="w-full font-bold text-center">
                <h1 className="font-black text-5xl text-center">
                    SPONSORS
                </h1>
                <SponsorItems />
                <span className='text-md'>
                    <h3>Want to be a part of the next HackXR?</h3>
                    <h3>
                        Contact us @ {' '}
                        <a
                            href="mailto:admin@tritonxr.org"
                            className="font-bold text-highlight"
                        >
                            admin@tritonxr.org
                        </a>
                    </h3>
                </span>
            </div>
        </section>
    );
}

export default Sponsors;
