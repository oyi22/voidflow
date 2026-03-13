import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      {[1,2,3].map((i) => (
        <Card key={i}>
          <CardContent className="h-40 flex items-center justify-center">
            Project {i}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}