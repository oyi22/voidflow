import { Card, CardContent } from "@/components/ui/card"
import { Zap, Database, Cpu } from "lucide-react"

export default function Services() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">

        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center">
          The{" "}
          <span className="font-semibold">Core</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <Card className="rounded-2xl border border-border/50 bg-transparent hover:border-foreground/20 transition-all duration-300">
            <CardContent className="p-10 space-y-6">
              <Zap className="w-5 h-5 text-muted-foreground" />

              <h3 className="text-lg font-medium tracking-tight">
                Robust Logic
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Clean architecture across Laravel and NestJS.
                Built for long-term maintainability and scale.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border/50 bg-transparent hover:border-foreground/20 transition-all duration-300">
            <CardContent className="p-10 space-y-6">
              <Database className="w-5 h-5 text-muted-foreground" />

              <h3 className="text-lg font-medium tracking-tight">
                Data Integrity
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Structured systems, optimized queries,
                and reliable database architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border/50 bg-transparent hover:border-foreground/20 transition-all duration-300">
            <CardContent className="p-10 space-y-6">
              <Cpu className="w-5 h-5 text-muted-foreground" />

              <h3 className="text-lg font-medium tracking-tight">
                Seamless Connectivity
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Secure APIs and scalable integrations
                designed for modern product ecosystems.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}