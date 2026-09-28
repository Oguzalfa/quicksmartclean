import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: "İstanbul'da profesyonel temizlik hizmetleri",
    lang: "tr",
    start_url: "/",
    display: "browser",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
