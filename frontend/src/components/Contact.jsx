import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Clock, Send, Calendar, Users, Instagram, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { createReservation } from '../services/api';
import { toast } from 'sonner';
import { PeonyFlower, FloralDivider, GoldAccent } from './FloralDecorations';

const Contact = () => {
  const { restaurantInfo } = useData();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await createReservation(formData);
      
      if (response.success) {
        toast.success('Demande envoyée !', {
          description: response.message || 'Nous vous contacterons rapidement pour confirmer votre réservation.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Reservation error:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: 'Veuillez réessayer ou nous appeler directement.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '8+'];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-rose-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      
      {/* Floral decorations */}
      <div className="absolute top-20 left-10 opacity-30 hidden lg:block">
        <PeonyFlower size="xl" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-25 hidden lg:block">
        <PeonyFlower size="lg" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FloralDivider className="mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Réservez votre <span className="text-rose-700">table</span>
          </h2>
          <div className="flex justify-center mb-4">
            <GoldAccent className="w-40 h-5" />
          </div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Contactez-nous pour réserver votre moment de gourmandise chez Majestea
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              <Card className="bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Adresse</h3>
                    <p className="text-stone-600">{restaurantInfo.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-700 text-sm font-medium mt-2 inline-block"
                    >
                      Voir sur la carte →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Téléphone</h3>
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-stone-600 hover:text-rose-600 transition-colors duration-300"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Horaires</h3>
                    <div className="text-stone-600 text-sm space-y-1">
                      <p>Lundi - Samedi : 09h00 - 23h00</p>
                      <p>Dimanche : 09h00 - 22h00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-700 transition-colors duration-300"
                    >
                      {restaurantInfo.instagram}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-rose-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.9!2d2.4655!3d49.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDAxJzAwLjEiTiAywrAyNyczOS44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Majestea"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Reservation Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-rose-100 shadow-xl relative overflow-hidden">
            {/* Decorative flower */}
            <div className="absolute -top-8 -right-8 opacity-10">
              <PeonyFlower size="xl" />
            </div>
            
            <CardContent className="p-8 relative z-10">
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-6">
                Demande de réservation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-700">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-stone-700">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      required
                      className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-stone-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-stone-700">Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="pl-10 border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-stone-700">Heure *</Label>
                    <Select value={formData.time} onValueChange={(v) => handleSelectChange('time', v)}>
                      <SelectTrigger className="border-rose-200 focus:border-rose-400 focus:ring-rose-400">
                        <SelectValue placeholder="Heure" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-stone-700">Personnes *</Label>
                    <Select value={formData.guests} onValueChange={(v) => handleSelectChange('guests', v)}>
                      <SelectTrigger className="border-rose-200 focus:border-rose-400 focus:ring-rose-400">
                        <Users className="w-4 h-4 mr-2 text-stone-400" />
                        <SelectValue placeholder="Nb" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map(num => (
                          <SelectItem key={num} value={num}>{num} {num === '1' ? 'personne' : 'personnes'}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-stone-700">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Demandes spéciales, allergies, occasion..."
                    rows={4}
                    className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rose-700 hover:bg-rose-800 text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Envoyer ma demande
                    </span>
                  )}
                </Button>

                <p className="text-sm text-stone-500 text-center">
                  Ou appelez directement au{' '}
                  <a href={`tel:${restaurantInfo.phone}`} className="text-rose-600 font-medium hover:underline">
                    {restaurantInfo.phone}
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
