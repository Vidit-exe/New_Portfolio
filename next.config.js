// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // for static export (optional)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
