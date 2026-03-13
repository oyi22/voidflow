"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Lang = "id" | "en"

const LanguageContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
} | null>(null)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLang] = useState<Lang>("id")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang
    if (saved) setLang(saved)
  }, [])

  const changeLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("Use inside LanguageProvider")
  return context
}