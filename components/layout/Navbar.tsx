"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"
import { Menu, X } from "lucide-react"
import LanguageToggle from "../ui/language-toogle"
 

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
 
        <span className="font-semibold tracking-tight">
          Voidflow
        </span>
 
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:opacity-70 transition">Services</a>
          <a href="#tech" className="hover:opacity-70 transition">Tech</a>
          <a href="#about" className="hover:opacity-70 transition">About</a>
          <LanguageToggle/>
          <ThemeToggle />
        </nav>
 
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
          
        </div>

      </div>
 
      {open && (
        <div className="md:hidden border-t bg-background px-6 py-4 space-y-3 text-sm">
          <a href="#services" className="block">Services</a>
          <a href="#tech" className="block">Tech</a>
          <a href="#about" className="block">About</a>
        </div>
      )}
    </header>
  )
}