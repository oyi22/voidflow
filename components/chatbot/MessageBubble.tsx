"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import faq from "@/data/faq.json"

export default function MessageBubble() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [answer, setAnswer] = useState("")

  const typeText = (text: string) => {
    setTyping(true)
    setAnswer("")

    let index = 0
    const interval = setInterval(() => {
      index++
      setAnswer(text.slice(0, index))

      if (index === text.length) {
        clearInterval(interval)
        setTyping(false)
      }
    }, 20) // kecepatan ngetik (bisa kamu atur)
  }

  const handleQuestion = (question: string) => {
    const found = faq.find((item) => item.question === question)
    if (found) {
      typeText(found.answer)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {open && (
        <div className="mb-4 w-80 max-w-[90vw] rounded-2xl border bg-background/80 backdrop-blur-xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-medium">Customer Support</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </Button>
          </div>

          <div className="p-4 text-sm space-y-3">

            <div className="bg-muted p-3 rounded-xl">
              Halo 👋 Pilih pertanyaan di bawah:
            </div>

            {faq.map((item, i) => (
              <Button
                key={i}
                size="sm"
                variant="secondary"
                className="w-full text-xs rounded-xl"
                onClick={() => handleQuestion(item.question)}
              >
                {item.question}
              </Button>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="bg-muted p-3 rounded-xl flex gap-1 w-fit">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
              </div>
            )}

            {/* Answer (muncul per huruf) */}
            {answer && (
              <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                {answer}
              </div>
            )}

          </div>
        </div>
      )}

      <Button
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        <MessageCircle />
      </Button>

    </div>
  )
}