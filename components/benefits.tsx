"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Calculator, HeadphonesIcon, Award, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Réponse en 2 minutes",
    description: "Obtenez une réponse de principe immédiate après votre simulation",
  },
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Vos données sont cryptées et protégées selon les normes bancaires",
  },
  {
    icon: Calculator,
    title: "Sans engagement",
    description: "Simulez gratuitement sans impact sur votre score de crédit",
  },
  {
    icon: HeadphonesIcon,
    title: "Support dédié",
    description: "Une équipe d'experts à votre écoute 7j/7 pour vous accompagner",
  },
  {
    icon: Award,
    title: "Meilleurs taux",
    description: "Nous négocions pour vous les taux les plus avantageux du marché",
  },
  {
    icon: CheckCircle,
    title: "Flexibilité",
    description: "Modulation des mensualités, report d'échéance et remboursement anticipé avec frais",
  },
]

export function Benefits() {
  return (
    <section id="avantages" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {"Pourquoi choisir "}
            <span className="text-primary">{"PrêtRapide ?"}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            {"Des avantages uniques pour faciliter votre projet"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 text-card-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
