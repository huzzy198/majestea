import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Utensils, Salad, Cookie, Soup, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PeonyFlower, FloralDivider, GoldAccent, LeafBranch, RoseOutline } from './FloralDecorations';

const categoryIcons = {
  mains: Utensils,
  starters: Soup,
  salads: Salad,
  desserts: Cookie
};

const Menu = () => {
  const { menuCategories, loading } = useData();
  const [activeCategory, setActiveCategory] = useState('mains');

  if (loading) {
    return (
      <section id="menu" className="py-24 bg-gradient-to-b from-rose-50/50 via-white to-amber-50/30 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-rose-600" />
      </section>
    );
  }

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-rose-50/50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />
      
      {/* Floral decorations */}
      <div className="absolute top-10 right-20 opacity-40 animate-float-slow hidden lg:block">
        <PeonyFlower size="xl" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-30 animate-sway hidden lg:block">
        <PeonyFlower size="lg" />
      </div>
      <div className="absolute top-1/3 left-5 opacity-20 hidden xl:block">
        <RoseOutline className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-5 opacity-20 hidden xl:block">
        <RoseOutline className="w-14 h-14" />
      </div>
      
      {/* Leaf branches */}
      <div className="absolute top-60 right-0 opacity-15">
        <LeafBranch className="w-48 h-24" flip={true} />
      </div>
      <div className="absolute bottom-60 left-0 opacity-15">
        <LeafBranch className="w-44 h-22" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FloralDivider className="mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Un menu <span className="text-rose-700">gourmand</span>
          </h2>
          <div className="flex justify-center mb-4">
            <GoldAccent className="w-48 h-6" />
          </div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Découvrez notre sélection de plats préparés avec passion, des entrées raffinées aux desserts irrésistibles
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
            {menuCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Utensils;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-rose-700 data-[state=active]:text-white bg-white text-stone-600 px-6 py-3 rounded-full shadow-sm border border-rose-100 hover:bg-rose-50 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card
                    key={item.id}
                    className="group bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-feminine hover:border-rose-200 transition-all duration-300 overflow-hidden relative"
                  >
                    {/* Subtle floral decoration on hover */}
                    <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                      <PeonyFlower size="md" />
                    </div>
                    
                    <CardContent className="p-6 relative z-10">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg text-stone-800 group-hover:text-rose-700 transition-colors duration-300">
                              {item.name}
                            </h3>
                            {index === 0 && category.id === 'mains' && (
                              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
                                Populaire
                              </Badge>
                            )}
                          </div>
                          <p className="text-stone-500 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="font-serif text-2xl font-bold text-rose-700">
                            {item.price.toFixed(2)}€
                          </span>
                        </div>
                      </div>
                      {/* Decorative line with gradient */}
                      <div className="mt-4 h-0.5 bg-gradient-to-r from-rose-300 via-amber-200 to-transparent w-1/3 group-hover:w-2/3 transition-all duration-500" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Brunch Note with floral accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-feminine border border-rose-100 relative overflow-hidden">
            {/* Decorative flowers */}
            <div className="absolute -left-4 -top-4 opacity-20">
              <PeonyFlower size="sm" />
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <PeonyFlower size="sm" />
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center relative z-10">
              <Cookie className="w-6 h-6 text-rose-600" />
            </div>
            <div className="text-left relative z-10">
              <p className="font-semibold text-stone-800">Formule Brunch</p>
              <p className="text-sm text-stone-500">Variété sucrée/salée disponible le week-end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
