/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.licdn.com'], // Allow LinkedIn media domain
  },
};

module.exports = nextConfig;