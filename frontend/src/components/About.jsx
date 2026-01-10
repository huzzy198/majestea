import React from 'react';
import { Heart, Users, Sparkles, Coffee } from 'lucide-react';
import { aboutImage } from '../data/mock';
import { PeonyFlower, LeafBranch, FloralDivider, GoldAccent, RoseOutline } from './FloralDecorations';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Fait avec amour",
      description: "Chaque plat est préparé avec passion par notre équipe"
    },
    {
      icon: Users,
      title: "Équipe féminine",
      description: "Un restaurant tenu par des femmes passionnées"
    },
    {
      icon: Coffee,
      title: "Ambiance cosy",
      description: "Un cadre chaleureux pour vos moments de détente"
    },
    {
      icon: Sparkles,
      title: "Produits frais",
      description: "Des ingrédients de qualité sélectionnés avec soin"
    }
  ];

  return (
    <section id="apropos" className="py-24 bg-white relative overflow-hidden watercolor-texture">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50" />
      
      {/* Floral decorations */}
      <div className="absolute top-10 right-10 opacity-40 animate-sway">
        <PeonyFlower size="lg" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-30 animate-float-slow">
        <PeonyFlower size="md" />
      </div>
      <div className="absolute top-1/2 right-20 opacity-25 hidden xl:block">
        <RoseOutline className="w-20 h-20" />
      </div>
      
      {/* Leaf decorations */}
      <div className="absolute top-40 left-0 opacity-20">
        <LeafBranch className="w-40 h-20" />
      </div>
      <div className="absolute bottom-40 right-0 opacity-20">
        <LeafBranch className="w-36 h-18" flip={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Floral frame */}
            <div className="absolute -top-6 -left-6 z-20">
              <PeonyFlower size="lg" className="opacity-60" />
            </div>
            <div className="absolute -bottom-8 -right-8 z-20">
              <PeonyFlower size="md" className="opacity-50" />
            </div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-feminine">
              <img
                src={aboutImage}
                alt="Terrasse de Majestea"
                className="w-full h-[500px] object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/10 via-transparent to-amber-500/10" />
            </div>
            
            {/* Experience badge with floral accent */}
            <div className="absolute -bottom-6 -right-6 bg-rose-700 text-white rounded-2xl p-6 shadow-xl">
              <div className="absolute -top-3 -left-3">
                <RoseOutline className="w-8 h-8 opacity-50" color="#FFF" />
              </div>
              <p className="text-4xl font-serif font-bold">5+</p>
              <p className="text-rose-100 text-sm">années d'expérience</p>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-rose-200 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-amber-200 rounded-br-3xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Label with floral divider */}
            <div className="inline-flex items-center gap-2">
              <div className="w-12 h-0.5 bg-rose-400" />
              <RoseOutline className="w-6 h-6 opacity-60" />
              <span className="text-rose-600 font-medium uppercase tracking-wider text-sm">À propos</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
              Un lieu où chaque détail <span className="text-rose-700">compte</span>
            </h2>
            
            <GoldAccent className="w-40 h-5" />

            {/* Description */}
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Bienvenue chez <strong className="text-rose-700">Majestea</strong>, votre destination brunch à Goussainville. 
                Notre restaurant est bien plus qu'un simple lieu de restauration – c'est un espace de vie 
                chaleureux où l'élégance rencontre la convivialité.
              </p>
              <p>
                Tenu par une équipe exclusivement féminine, Majestea incarne une vision unique de l'hospitalité : 
                un accueil attentionné, une décoration soignée aux tons doux et pastel, et une cuisine 
                généreuse préparée avec amour.
              </p>
              <p>
                Que vous veniez pour un brunch dominical entre amies, un déjeuner d'affaires ou un dîner 
                romantique sur notre terrasse ensoleillée, nous créons pour vous des moments inoubliables.
              </p>
            </div>

            {/* Features Grid with floral accents */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-gradient-to-br from-rose-50/80 to-amber-50/80 hover:shadow-feminine transition-shadow duration-300 relative overflow-hidden"
                >
                  {/* Subtle floral background */}
                  <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <PeonyFlower size="sm" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <h3 className="font-semibold text-stone-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-stone-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
