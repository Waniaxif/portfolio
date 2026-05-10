"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defaulting to dark mode
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Force the class on the html tag immediately on mount
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Listen for toggles and update the DOM
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      // localStorage.setItem("theme", "light");
      root.classList.add("light");
    }
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {!mounted ? (
        <div className="hidden">{/* Prevent hydration mismatch */}</div>
      ) : (
        <ConfigProvider
          theme={{
            algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: {
              fontFamily: "inherit",
              colorPrimary: "#2563eb", // blue-600
              colorBgBase: isDark ? "#020617" : "#ffffff",
            },
          }}
        >
          {children}
        </ConfigProvider>
      )}
    </ThemeContext.Provider>
  );
}
