import { useTranslations } from "next-intl"

export default function About() {

  const t = useTranslations("about")

  return (
    <section id="about" className="py-28 px-6 bg-muted/40">
      <div className="max-w-3xl mx-auto text-center space-y-6">

        <h2 className="text-4xl font-semibold">
          {t("title")}
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          {t("description")}
        </p>

      </div>
    </section>
  )
}