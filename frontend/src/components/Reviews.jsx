import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PeonyFlower, FloralDivider, GoldAccent, LeafBranch, RoseOutline } from './FloralDecorations';

const Reviews = () => {
  const { reviews, restaurantInfo, loading } = useData();

  if (loading) {
    return (
      <section id="avis" className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-rose-600" />
      </section>
    );
  }

  return (
    <section id="avis" className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
      
      {/* Floral decorations */}
      <div className="absolute top-20 left-10 opacity-35 animate-sway hidden lg:block">
        <PeonyFlower size="xl" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-30 animate-float-slow hidden lg:block">
        <PeonyFlower size="lg" />
      </div>
      <div className="absolute top-1/2 right-10 opacity-25 hidden xl:block">
        <RoseOutline className="w-16 h-16" />
      </div>
      
      {/* Leaf decorations */}
      <div className="absolute top-32 right-0 opacity-15">
        <LeafBranch className="w-40 h-20" flip={true} />
      </div>
      <div className="absolute bottom-32 left-0 opacity-15">
        <LeafBranch className="w-36 h-18" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FloralDivider className="mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Ce que disent nos <span className="text-rose-700">clientes</span>
          </h2>
          <div className="flex justify-center mb-6">
            <GoldAccent className="w-40 h-5" />
          </div>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="bg-white px-6 py-4 rounded-2xl shadow-feminine border border-rose-100 relative overflow-hidden">
              {/* Subtle floral accent */}
              <div className="absolute -right-4 -top-4 opacity-15">
                <PeonyFlower size="sm" />
              </div>
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(restaurantInfo.googleRating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-3xl font-serif font-bold text-stone-800">{restaurantInfo.googleRating}</span>
                <span className="text-stone-500">/ 5</span>
              </div>
              <p className="text-sm text-stone-500 mt-1">
                Basé sur {restaurantInfo.totalReviews} avis Google
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={`bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-feminine transition-shadow duration-300 relative overflow-hidden group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Decorative floral accent */}
              <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                <PeonyFlower size="md" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                {/* Quote icon with floral styling */}
                <div className="relative inline-block mb-4">
                  <Quote className="w-8 h-8 text-rose-200" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-200 rounded-full opacity-60" />
                </div>
                
                {/* Review text */}
                <p className="text-stone-600 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-rose-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">{review.name}</p>
                    <p className="text-sm text-stone-500">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 font-medium transition-colors duration-300 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            <span className="group-hover:underline">Voir tous les avis sur Google</span>
            <RoseOutline className="w-4 h-4 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
