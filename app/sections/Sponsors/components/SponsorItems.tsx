'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface Sponsor {
    id: string;
    companyName: string;
    logo?: string;
    website: string;
    description: string;
    tier: string;
}

interface AirtableResponse {
    records: {
        id: string;
        fields: {
            'Company Name': string;
            Logo?: Array<{ url: string }>;
            Website: string;
            Description: string;
            Tier: string;
        };
    }[];
}

const SponsorMarquee = () => {
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const response = await fetch(
                    `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Sponsors`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
                        },
                    }
                );

                if (!response.ok) throw new Error('Failed to fetch sponsors');

                const data: AirtableResponse = await response.json();

                const formattedSponsors = data.records.map((record) => ({
                    id: record.id,
                    companyName: record.fields['Company Name'],
                    logo: record.fields['Logo']?.[0]?.url,
                    website: record.fields['Website'],
                    description: record.fields['Description'],
                    tier: record.fields['Tier'],
                }));

                setSponsors(formattedSponsors);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching sponsors:', err);
                setLoading(false);
            }
        };

        fetchSponsors();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
            </div>
        );
    }

    const sponsorsByTier = {
        High: sponsors.filter((s) => s.tier === 'High'),
        Medium: sponsors.filter((s) => s.tier === 'Medium'),
        Low: sponsors.filter((s) => s.tier === 'Low'),
    };

    const SponsorCard = ({
        sponsor,
        size,
    }: {
        sponsor: Sponsor;
        size: 'large' | 'medium' | 'small';
    }) => {
        const sizeClasses = {
            large: 'w-64 h-48',
            medium: 'w-48 h-36',
            small: 'w-32 h-24',
        };

        // const textSizes = {
        //   large: 'text-lg',
        //   medium: 'text-base',
        //   small: 'text-sm',
        // };

        return (
            <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 block grayscale hover:grayscale-0"
            >
                <div className="transition-all duration-300 hover:scale-105">
                    {sponsor.logo && (
                        <div className={`relative ${sizeClasses[size]}`}>
                            <Image
                                src={sponsor.logo}
                                alt={`${sponsor.companyName} logo`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    )}
                    {/* <div className="p-2 text-center">
                      <h3 className={`font-semibold truncate ${textSizes[size]}`}>{sponsor.companyName}</h3>
                    </div> */}
                </div>
            </a>
        );
    };

    return (
        <div className="pt-4 pb-12">
            {/* High Tier */}
            <Marquee
                autoFill={true}
                direction="right"
                className="py-4 w-full"
                speed={20}
                pauseOnHover={true}
            >
                {sponsorsByTier.High.map((sponsor) => (
                    <SponsorCard
                        key={sponsor.id}
                        sponsor={sponsor}
                        size="large"
                    />
                ))}
            </Marquee>

            {/* Medium Tier */}
            <Marquee
                autoFill={true}
                direction="left"
                className="py-4"
                speed={30}
                pauseOnHover={true}
            >
                {sponsorsByTier.Medium.map((sponsor) => (
                    <SponsorCard
                        key={sponsor.id}
                        sponsor={sponsor}
                        size="medium"
                    />
                ))}
            </Marquee>

            {/* Low Tier */}
            <Marquee
                autoFill={true}
                direction="right"
                className="py-4"
                speed={40}
                pauseOnHover={true}
            >
                {sponsorsByTier.Low.map((sponsor) => (
                    <SponsorCard
                        key={sponsor.id}
                        sponsor={sponsor}
                        size="small"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default SponsorMarquee;
