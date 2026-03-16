import { useTranslations } from "next-intl"

export default function Process() {
  const t = useTranslations("process")
  const steps = t.raw("steps")  

  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step: any, index: number) => (
            <div key={index} className="space-y-2">
              <p className="text-muted-foreground text-sm">
                0{index + 1}
              </p>
              <h3 className="font-semibold">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}