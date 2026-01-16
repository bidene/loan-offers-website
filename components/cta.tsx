"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { LoanApplicationForm } from "./loan-application-form"
import { ContactForm } from "./contact-form"

export function CTA() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance px-4">
              {"Prêt à concrétiser votre projet ?"}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty px-4">
              {
                "Faites votre simulation en 2 minutes et découvrez les meilleures offres de prêt adaptées à votre situation"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-xl w-full sm:w-auto"
                onClick={() => setIsFormOpen(true)}
              >
                {"Simuler mon prêt gratuitement"}
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <ContactForm
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
                  >
                    {"Contactez-nous"}
                  </Button>
                }
              />
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-primary-foreground/80 text-xs sm:text-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>{"Sans engagement"}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>{"Réponse immédiate"}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>{"100% gratuit"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoanApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}
