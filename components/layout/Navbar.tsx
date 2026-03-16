"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"
import { Menu, X } from "lucide-react"
import LanguageToggle from "../ui/language-toogle"
import { useTranslations } from "next-intl"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const t = useTranslations("navbar")

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">

        <span className="font-semibold tracking-tight">
          Voidflow
        </span>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about">{t("about")}</a>
          <a href="#services">{t("services")}</a>
          <a href="#value">{t("why")}</a>
          <a href="#process">{t("process")}</a>
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

      </div>

      {open && (
        <div className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#about" onClick={() => setOpen(false)}>{t("about")}</a>
          <a href="#services" onClick={() => setOpen(false)}>{t("services")}</a>
          <a href="#value" onClick={() => setOpen(false)}>{t("why")}</a>
          <a href="#process" onClick={() => setOpen(false)}>{t("process")}</a>
        </div>
      )}
    </header>
  )
}