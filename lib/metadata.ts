import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/lib/site";

const defaultOgImage = absoluteUrl(SITE.ogImage);

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "tr_TR",
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1440,
          alt: `${SITE.name} profesyonel temizlik hizmetleri`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const defaultOgImageUrl = defaultOgImage;
