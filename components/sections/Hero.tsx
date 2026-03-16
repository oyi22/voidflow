"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Message from "./Message"
import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          {t("titlePart1")}{" "}
          <span className="text-muted-foreground font-light">
            {t("titleHighlight")}
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        <div className="flex items-center justify-center gap-4">

          <Message 
            trigger={
              <Button
                size="lg"
                className="rounded-full px-8 transition-all hover:scale-105"
              >
                {t("startProject")}
              </Button>
            }
          />

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <a href="#services">{t("viewServices")}</a>
          </Button>

        </div>
      </motion.div>
    </section>
  )
}