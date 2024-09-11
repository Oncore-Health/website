/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? "/website" : "",  // Only add basePath in production
  assetPrefix: isProd ? "/website/" : "",  // Only add assetPrefix in production
  output: "export",  // Static export mode for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disable Next.js Image Optimization for static export
  },
};

module.exports = nextConfig;