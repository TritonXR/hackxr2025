import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v5.airtableusercontent.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
