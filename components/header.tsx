"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { LoanApplicationForm } from "./loan-application-form"
import { ContactForm } from "./contact-form"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl">{"P"}</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground">{"PrêtRapide"}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                href="#offres"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm xl:text-base"
              >
                {"Nos Offres"}
              </Link>
              <Link
                href="#fonctionnement"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm xl:text-base"
              >
                {"Comment ça marche"}
              </Link>
              <Link
                href="#avantages"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm xl:text-base"
              >
                {"Avantages"}
              </Link>
              <Link
                href="#temoignages"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm xl:text-base"
              >
                {"Témoignages"}
              </Link>
              <ContactForm
                trigger={
                  <button className="text-foreground/80 hover:text-foreground transition-colors text-sm xl:text-base">
                    {"Contact"}
                  </button>
                }
              />
            </nav>

            <div className="hidden lg:flex items-center">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 xl:h-11 px-4 xl:px-6 text-sm xl:text-base"
                onClick={() => setIsFormOpen(true)}
              >
                {"Faire une demande"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col gap-2">
                <Link
                  href="#offres"
                  className="text-foreground/80 hover:text-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {"Nos Offres"}
                </Link>
                <Link
                  href="#fonctionnement"
                  className="text-foreground/80 hover:text-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {"Comment ça marche"}
                </Link>
                <Link
                  href="#avantages"
                  className="text-foreground/80 hover:text-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {"Avantages"}
                </Link>
                <Link
                  href="#temoignages"
                  className="text-foreground/80 hover:text-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {"Témoignages"}
                </Link>
                <ContactForm
                  trigger={
                    <button className="text-foreground/80 hover:text-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted text-left">
                      {"Contact"}
                    </button>
                  }
                />
                <div className="pt-4 mt-2 border-t border-border">
                  <Button
                    className="w-full bg-primary text-primary-foreground h-12 text-base"
                    onClick={() => {
                      setIsFormOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {"Faire une demande"}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoanApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}
