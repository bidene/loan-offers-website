"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactFormProps {
  trigger: React.ReactNode;
}

const sendContactToWhatsApp = (data: {
  name: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}) => {
  const phoneNumber = "33758692887"; // Numéro WhatsApp sans le +

  const whatsappMessage = `📬 *NOUVEAU MESSAGE DE CONTACT*

👤 *De:* ${data.name}
📧 *Email:* ${data.email}
📱 *Téléphone:* ${data.phone || "Non renseigné"}
🌍 *Pays:* ${data.country || "Non renseigné"}

📋 *Sujet:* ${data.subject}

💬 *Message:*
${data.message}

📅 ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export function ContactForm({ trigger }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));

    sendContactToWhatsApp(formData);

    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contactez-nous</DialogTitle>
          <DialogDescription>
            Une question ? Besoin d'aide ? Envoyez-nous un message sur WhatsApp.
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">Nos coordonnées</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+33 7 58 69 28 87</p>
                    <p className="text-xs text-muted-foreground mt-1">Disponible 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px] md:max-w-[200px]">
                      servicioofrecidodeprestamo@gmail.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm text-muted-foreground">
                      29 Boulevard Haussmann
                      <br />
                      75009 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Notre équipe d'experts est disponible pour répondre à toutes
                  vos questions sur nos offres de prêt.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Nom complet *</Label>
                <Input
                  id="contact-name"
                  placeholder="Jean Dupont"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="jean.dupont@email.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone">Téléphone</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-country">Pays</Label>
                <Input
                  id="contact-country"
                  placeholder="France"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Sujet *</Label>
                <Input
                  id="contact-subject"
                  placeholder="Question sur un prêt personnel"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Décrivez votre demande..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer sur WhatsApp
                  </>
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">
              Message envoyé sur WhatsApp !
            </h3>
            <p className="text-muted-foreground">
              Votre message a été ouvert dans WhatsApp. Nous vous répondrons
              rapidement.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
