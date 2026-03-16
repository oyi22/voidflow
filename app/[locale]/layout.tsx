import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { getMessages } from "next-intl/server"
import { Toaster } from "sonner"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const supportedLocales = ["en", "id"]

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "id" }
  ]
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params

  if (!supportedLocales.includes(locale)) notFound()

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <Toaster richColors position="top-right" />
    </NextIntlClientProvider>
  )
}