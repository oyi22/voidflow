import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Layout, Shield } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Features() {
  const t = useTranslations("features")
  const items = t.raw("items")
  const icons = [<Rocket />, <Layout />, <Shield />]

  return (
    <section className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {items.map((item: any, index: number) => (
          <Card key={index} className="rounded-2xl">
            <CardContent className="p-6 space-y-4">

              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10">
                {icons[index]}
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>

            </CardContent>
          </Card>
        ))}

      </div>
    </section>
  )
}