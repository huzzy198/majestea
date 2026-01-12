import React, { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { ZoomIn, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';

const Gallery = () => {
  const { galleryImages, loading } = useData();
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'brunch', label: 'Brunch' },
    { id: 'plats', label: 'Plats' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'terrasse', label: 'Terrasse' },
    { id: 'ambiance', label: 'Ambiance' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  if (loading) {
    return (
      <section id="galerie" className="py-24 bg-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-rose-600" />
      </section>
    );
  }

  return (
    <section id="galerie" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-50/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-rose-400" />
            <span className="text-rose-600 font-medium uppercase tracking-wider text-sm">Galerie</span>
            <div className="w-12 h-0.5 bg-rose-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Découvrez notre <span className="text-rose-700">univers</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Plongez dans l'atmosphère chaleureuse de Majestea à travers nos photos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === cat.id
                  ? 'bg-rose-700 text-white'
                  : 'bg-rose-50 text-stone-600 hover:bg-rose-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <AspectRatio ratio={index === 0 ? 16 / 12 : 4 / 3}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5 text-rose-700" />
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-stone-700 capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-stone-600 mb-4">Suivez-nous pour plus de délices</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @majestea_restaurant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
