import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import ValueSection from "@/components/sections/ValueSection"
import CTA from "@/components/sections/CTA"
import ChatWidget from "@/components/chatbot/ChatWitget"

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <About />
        <ValueSection />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}