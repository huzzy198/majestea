import React from 'react';
import { Button } from './ui/button';
import { Star, MapPin, Clock, Sparkles } from 'lucide-react';
import { restaurantInfo, heroImage } from '../data/mock';
import { FloralCorner, PeonyFlower, LeafBranch, GoldAccent, WatercolorBlob } from './FloralDecorations';

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
      
      {/* Watercolor blobs */}
      <WatercolorBlob className="absolute top-0 right-0 w-[500px] h-[500px] opacity-40" color="rose" />
      <WatercolorBlob className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-30" color="amber" />
      <WatercolorBlob className="absolute top-1/3 left-1/4 w-[300px] h-[300px] opacity-20" color="sage" />
      
      {/* Floral corners */}
      <FloralCorner className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 opacity-60" position="top-left" />
      <FloralCorner className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-50" position="top-right" />
      <FloralCorner className="absolute bottom-20 left-0 w-32 h-32 opacity-40 hidden md:block" position="bottom-left" />
      
      {/* Floating peony flowers */}
      <div className="absolute top-32 right-20 animate-float-slow hidden lg:block">
        <PeonyFlower size="lg" className="opacity-50" />
      </div>
      <div className="absolute bottom-40 left-10 animate-float-medium hidden lg:block">
        <PeonyFlower size="md" className="opacity-40" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-sway hidden xl:block">
        <PeonyFlower size="sm" className="opacity-30" />
      </div>
      
      {/* Leaf branches */}
      <div className="absolute top-40 left-20 opacity-30 animate-sway hidden lg:block">
        <LeafBranch className="w-32 h-16" />
      </div>
      <div className="absolute bottom-60 right-10 opacity-25 animate-sway hidden lg:block">
        <LeafBranch className="w-28 h-14" flip={true} />
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

            {/* Title with floral accent */}
            <div className="space-y-4 relative">
              <div className="absolute -top-8 -left-4 opacity-40">
                <PeonyFlower size="sm" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight">
                {restaurantInfo.name}
              </h1>
              <GoldAccent className="w-48 h-6" />
              <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl">
                {restaurantInfo.slogan}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-50">
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
              <div className="flex items-center gap-2 bg-rose-50/80 px-4 py-2 rounded-full border border-rose-100">
                <Clock className="w-4 h-4 text-rose-600" />
                <span className="text-sm text-stone-700">Ouvert jusqu'à 23h</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50/80 px-4 py-2 rounded-full border border-amber-100">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-stone-700">Terrasse disponible</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-rose-700 hover:bg-rose-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-full relative overflow-hidden group"
              >
                <span className="relative z-10">Réserver une table</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                onClick={() => scrollToSection('#menu')}
                variant="outline"
                size="lg"
                className="border-2 border-stone-300 text-stone-700 hover:bg-rose-50 hover:border-rose-300 px-8 py-6 text-lg rounded-full transition-colors duration-300"
              >
                Voir le menu
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Decorative floral frame */}
            <div className="absolute -top-8 -left-8 z-20">
              <PeonyFlower size="lg" className="opacity-60 animate-bloom" />
            </div>
            <div className="absolute -bottom-4 -right-4 z-20">
              <PeonyFlower size="md" className="opacity-50 animate-bloom" />
            </div>
            
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-rose-200/50">
                <img
                  src={heroImage}
                  alt="Brunch délicieux chez Majestea"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
                
                {/* Gold shimmer overlay */}
                <div className="absolute inset-0 gold-shimmer opacity-30" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-rose-100 shadow-feminine">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center">
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
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-rose-200/40 to-rose-100/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-amber-200/40 to-amber-100/30 rounded-3xl -z-20" />
          </div>
        </div>
      </div>

      {/* Scroll indicator with floral accent */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-rose-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
