"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OpenPanelOptions = {
  service?: string;
};

type QuotePanelContextValue = {
  open: boolean;
  initialService: string;
  openPanel: (options?: OpenPanelOptions) => void;
  closePanel: () => void;
};

const QuotePanelContext = createContext<QuotePanelContextValue | null>(null);

export function QuotePanelProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [initialService, setInitialService] = useState("");

  const openPanel = useCallback((options?: OpenPanelOptions) => {
    setInitialService(options?.service ?? "");
    setOpen(true);
  }, []);
  const closePanel = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, initialService, openPanel, closePanel }),
    [open, initialService, openPanel, closePanel],
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
