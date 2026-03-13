import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Layout, Shield } from "lucide-react"

export default function Features() {
  const items = [
    {
      icon: <Rocket />,
      title: "Fast Development",
      desc: "Optimized structure for scalability.",
    },
    {
      icon: <Layout />,
      title: "Modern UI",
      desc: "Clean SaaS-style interface.",
    },
    {
      icon: <Shield />,
      title: "Secure by Design",
      desc: "Built with best practices.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.title} className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
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