import { Card, CardContent } from "@/components/ui/card"
import { Globe, LayoutDashboard, Lightbulb } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Services() {
  const t = useTranslations("services")
  const items = t.raw("items")

  const icons = [Globe, LayoutDashboard, Lightbulb]

  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">

        <h2 className="text-4xl md:text-5xl font-semibold text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item: any, index: number) => {
            const Icon = icons[index]

            return (
              <Card
                key={index}
                className="rounded-2xl border border-border/50 hover:border-foreground/20 transition"
              >
                <CardContent className="p-10 space-y-6">
                  <Icon className="w-6 h-6 text-primary" />

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}

        </div>
      </div>
    </section>
  )
}