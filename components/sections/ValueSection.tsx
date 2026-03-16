import { Card, CardContent } from "@/components/ui/card"
import { Shield, Rocket, Layers } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ValueSection() {
  const t = useTranslations("value")
  const items = t.raw("items")

  const icons = [Rocket, Layers, Shield]

  return (
    <section id="value" className="py-28 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item: any, index: number) => {
            const Icon = icons[index]

            return (
              <Card key={index} className="rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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