"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type QuotePanelContextValue = {
  open: boolean;
  openPanel: () => void;
  closePanel: () => void;
};

const QuotePanelContext = createContext<QuotePanelContextValue | null>(null);

export function QuotePanelProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openPanel = useCallback(() => setOpen(true), []);
  const closePanel = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openPanel, closePanel }),
    [open, openPanel, closePanel],
  );

  return (
    <QuotePanelContext.Provider value={value}>
      {children}
    </QuotePanelContext.Provider>
  );
}

export function useQuotePanel() {
  const context = useContext(QuotePanelContext);
  if (!context) {
    throw new Error("useQuotePanel must be used within QuotePanelProvider");
  }
  return context;
}
