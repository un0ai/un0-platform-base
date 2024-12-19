"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ClientOnly } from "@/components/client-only"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ClientOnly>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </ClientOnly>
  )
}
