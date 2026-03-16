"use client"

import { ArrowUpRight, Mail, Instagram, MessageCircle, Github } from "lucide-react"
import { useTranslations } from "next-intl"

const socials = [
  {
    label: "Instagram",
    sub: "@voidflow",
    action: "Follow",
    href: "#",
    Icon: Instagram,
  },
  {
    label: "WhatsApp",
    sub: "Join community",
    action: "Join",
    href: "https://wa.me/qr/2SQBSQ3Y75FGG1",
    Icon: MessageCircle,
  },
  {
    label: "GitHub",
    sub: "Open source projects",
    action: "Star",
    href: "#",
    Icon: Github,
  },
]

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-16 mb-16">
 
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-white/70">
                {t("available")}
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-tight mb-4">
              {t("title")}
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              {t("description")}
            </p>

            <a
              href="mailto:voidflow83@gmail.com"
              className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 transition rounded-full px-5 py-3 text-sm font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              voidflow83@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {socials.map((s) => {
              const Icon = s.Icon

              return (
                <div
                  key={s.label}
                  className="flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center shrink-0 text-muted-foreground">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-medium">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.sub}</p>
                  </div>

                  <a
                    href={s.href}
                    className="ml-auto text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground transition"
                  >
                    {s.action}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>

 
        <div className="border-t pt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-foreground" />
            <span className="text-sm font-medium">VoidFlow</span>
          </div>

          <nav className="flex items-center gap-6">
            {["work", "stack", "blog", "privacy"].map((key) => (
              <a
                key={key}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VoidFlow
          </p>
        </div>

      </div>
    </footer>
  )
}
