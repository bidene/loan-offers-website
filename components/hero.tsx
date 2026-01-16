"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { LoanApplicationForm } from "./loan-application-form"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToOffers = () => {
    const offersSection = document.getElementById('offres')
    if (offersSection) {
      window.scrollTo({
        top: offersSection.offsetTop - 80, // 80px d'espace au-dessus de la section
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background pt-16 sm:pt-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 sm:space-y-8 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                <TrendingUp size={14} className="sm:w-4 sm:h-4" />
                <span>{"Taux à partir de 2.9% TAEG"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                {"Réalisez tous vos projets avec "}
                <span className="text-primary">{"PrêtRapide"}</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                {
                  "Obtenez votre prêt en 48h chrono. Simple, rapide et 100% en ligne. Des solutions de financement adaptées à chaque besoin."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
                  onClick={() => setIsFormOpen(true)}
                >
                  {"Simuler mon prêt"}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button
                  variant="outline"
                  className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-transparent w-full sm:w-auto"
                  onClick={scrollToOffers}
                >
                  {"Découvrir nos offres"}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">{"100% Sécurisé"}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{"Données cryptées"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">{"Réponse en 2min"}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{"Sans engagement"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`relative ${isLoaded ? "animate-fade-in" : "opacity-0"} transition-all duration-700 delay-300 mt-8 lg:mt-0`}
            >
              <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
                <img
                  src="/happy-family-in-modern-home-with-financial-documen.jpg"
                  alt="Famille heureuse"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border animate-slide-in-right">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-card-foreground">{"50,000+"}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{"Prêts accordés"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoanApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}
