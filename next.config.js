/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "mdx", "tsx"],
  optimizeImages: true,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
});

module.exports = nextConfig;
