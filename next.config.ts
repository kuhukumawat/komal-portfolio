import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      tailwindcss: resolve(__dirname, "node_modules/tailwindcss"),
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: resolve(__dirname, "node_modules/tailwindcss"),
    };
    return config;
  },
};

export default nextConfig;
