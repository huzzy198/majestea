import React from 'react';
import { Button } from './ui/button';
import { Star, MapPin, Clock, Sparkles } from 'lucide-react';
import { restaurantInfo, heroImage } from '../data/mock';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
      
      {/* Watercolor-style decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-rose-200/20 rounded-full blur-2xl" />
      
      {/* Floral decorative elements */}
      <div className="absolute top-32 left-8 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-rose-400">
          <circle cx="50" cy="30" r="15" fill="currentColor" />
          <circle cx="30" cy="50" r="15" fill="currentColor" />
          <circle cx="70" cy="50" r="15" fill="currentColor" />
          <circle cx="40" cy="70" r="15" fill="currentColor" />
          <circle cx="60" cy="70" r="15" fill="currentColor" />
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-stone-600">Brunch & Café Cosy</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight">
                {restaurantInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl">
                {restaurantInfo.slogan}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(restaurantInfo.googleRating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-stone-800">{restaurantInfo.googleRating}</span>
                <span className="text-stone-500">({restaurantInfo.totalReviews} avis)</span>
              </div>
            </div>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-rose-600" />
                <span className="text-sm text-stone-700">Ouvert jusqu'à 23h</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-stone-700">Terrasse disponible</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-rose-700 hover:bg-rose-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-full"
              >
                Réserver une table
              </Button>
              <Button
                onClick={() => scrollToSection('#menu')}
                variant="outline"
                size="lg"
                className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-6 text-lg rounded-full"
              >
                Voir le menu
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="Brunch délicieux chez Majestea"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-rose-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-rose-600 fill-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Expérience unique</p>
                    <p className="text-sm text-stone-500">Cadre féminin & cosy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements behind image */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-rose-200/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-amber-200/30 rounded-3xl -z-20" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-stone-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
