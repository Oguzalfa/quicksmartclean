import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/images";

type SmartImageProps = {
  image: ImageAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  rounded?: boolean;
} & Pick<ImageProps, "fill">;

export function SmartImage({
  image,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspectRatio,
  rounded = false,
  fill = true,
}: SmartImageProps) {
  return (
    <div
      className={cn(
        "smart-image relative overflow-hidden bg-surface",
        rounded && "rounded-sm",
        fill && "h-full w-full",
        className,
      )}
      style={{
        aspectRatio:
          aspectRatio === "auto"
            ? undefined
            : aspectRatio ?? image.aspectRatio,
        ["--obj-pos-mobile" as string]: image.mobileObjectPosition,
        ["--obj-pos-desktop" as string]: image.objectPosition,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={cn("smart-image__img object-cover", imageClassName)}
      />
    </div>
  );
}
