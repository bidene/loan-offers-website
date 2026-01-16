"use client"

import { ClipboardList, Search, FileCheck, Banknote } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Remplissez le formulaire",
    description: "En 2 minutes, indiquez le montant souhaité et la durée de remboursement",
    number: "01",
  },
  {
    icon: Search,
    title: "Recevez les offres",
    description: "Nous comparons les meilleures offres de nos partenaires bancaires",
    number: "02",
  },
  {
    icon: FileCheck,
    title: "Choisissez votre prêt",
    description: "Sélectionnez l'offre qui correspond le mieux à vos besoins",
    number: "03",
  },
  {
    icon: Banknote,
    title: "Recevez vos fonds",
    description: "Signez en ligne et recevez les fonds sous 48h sur votre compte",
    number: "04",
  },
]

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {"Comment "}
            <span className="text-primary">{"ça marche ?"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Un processus simple et rapide en 4 étapes"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
