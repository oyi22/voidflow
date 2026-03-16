import { Button } from "@/components/ui/button"
import Message from "./Message"
import { useTranslations } from "next-intl"

export default function CTA() {

  const t = useTranslations("cta")

  return (
    <section className="py-28 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold">
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h2>

        <p className="text-muted-foreground">
           {t("description")}
        </p>

         <Message 
            trigger={
              <Button
            size="lg"
            className="rounded-full px-8 transition-all hover:scale-105"
          >
            {t("button")}
          </Button>
          }
         />
         
      </div>
    </section>
  )
}