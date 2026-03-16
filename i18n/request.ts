import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

const supportedLocales = ["en", "id"]

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !supportedLocales.includes(locale)) notFound()

  const messages = Object.assign(
    {},
    ...(await Promise.all([
      import(`../messages/${locale}/navbar.json`),
      import(`../messages/${locale}/about.json`),
      import(`../messages/${locale}/cta.json`),
      import(`../messages/${locale}/features.json`),
      import(`../messages/${locale}/footer.json`),
      import(`../messages/${locale}/hero.json`),
      import(`../messages/${locale}/message.json`),
      import(`../messages/${locale}/process.json`),
      import(`../messages/${locale}/services.json`),
      import(`../messages/${locale}/valuesection.json`),
      import(`../messages/${locale}/chatwidget.json`),   
    ])).map((m) => m.default)
  )

  return { locale, messages }
})