/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",  // Static export mode for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disable Next.js Image Optimization for static export
  },
};

module.exports = nextConfig;