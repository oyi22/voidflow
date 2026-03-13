"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Build Systems That{" "}
          <span className="text-muted-foreground font-light">
            Scale
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Voidflow designs secure, scalable backend architectures for serious digital products.
        </p>

        <div>
          <Button size="lg" className="rounded-full px-8">
            Start Building
          </Button>
        </div>
      </motion.div>
    </section>
  )
}