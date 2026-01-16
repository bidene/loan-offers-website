"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Car, Briefcase, User, ArrowRight } from "lucide-react"
import { useState } from "react"
import { LoanApplicationForm } from "./loan-application-form"

const loanTypes = [
  {
    icon: User,
    title: "Prêt Personnel",
    description: "Pour tous vos projets personnels : travaux, mariage, vacances...",
    amount: "De 1 000€ à 75 000€",
    rate: "À partir de 2% TAEG",
    features: ["Réponse immédiate", "Sans justificatif d'utilisation", "Remboursement flexible"],
    color: "text-blue-600",
  },
  {
    icon: Home,
    title: "Prêt Immobilier",
    description: "Financez votre résidence principale, secondaire ou investissement locatif",
    amount: "De 50 000€ à 1 000 000€",
    rate: "À partir de 3% TAEG",
    features: ["Jusqu'à 25 ans", "Frais de dossier offerts", "Assurance emprunteur incluse"],
    color: "text-green-600",
  },
  {
    icon: Car,
    title: "Crédit Auto",
    description: "Achetez votre véhicule neuf ou d'occasion en toute sérénité",
    amount: "De 3 000€ à 75 000€",
    rate: "À partir de 3% TAEG",
    features: ["Financement jusqu'à 100%", "Report de 1ère échéance", "Remboursement anticipé"],
    color: "text-orange-600",
  },
  {
    icon: Briefcase,
    title: "Prêt Professionnel",
    description: "Développez votre activité avec des solutions sur-mesure",
    amount: "De 10 000€ à 500 000€",
    rate: "À partir de 3% TAEG",
    features: ["Accompagnement personnalisé", "Différé de remboursement", "Taux préférentiel"],
    color: "text-purple-600",
  },
]

export function LoanTypes() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <section id="offres" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              {"Des solutions adaptées à "}
              <span className="text-primary">{"chaque projet"}</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              {"Quel que soit votre besoin, nous avons la solution de financement idéale pour vous"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {loanTypes.map((loan, index) => {
              const Icon = loan.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-5 sm:p-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <Icon className={loan.color} size={24} />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{loan.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {loan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5 sm:space-y-6 p-5 sm:p-6 pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{"Montant"}</span>
                        <span className="font-semibold text-foreground text-sm sm:text-base">{loan.amount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{"Taux"}</span>
                        <span className="font-semibold text-accent text-sm sm:text-base">{loan.rate}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group h-10 sm:h-11"
                      onClick={() => setIsFormOpen(true)}
                    >
                      {"En savoir plus"}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <LoanApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}
