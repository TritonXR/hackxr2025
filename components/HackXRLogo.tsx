import React from 'react';

const HackXRLogo = ({
    className = '',
    width = '100%',
    height = 'auto',
    color = 'currentColor',
    highlight = 'var(--highlight)',
    animation = true,
}) => {
    return (
        <div className="relative group flex items-center">
            <div className="relative" style={{ height }}>
                {/* HACK */}
                <svg
                    viewBox="0 0 670 200"
                    width={width}
                    height={height}
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        style={{ fill: highlight }}
                        d="m 118.8713,318.78343 v 92.42816 h 44.34303 v -23.40916 h 15.97473 v 23.40916 h 41.65948 v -92.48117 h -42.05532 v 22.29941 h -15.97473 v -22.29941 z m 115.06481,-0.053 v 92.48117 h 44.48307 v -21.03902 l 18.6707,21.03902 h 64.71543 l -92.48118,-92.48117 z m 34.61907,38.46018 14.89573,16.21968 H 268.55518 Z M 118.8713,426.24943 v 92.91876 l 101.97724,-0.43758 V 480.73222 H 164.8256 V 464.758 h 56.02294 v -38.50857 z m 115.06481,0 v 92.48118 h 45.37404 l 0.66042,-19.05136 17.39633,19.21979 63.7607,-0.0656 -41.20824,-44.3625 41.88595,-48.22102 h -64.04209 l -19.34404,21.7041 v -21.7041 z"
                        transform="translate(-118.38407,-318.33571)"
                    />
                </svg>

                {/* XR */}
                <svg
                    viewBox="0 0 670 200"
                    width={width}
                    height={height}
                    className={`absolute top-0 left-0 ${className} ${animation ? 'smooth-slide' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        style={{ fill: color }}
                        d="m 554.12228,375.64837 -44.37752,43.84377 44.43811,44.40324 z m 85.21155,-2.48717 h 43.86182 a 16.000615,16.000615 45 0 1 16.00062,16.00062 l 0,3.18893 A 17.734947,17.734947 135 0 1 681.46132,410.0857 H 639.33383 Z m -244.55212,-54.33297 43.84377,44.37752 44.40324,-44.43811 z m 387.40109,85.56673 c 0,26.07045 -18.37277,47.69091 -42.92916,52.67586 l 43.21345,33.07641 z m -140.77487,114.33565 52.62463,0.34488 -50.76195,-46.25596 c -2.49415,-2.49415 -1.86268,45.91108 -1.86268,45.91108 z M 438.62548,474.25529 398.69794,518.6934 h 88.24701 z m 343.75112,-155.59776 -45.8618,0.11673 c 23.73946,6.72067 45.51225,29.56877 46.01077,55.30341 z"
                        transform="translate(-118.38407,-318.33571)"
                    />
                </svg>
            </div>

            <style jsx>{`
                .smooth-slide {
                    transition: transform 0.3s ease-out;
                }

                .group:hover .smooth-slide {
                    transform: translateX(20px);
                    transition: transform 0.3s ease-in;
                }
            `}</style>
        </div>
    );
};

export default HackXRLogo;