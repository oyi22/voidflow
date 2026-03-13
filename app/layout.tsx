import "./globals.css"
import { ThemeProvider } from "next-themes"
import AppClient from "@/components/layout/AppClient"
import { LanguageProvider } from "@/components/language/LanguageProvider"

export const metadata = {
  title: "VoidFlow",
  description: "Premium SaaS Starter",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
              <AppClient>{children}</AppClient>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}