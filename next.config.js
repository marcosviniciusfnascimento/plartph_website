/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
