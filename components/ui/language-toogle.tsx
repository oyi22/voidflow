"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

export default function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()

  const toggle = () => {
    const newLocale = pathname.startsWith("/en") ? "id" : "en"
    const newPath = pathname.replace(/^\/(en|id)/, `/${newLocale}`)
    router.push(newPath)
  }

  return  (
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