import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This won't work as a true wildcard!
      },
    ],
  },
};

export default nextConfig;
