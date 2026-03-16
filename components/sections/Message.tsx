"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

type MessageProps = {
  trigger: React.ReactNode
}

export default function Message({ trigger }: MessageProps) {
  const [loading, setLoading] = useState(false)
  const t = useTranslations("message")

  const sendEmail = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast.success(t("success"))
      e.target.reset()
    } catch (err:any) {
      toast.error(t("error"))
    }

    setLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
            <DialogDescription aria-describedby={undefined} className="sr-only">
              {t("title")}
            </DialogDescription>
        </DialogHeader>

        <form onSubmit={sendEmail} className="space-y-4">
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <div className="space-y-2">
                  <Label>{t("name")}</Label>
                  <Input name="name" required />
                </div>
                <div className="space-y-2">
                  <Label>{t("email")}</Label>
                  <Input name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label>{t("details")}</Label>
                  <Textarea name="message" required />
                </div>
              <Button className="w-full" disabled={loading}>
                {loading ? t("sending") : t("button")}
              </Button>
        </form>

      </DialogContent>
    </Dialog>
  )
}