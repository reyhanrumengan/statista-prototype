import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "de.statista.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.statcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
