import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-28 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold">
          Ready to build something serious?
        </h2>

        <p className="text-muted-foreground">
          Let’s design the architecture behind your next product.
        </p>

        <Button size="lg" className="rounded-full px-8">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}