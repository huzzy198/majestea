import React from 'react';
import { MapPin, Phone, Clock, Instagram, Heart } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Majestea</h3>
            <p className="text-stone-400 leading-relaxed mb-6">
              {restaurantInfo.slogan}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 hover:bg-rose-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '#accueil', label: 'Accueil' },
                { href: '#apropos', label: 'À propos' },
                { href: '#menu', label: 'Notre carte' },
                { href: '#galerie', label: 'Galerie' },
                { href: '#avis', label: 'Avis clients' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-stone-400 hover:text-rose-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400 text-sm">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-stone-400 hover:text-rose-400 transition-colors duration-300"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-rose-400 transition-colors duration-300"
                >
                  {restaurantInfo.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Horaires</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-stone-400 text-sm">
                  <p className="mb-1"><strong className="text-stone-300">Lun - Sam:</strong> 09h - 23h</p>
                  <p><strong className="text-stone-300">Dimanche:</strong> 09h - 22h</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-stone-800/50 rounded-xl border border-stone-700">
              <p className="text-amber-400 font-medium text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Terrasse ouverte
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © {currentYear} Majestea. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-stone-500 hover:text-rose-400 transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-stone-500 hover:text-rose-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
            </div>
            <p className="text-stone-500 text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> à Goussainville
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
