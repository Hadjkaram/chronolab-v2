"use client";

import { useState } from 'react';
import { Search, Cpu, Heart, Smartphone, ArrowRight, Lightbulb, ExternalLink } from 'lucide-react';

// Données des startups (Basées sur ta vidéo)
const startups = [
  {
    id: 1,
    name: "AsthmaCare",
    tagline: "Télésurveillance IoT pour les patients asthmatiques.",
    category: "IoT / Capteurs",
    description: "Un système complet utilisant des capteurs connectés pour le suivi des données physiologiques et une application mobile pour l'analyse et l'alerte.",
    color: "bg-blue-500",
    icon: Cpu
  },
  {
    id: 2,
    name: "Dermee",
    tagline: "La plateforme tout-en-un de Dermatologie.",
    category: "IA / Diagnostic",
    description: "Diagnostic de peau par intelligence artificielle et mise en relation directe avec des dermatologues certifiés.",
    color: "bg-purple-500",
    icon: Smartphone
  },
  {
    id: 3,
    name: "Exhalin",
    tagline: "Détection précoce du cancer du poumon.",
    category: "Dispositif Médical",
    description: "Dispositif non invasif basé sur l'analyse de l'haleine pour une détection précoce, couplé à une plateforme de suivi.",
    color: "bg-teal-500",
    icon: Heart
  },
  {
    id: 4,
    name: "Nafsia Clinic",
    tagline: "Plateforme algérienne de soutien psychologique.",
    category: "Santé Mentale",
    description: "Séances privées par vidéo ou audio avec des spécialistes certifiés. Réservation facile via l'application mobile.",
    color: "bg-indigo-500",
    icon: Lightbulb
  },
  {
    id: 5,
    name: "Celiac Companion",
    tagline: "Gestion de la maladie coeliaque au quotidien.",
    category: "Nutrition",
    description: "Application mobile qui simplifie la vie sans gluten et centralise les ressources pour la communauté coeliaque.",
    color: "bg-orange-500",
    icon: Heart
  },
  {
    id: 6,
    name: "NeuroStabil",
    tagline: "Dispositif médical portable pour réduire les tremblements.",
    category: "Neuro-Tech",
    description: "Un dispositif portable (hardware) qui utilise des capteurs pour appliquer une contre-force dynamique et annuler les tremblements.",
    color: "bg-rose-500",
    icon: Cpu
  }
];

const categories = ["Tout", "IA / Diagnostic", "IoT / Capteurs", "Santé Mentale", "Nutrition"];

export default function StartupsPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredStartups = activeCategory === "Tout" 
    ? startups 
    : startups.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Header Hero */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-6">
                <Lightbulb size={16} />
                Innovation & Tech
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Le Futur de la Santé <span className="text-brand-500">Se Construit Ici.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Découvrez les startups qui transforment les soins en Algérie et en Afrique grâce à la technologie.
            </p>

            {/* Catégories (Filtres) */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                            activeCategory === cat 
                            ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* 2. Grille des Startups */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup) => (
                <div key={startup.id} className="group bg-white rounded-2xl p-1 overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-100 hover:-translate-y-1">
                    <div className="bg-gray-50 p-6 rounded-xl h-full flex flex-col">
                        
                        {/* En-tête Carte */}
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${startup.color}`}>
                                <startup.icon size={28} />
                            </div>
                            <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-500 border border-gray-200 uppercase tracking-wide">
                                {startup.category}
                            </span>
                        </div>

                        {/* Contenu */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{startup.name}</h3>
                        <p className="text-brand-600 font-medium text-sm mb-4">{startup.tagline}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                            {startup.description}
                        </p>

                        {/* Bouton Action */}
                        <button className="w-full py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all flex items-center justify-center gap-2 group-hover:shadow-md">
                            Découvrir le projet
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* 3. Section CTA (Call to Action) */}
        <div className="mt-20 bg-brand-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Vous avez une idée innovante ?</h2>
                <p className="text-brand-100 max-w-md">
                    Rejoignez l'incubateur Chronolab et bénéficiez d'un accompagnement pour propulser votre startup santé.
                </p>
            </div>
            <button className="relative z-10 px-8 py-4 bg-white text-brand-900 font-bold rounded-full hover:bg-brand-50 transition-colors shadow-xl whitespace-nowrap">
                Soumettre mon projet
            </button>
            
            {/* Décoration de fond */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20"></div>
        </div>

      </div>
    </div>
  );
}