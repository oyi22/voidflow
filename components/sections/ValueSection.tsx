import { Card, CardContent } from "@/components/ui/card"
import { Shield, Layers, Rocket } from "lucide-react"

export default function ValueSection() {
  const items = [
    {
      title: "Scalable Architecture",
      desc: "Designed to grow without rewriting the core.",
      Icon: Layers,
    },
    {
      title: "Security First",
      desc: "Built with best practices from day one.",
      Icon: Shield,
    },
    {
      title: "Performance Focused",
      desc: "Optimized backend systems for speed and stability.",
      Icon: Rocket,
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map(({ title, desc, Icon }) => (
          <Card key={title} className="rounded-2xl">
            <CardContent className="p-8 space-y-4">
              <Icon className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}