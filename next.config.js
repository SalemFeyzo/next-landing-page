/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "mdx", "tsx"],
  optimizeImages: true,
});

module.exports = nextConfig;
