import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 80, 100],
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      { hostname: "lastfm.freetls.fastly.net" },
    ],
  },
};

export default nextConfig;
