"use client";

import { useState } from 'react';
import { Search, MapPin, Star, Filter, Calendar, Clock } from 'lucide-react';

// 1. Les Données (On remplacera ça par une base de données plus tard)
const medecins = [
  {
    id: 1,
    name: "Dr. Fetta Bouadi-Gamar",
    specialty: "Gynécologue obstétrique",
    address: "24, Rue des freres Meslem, Alger",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop", // Photo libre de droit
    available: "Aujourd'hui",
    tags: ["Suivi de grossesse", "Échographie"]
  },
  {
    id: 2,
    name: "Dr. Jean Steve Memel",
    specialty: "Médecin Généraliste",
    address: "Abidjan-Cocody, Côte d'Ivoire",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&fit=crop",
    available: "Demain",
    tags: ["Urgences", "Pédiatrie"]
  },
  {
    id: 3,
    name: "Dr. Salima Bach Chaouch",
    specialty: "Médecin Infectiologue",
    address: "Alger, Algérie",
    rating: 5.0,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&fit=crop",
    available: "Sur RDV",
    tags: ["Maladies tropicales", "Vaccination"]
  },
  {
    id: 4,
    name: "Nafsia Clinic",
    specialty: "Santé Mentale & Psychologie",
    address: "Plateforme en ligne (Téléconsultation)",
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=200&h=200&fit=crop",
    available: "Immédiat",
    tags: ["Thérapie", "Suivi"]
  },
  {
    id: 5,
    name: "Dr. Karim Oualid",
    specialty: "Cardiologue",
    address: "Oran, Algérie",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&fit=crop",
    available: "Lundi",
    tags: ["Hypertension", "Cœur"]
  },
  {
    id: 6,
    name: "Dr. Sarah Benali",
    specialty: "Dentiste",
    address: "Tunis, Tunisie",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop",
    available: "Aujourd'hui",
    tags: ["Orthodontie", "Soins"]
  }
];

export default function AnnuairePage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Petit filtre simple en temps réel
  const filteredMedecins = medecins.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 2. En-tête avec Recherche (Fond vert dégradé) */}
      <div className="bg-brand-900 py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Trouvez votre professionnel de santé
          </h1>
          <p className="text-brand-100 text-lg">
            Accédez aux meilleurs médecins, cliniques et spécialistes en Afrique.
          </p>

          {/* Barre de recherche Flottante */}
          <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto">
            <div className="flex items-center flex-1 px-4 w-full">
              <Search className="text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Médecin, spécialité, clinique..." 
                className="w-full p-3 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center flex-1 px-4 w-full border-t md:border-t-0 border-gray-100">
              <MapPin className="text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Ville ou pays..." 
                className="w-full p-3 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all shadow-md">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* 3. Filtres & Résultats */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Barre d'outils (Nombre de résultats + Filtre) */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 font-medium">
            <span className="text-brand-900 font-bold">{filteredMedecins.length}</span> professionnels trouvés
          </p>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50 hover:border-brand-200 transition-colors">
            <Filter size={18} />
            <span>Filtrer</span>
          </button>
        </div>

        {/* GRILLE DES MÉDECINS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedecins.map((med) => (
            <div key={med.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
              
              <div className="flex items-start gap-4 mb-4">
                {/* Image */}
                <div className="relative">
                    <img 
                    src={med.image} 
                    alt={med.name} 
                    className="w-20 h-20 rounded-xl object-cover border border-gray-100 group-hover:scale-105 transition-transform" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm">
                        <div className="bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                    </div>
                </div>
                
                {/* Infos principales */}
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-brand-600 transition-colors">
                    {med.name}
                  </h3>
                  <p className="text-brand-500 font-medium text-sm mb-1">{med.specialty}</p>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <Star size={14} fill="currentColor" />
                    <span className="font-bold text-gray-700">{med.rating}</span>
                    <span className="text-gray-400">({med.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 bg-gray-50 p-2 rounded-lg">
                <MapPin size={16} className="text-gray-400 shrink-0" />
                <span className="truncate">{med.address}</span>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {med.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                        {tag}
                    </span>
                ))}
              </div>

              <div className="border-t border-gray-100 my-4"></div>

              {/* Actions & Dispo */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Disponibilité</span>
                    <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                        <Calendar size={14} />
                        {med.available}
                    </div>
                </div>
                <button className="px-5 py-2.5 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-500 hover:text-white transition-all text-sm flex items-center gap-2">
                    Prendre RDV
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredMedecins.length === 0 && (
            <div className="text-center py-20">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Aucun résultat trouvé</h3>
                <p className="text-gray-500">Essayez de modifier votre recherche.</p>
            </div>
        )}

      </div>
    </div>
  );
}