"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Prêt Personnel",
    avatar: "/professional-woman-smiling.png",
    rating: 5,
    comment:
      "Un service exceptionnel ! J'ai obtenu mon prêt personnel en 48h pour financer mes travaux. L'équipe est très professionnelle et réactive.",
    initials: "SM",
  },
  {
    name: "Marc Dubois",
    role: "Prêt Immobilier",
    avatar: "/professional-man-smiling.png",
    rating: 5,
    comment:
      "Grâce à PrêtRapide, nous avons pu acheter notre première maison. Le processus était simple et les conseillers nous ont accompagnés à chaque étape.",
    initials: "MD",
  },
  {
    name: "Julie Leroux",
    role: "Crédit Auto",
    avatar: "/young-woman-happy.jpg",
    rating: 5,
    comment:
      "Excellent taux pour mon crédit auto ! La simulation en ligne est claire et je n'ai eu aucune surprise. Je recommande vivement.",
    initials: "JL",
  },
  {
    name: "Thomas Bernard",
    role: "Prêt Professionnel",
    avatar: "/businessman-confident.jpg",
    rating: 5,
    comment:
      "En tant qu'entrepreneur, j'avais besoin d'un financement rapide. PrêtRapide a su répondre à mes attentes avec une offre compétitive.",
    initials: "TB",
  },
  {
    name: "Émilie Rousseau",
    role: "Prêt Personnel",
    avatar: "/professional-woman.png",
    rating: 5,
    comment:
      "Service client au top ! Ils ont pris le temps de m'expliquer toutes les options. J'ai trouvé le prêt parfait pour mon projet.",
    initials: "ER",
  },
  {
    name: "Alexandre Petit",
    role: "Prêt Immobilier",
    avatar: "/man-professional-smiling.jpg",
    rating: 5,
    comment:
      "Processus 100% en ligne très efficace. J'ai pu comparer plusieurs offres facilement et j'ai économisé sur les frais de dossier.",
    initials: "AP",
  },
]

export function Testimonials() {
  return (
    <section
      id="temoignages"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            {"Ils nous font "}
            <span className="text-primary">{"confiance"}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            {"Plus de 50 000 clients satisfaits nous ont déjà fait confiance"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                {/* Quote icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-primary/10">
                  <Quote size={40} fill="currentColor" className="sm:w-12 sm:h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400 sm:w-4 sm:h-4" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                  {testimonial.comment}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-border">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
