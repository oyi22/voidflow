import faq from "@/data/faq.json"

export function getAnswer(message: string) {
  const found = faq.find((item) =>
    message.toLowerCase().includes(item.question.toLowerCase())
  )

  return found
    ? found.answer
    : "Pertanyaan belum tersedia. Silakan hubungi kami untuk informasi lebih lanjut."
}