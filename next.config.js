/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // optional, okay if you're using static export
  images: {
    unoptimized: true,          // required for "output: export"
  },
  trailingSlash: true,          // optional for SEO
};

module.exports = nextConfig;
