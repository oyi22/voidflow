"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()

  const switchLang = () => {
    const segments = pathname.split("/")
    const currentLocale = segments[1]
    const newLocale = currentLocale === "en" ? "id" : "en"

    segments[1] = newLocale
    router.push(segments.join("/"))
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchLang}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
    </Button>
  )
}