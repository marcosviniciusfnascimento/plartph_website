/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
