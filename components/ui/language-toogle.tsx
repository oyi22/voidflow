"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language/LanguageProvider"

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  const toggle = () => {
    setLang(lang === "id" ? "en" : "id")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      title="Change Language"
    >
      <Globe className="w-5 h-5" />
    </Button>
  )
}