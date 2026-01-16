"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { LoanApplicationForm } from "./loan-application-form"
import { ContactForm } from "./contact-form"

// Composant pour les liens de navigation
const NavLink = memo(({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-foreground/80 hover:text-foreground transition-colors text-base sm:text-sm xl:text-base py-3 px-3 sm:px-2 rounded-md hover:bg-muted active:bg-muted/80 lg:hover:bg-transparent lg:py-1"
  >
    {children}
  </Link>
))

NavLink.displayName = 'NavLink'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const openForm = useCallback(() => {
    setIsFormOpen(true)
    closeMobileMenu()
  }, [closeMobileMenu])

  const navItems = [
    { href: "#offres", label: "Nos Offres" },
    { href: "#fonctionnement", label: "Comment ça marche" },
    { href: "#avantages", label: "Avantages" },
    { href: "#temoignages", label: "Témoignages" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/95 lg:bg-transparent"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 w-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              aria-label="Aller à la page d'accueil"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-lg sm:text-xl">P</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-foreground">PrêtRapide</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigation principale">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
              <ContactForm
                trigger={
                  <button 
                    className="text-foreground/80 hover:text-foreground transition-colors text-sm xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
                    aria-label="Ouvrir le formulaire de contact"
                  >
                    Contact
                  </button>
                }
              />
            </nav>

            <div className="hidden lg:flex items-center">
              <Button
                onClick={openForm}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 xl:h-11 px-4 xl:px-6 text-sm xl:text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                aria-label="Faire une demande de prêt"
              >
                Faire une demande
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-foreground p-2 rounded-md hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto bg-background/95 backdrop-blur-md">
              <nav className="flex flex-col gap-2 px-4" aria-label="Navigation mobile">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                  </NavLink>
                ))}
                <ContactForm
                  trigger={
                    <button 
                      className="w-full text-left text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-muted active:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      onClick={closeMobileMenu}
                      aria-label="Ouvrir le formulaire de contact"
                    >
                      Contact
                    </button>
                  }
                />
                <div className="pt-4 mt-2 border-t border-border">
                  <Button
                    className="w-full bg-primary text-primary-foreground h-12 text-base"
                    onClick={openForm}
                  >
                    Faire une demande
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Loan Application Form Modal */}
      <LoanApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}

// Ajout de l'affichage du nom du composant pour le débogage
Header.displayName = 'Header'
