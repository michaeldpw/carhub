/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
    disableStaticImages: true
  },
};

module.exports = nextConfig;
