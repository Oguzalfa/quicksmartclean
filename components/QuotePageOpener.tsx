"use client";

import { useEffect } from "react";
import { useQuotePanel } from "@/contexts/QuotePanelContext";

export function QuotePageOpener() {
  const { openPanel } = useQuotePanel();

  useEffect(() => {
    openPanel();
  }, [openPanel]);

  return null;
}
