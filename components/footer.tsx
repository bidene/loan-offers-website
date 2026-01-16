import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card to-card/95 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-2xl">{"P"}</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{"PrêtRapide"}</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-xs">
              {"Votre partenaire de confiance pour tous vos projets de financement. Simple, rapide et 100% en ligne."}
            </p>
            <div className="flex gap-3 sm:gap-4 pt-2">
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-3 sm:mb-5 text-lg sm:text-xl relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary/50">{"Nos Offres"}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Prêt Personnel"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Prêt Immobilier"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Crédit Auto"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Prêt Professionnel"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-3 sm:mb-5 text-lg sm:text-xl relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary/50">{"Ressources"}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Comment ça marche"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Guide du crédit"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"FAQ"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-muted-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center before:content-['→'] before:opacity-0 hover:before:opacity-100 before:mr-1 before:text-primary before:transition-opacity before:duration-300"
                >
                  {"Blog"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-3 sm:mb-5 text-lg sm:text-xl relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary/50">{"Contact"}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground/90 hover:text-card-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                </div>
                <span>{"+33 7 58 69 28 87"}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground/90 hover:text-card-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle size={16} className="text-primary flex-shrink-0" />
                </div>
                <a href="https://wa.me/33758692887" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {"WhatsApp : +33 7 58 69 28 87"}
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground break-all">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                </div>
                <span>{"servicioofrecidodeprestamo@gmail.com"}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                </div>
                <span>{"29 Boulevard Haussmann, 75009 Paris"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground/80 text-center md:text-left">
              {"© 2026 PrêtRapide. Tous droits réservés."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="#" className="text-muted-foreground/80 hover:text-primary hover:underline transition-colors px-2 py-1 rounded-md hover:bg-muted/30">
                {"Mentions légales"}
              </Link>
              <Link href="#" className="text-muted-foreground/80 hover:text-primary hover:underline transition-colors px-2 py-1 rounded-md hover:bg-muted/30">
                {"Politique de confidentialité"}
              </Link>
              <Link href="#" className="text-muted-foreground/80 hover:text-primary hover:underline transition-colors px-2 py-1 rounded-md hover:bg-muted/30">
                {"CGU"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
