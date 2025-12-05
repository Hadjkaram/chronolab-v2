"use client";

import { Mail, MapPin, Phone, Send, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulation d'envoi
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Header Hero */}
      <div className="bg-brand-900 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-brand-100 max-w-2xl mx-auto px-4">
          Une question sur nos services ? Besoin d'assistance technique ou d'un partenariat ?
          Notre équipe est à votre écoute.
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- GAUCHE : INFOS & MAP --- */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Cartes Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Notre Siège</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    23 Rue Colonel Mohamed Chaabani,<br/> Alger, Algérie
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-500 text-sm mt-1">contact@chronolab.dz</p>
                  <p className="text-gray-500 text-sm">support@chronolab.dz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Téléphone</h3>
                  <p className="text-gray-500 text-sm mt-1">+213 12 34 56 78</p>
                  <p className="text-xs text-gray-400 mt-1">Lun-Ven, 9h-18h</p>
                </div>
              </div>
            </div>

            {/* Carte Visuelle (Simulation) */}
            <div className="bg-gray-200 rounded-2xl h-64 w-full relative overflow-hidden border border-gray-300 shadow-inner group">
                {/* Image de fond carte (Placeholder) */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Algiers_Map.png')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <div className="relative bg-brand-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
                            <MapPin size={24} fill="currentColor" />
                        </div>
                    </div>
                    {/* Bulle */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap">
                        Chronolab HQ
                    </div>
                </div>
            </div>

          </div>

          {/* --- DROITE : FORMULAIRE --- */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            
            {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Envoyé !</h2>
                    <p className="text-gray-500 max-w-md">
                        Merci de nous avoir contactés. Notre équipe reviendra vers vous sous 24h ouvrées.
                    </p>
                    <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 px-6 py-2 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50"
                    >
                        Envoyer un autre message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Nom complet</label>
                            <input required type="text" placeholder="Ibrahim Karamoko" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Email</label>
                            <input required type="email" placeholder="exemple@email.com" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Sujet</label>
                        <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all">
                            <option>Demande d'information</option>
                            <option>Support Technique</option>
                            <option>Partenariat / Investissement</option>
                            <option>Autre</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Message</label>
                        <textarea required placeholder="Comment pouvons-nous vous aider ?" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all h-40 resize-none"></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {formStatus === 'sending' ? (
                            <>Envoi en cours...</>
                        ) : (
                            <>Envoyer le message <Send size={18} /></>
                        )}
                    </button>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-400 justify-center mt-4">
                        <Clock size={14} />
                        Réponse moyenne : moins de 24h
                    </div>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}