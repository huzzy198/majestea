import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, MapPin, Clock, X } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#menu', label: 'Menu' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => { e.preventDefault(); scrollToSection('#accueil'); }}
            className="flex items-center gap-2 group"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold text-rose-800 tracking-wide group-hover:text-rose-600 transition-colors duration-300">
              Majestea
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-stone-700 hover:text-rose-700 font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${restaurantInfo.phone}`}>
              <Button variant="ghost" size="sm" className="text-stone-600 hover:text-rose-700 hover:bg-rose-50">
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-rose-700 hover:bg-rose-800 text-white px-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-stone-700">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cream-50 border-l border-rose-100">
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-2xl font-bold text-rose-800">Majestea</span>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-lg text-stone-700 hover:text-rose-700 font-medium py-2 border-b border-rose-100 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pb-8 space-y-4">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Phone className="w-5 h-5 text-rose-600" />
                    <span>{restaurantInfo.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-600">
                    <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{restaurantInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <Clock className="w-5 h-5 text-rose-600" />
                    <span>Ouvert jusqu'à 23h</span>
                  </div>
                  
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-rose-700 hover:bg-rose-800 text-white mt-4"
                  >
                    Réserver une table
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
