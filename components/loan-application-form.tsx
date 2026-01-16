"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle2 } from "lucide-react"

interface LoanApplicationFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const sendToWhatsApp = (data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  loanType: string
  amount: string
  duration: string
}) => {
  const phoneNumber = "33758692887" // Numéro WhatsApp sans le +

  // Formatage du message
  const message = `🎯 *NOUVELLE DEMANDE DE PRÊT*

👤 *Client:*
Nom: ${data.lastName}
Prénom: ${data.firstName}

📧 *Contact:*
Email: ${data.email}
Téléphone: ${data.phone}
Pays: ${data.country}

💰 *Détails du prêt:*
Type: ${data.loanType}
Montant: ${data.amount} €
Durée: ${data.duration} mois

📅 Date: ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}`

  // Encodage du message pour URL
  const encodedMessage = encodeURIComponent(message)

  // Ouverture de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}

export function LoanApplicationForm({ open, onOpenChange }: LoanApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    loanType: "",
    amount: "",
    duration: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi de formulaire (1 seconde)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    sendToWhatsApp(formData)

    setIsSubmitting(false)
    setIsSuccess(true)

    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSuccess(false)
      onOpenChange(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        loanType: "",
        amount: "",
        duration: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-fade-in">
              <CheckCircle2 className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{"Demande envoyée sur WhatsApp !"}</h3>
            <p className="text-muted-foreground">
              {"Votre demande a été ouverte dans WhatsApp. Un conseiller vous répondra rapidement."}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{"Faire une demande de prêt"}</DialogTitle>
          <DialogDescription>
            {"Remplissez ce formulaire et envoyez votre demande directement via WhatsApp."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                {"Prénom"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="Jean"
                required
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">
                {"Nom"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="Dupont"
                required
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                {"Email"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jean.dupont@email.com"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                {"Téléphone"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="06 12 34 56 78"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">
              {"Pays de résidence"} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="country"
              placeholder="France"
              required
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanType">
              {"Type de prêt"} <span className="text-destructive">*</span>
            </Label>
            <Select required value={formData.loanType} onValueChange={(value) => handleChange("loanType", value)}>
              <SelectTrigger id="loanType">
                <SelectValue placeholder="Sélectionnez le type de prêt" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personnel">{"Prêt Personnel"}</SelectItem>
                <SelectItem value="immobilier">{"Prêt Immobilier"}</SelectItem>
                <SelectItem value="auto">{"Crédit Auto"}</SelectItem>
                <SelectItem value="professionnel">{"Prêt Professionnel"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">
                {"Montant souhaité (€)"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="10000"
                min="1000"
                required
                value={formData.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">
                {"Durée (mois)"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="duration"
                type="number"
                placeholder="60"
                min="12"
                max="300"
                required
                value={formData.duration}
                onChange={(e) => handleChange("duration", e.target.value)}
              />
            </div>
          </div>

          <div className="bg-secondary/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {
                "En soumettant ce formulaire, vous acceptez d'être contacté par nos conseillers concernant votre demande de prêt."
              }
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => onOpenChange(false)}
            >
              {"Annuler"}
            </Button>
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={16} />
                  {"Envoi en cours..."}
                </>
              ) : (
                "Envoyer sur WhatsApp"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
