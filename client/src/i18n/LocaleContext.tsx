import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { chromeCopy, footerLinkLabels, type ChromeCopy, type ChromeLocale } from "./chrome";

const STORAGE_KEY = "flora-chrome-locale";

type LocaleContextValue = {
  locale: ChromeLocale;
  setLocale: (locale: ChromeLocale) => void;
  t: ChromeCopy;
  footerLabel: (href: string, fallback: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readInitialLocale(): ChromeLocale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // ignore
  }
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<ChromeLocale>(readInitialLocale);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: chromeCopy[locale],
      footerLabel: (href, fallback) => footerLinkLabels[locale][href] ?? fallback,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
