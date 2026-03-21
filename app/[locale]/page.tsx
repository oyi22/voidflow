import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Service"
import ValueSection from "@/components/sections/ValueSection"
import Process from "@/components/sections/Process"
import About from "@/components/sections/About"
import CTA from "@/components/sections/CTA"
import ChatWidget from "@/components/chatbot/ChatWitget"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="space-y-28">
        <Hero />
        <Services />
        <ValueSection />
        <Process />
        <About />
        <CTA />
      </main>

      <Footer />
      <ChatWidget />
    </>
  )
}