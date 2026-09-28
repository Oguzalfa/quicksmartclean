import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/hizmetler/ofis-temizligi",
        destination: "/hizmetler/kurumsal-tesis-temizligi",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
