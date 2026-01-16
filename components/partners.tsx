"use client"

import { useEffect, useState } from "react"

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const partners = [
    { name: "BNP Paribas", color: "#004b8d" },
    { name: "Crédit Agricole", color: "#c00" },
    { name: "LCL", color: "#cc0033" },
    { name: "Boursorama", color: "#0033a0" },
    { name: "La Banque Postale", color: "#004b9c" },
    { name: "Hello bank", color: "#00b0f0" }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-lg">{"Nos partenaires bancaires de confiance"}</p>
        </div>
        <div
          className={`flex flex-wrap justify-center items-center gap-12 ${isVisible ? "animate-fade-in" : "opacity-0"} transition-all delay-200`}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-2xl font-semibold transition-colors cursor-pointer"
              style={{ color: partner.color }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
