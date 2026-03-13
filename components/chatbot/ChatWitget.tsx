"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAnswer } from "@/lib/chat"
import faq from "@/data/faq.json"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<
    { role: "user" | "support"; text: string }[]
  >([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)

  const send = (text?: string) => {
    const message = text || input
    if (!message.trim()) return

    const reply = getAnswer(message)

    // Tambah pesan user dulu
    setMessages((prev) => [
      ...prev,
      { role: "user", text: message },
    ])

    setInput("")
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)

      setMessages((prev) => [
        ...prev,
        { role: "support", text: reply },
      ])
    }, 1200)
  }

  const clearChat = () => {
    setMessages([])
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages, isTyping])

  return (
    <> 
      <Button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-xl"
      >
        {open ? <X /> : <MessageCircle />}
      </Button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-background/80 backdrop-blur-xl border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
 
          <div className="p-4 border-b flex justify-between items-center text-sm font-medium">
            <span>Customer Support</span>
            <Button variant="ghost" size="icon" onClick={clearChat}>
              <Trash2 size={16} />
            </Button>
          </div>
 
          <div
            ref={scrollRef}
            className="h-[420px] max-h-[50vh] overflow-y-auto p-4 space-y-3 text-sm"
          >
            {messages.length === 0 && !isTyping && (
              <p className="text-muted-foreground text-center">
                How can we help you?
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted px-3 py-2 rounded-2xl flex gap-1 w-fit">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="p-3 border-t">
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {faq.map((item, i) => (
                <Button
                  key={i}
                  size="sm"
                  variant="secondary"
                  className="text-xs rounded-full shrink-0"
                  onClick={() => send(item.question)}
                >
                  {item.question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}