"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { toast } from "sonner"

type MessageProps = {
  trigger: React.ReactNode
}

export default function Message({ trigger }: MessageProps) {
  const [loading, setLoading] = useState(false)
  const t = useTranslations("message")

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTimeout(() => {
      e.target.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 300)
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      time: new Date().toLocaleString(),
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()

      toast.success(t("success"))
      form.reset()
    } catch {
      toast.error(t("error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-md flex flex-col max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription className="sr-only">{t("title")}</DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto flex-1 px-6 pb-6">
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="space-y-2">
              <Label>{t("name")}</Label>
              <Input name="name" required onFocus={handleFocus} />
            </div>
            <div className="space-y-2">
              <Label>{t("email")}</Label>
              <Input name="email" type="email" required onFocus={handleFocus} />
              <Alert variant="default" className="py-2 px-3">
                <InfoIcon className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  {t("emailNote")}
                </AlertDescription>
              </Alert>
            </div>
            <div className="space-y-2">
              <Label>{t("details")}</Label>
              <Textarea
                name="message"
                required
                onFocus={handleFocus}
                className="min-h-[120px] resize-none"
              />
            </div>
            <Button className="w-full" disabled={loading}>
              {loading ? t("sending") : t("button")}
            </Button>
          </form>
        </div>

      </DialogContent>
    </Dialog>
  )
}