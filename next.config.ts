import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "quicksmartclean.vercel.app" }],
        destination: "https://www.quicksmartclean.com/:path*",
        statusCode: 301,
      },
      {
        source: "/hizmetler/ofis-temizligi",
        destination: "/hizmetler/kurumsal-tesis-temizligi",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
