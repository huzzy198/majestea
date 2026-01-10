import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Utensils, Salad, Cookie, Soup } from 'lucide-react';
import { menuCategories } from '../data/mock';

const categoryIcons = {
  mains: Utensils,
  starters: Soup,
  salads: Salad,
  desserts: Cookie
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('mains');

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-rose-50/50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />
      
      {/* Floral decoration */}
      <div className="absolute top-10 right-20 opacity-10">
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-rose-400">
          <circle cx="50" cy="20" r="12" fill="currentColor" />
          <circle cx="25" cy="40" r="12" fill="currentColor" />
          <circle cx="75" cy="40" r="12" fill="currentColor" />
          <circle cx="35" cy="70" r="12" fill="currentColor" />
          <circle cx="65" cy="70" r="12" fill="currentColor" />
          <circle cx="50" cy="45" r="8" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-rose-400" />
            <span className="text-rose-600 font-medium uppercase tracking-wider text-sm">Notre carte</span>
            <div className="w-12 h-0.5 bg-rose-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Un menu <span className="text-rose-700">gourmand</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Découvrez notre sélection de plats préparés avec passion, des entrées raffinées aux desserts irrésistibles
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
            {menuCategories.map((category) => {
              const Icon = categoryIcons[category.id];
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
                    className="group bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-lg hover:border-rose-200 transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg text-stone-800 group-hover:text-rose-700 transition-colors duration-300">
                              {item.name}
                            </h3>
                            {index === 0 && category.id === 'mains' && (
                              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
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
                      {/* Decorative line */}
                      <div className="mt-4 h-0.5 bg-gradient-to-r from-rose-200 via-amber-200 to-transparent w-1/3 group-hover:w-2/3 transition-all duration-500" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Brunch Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-sm border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-rose-600" />
            </div>
            <div className="text-left">
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
