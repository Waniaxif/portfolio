"use client";

import { ThemeProvider } from "next-themes";
import { StyleProvider } from "@ant-design/cssinjs";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ThemeProvider>
  );
}
