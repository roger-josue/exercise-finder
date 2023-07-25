/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'edb-4rme8.ondigitalocean.app',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'api.exercisedb.io',
            pathname: '/**',
          }
        ],
      }
}

module.exports = nextConfig
