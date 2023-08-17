/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bit.ly',
                port: '',
                pathname: '/dan-abramov',
            },
        ],
    },
  reactStrictMode: true,
  swcMinify: false,

}

module.exports = nextConfig
