import faqId from "@/data/faq.id.json"
import faqEn from "@/data/faq.en.json"

export function getAnswer(message: string, locale: string = "id") {
  const faq = locale === "id" ? faqId : faqEn

  const found = faq.find((item) =>
    message.toLowerCase().includes(item.question.toLowerCase())
  )

  return found
    ? found.answer
    : locale === "id"
      ? "Pertanyaan belum tersedia. Silakan hubungi kami untuk informasi lebih lanjut."
      : "Question not available. Please contact us for more information."
}