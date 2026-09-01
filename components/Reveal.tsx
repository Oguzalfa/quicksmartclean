"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "up" | "zoom" | "fade" | "line";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  as?: "div" | "span" | "li" | "article" | "section";
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "zoom"
      ? "reveal-zoom"
      : variant === "fade"
        ? "reveal-fade"
        : variant === "line"
          ? "gold-rule"
          : "reveal";

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={cn(variantClass, className)}
      style={{ ["--d" as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
