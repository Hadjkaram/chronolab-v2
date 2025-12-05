"use client";

import { useState } from 'react';
import { FileText, Download, Eye, Search, Filter, Calendar } from 'lucide-react';

// Données fictives
const documents = [
  { id: 1, title: "Ordonnance - Dr. Dubois", type: "Ordonnance", date: "04 Déc 2025", size: "120 KB", color: "bg-blue-100 text-blue-600" },
  { id: 2, title: "Analyse Sanguine Complète", type: "Résultat Labo", date: "01 Déc 2025", size: "2.4 MB", color: "bg-purple-100 text-purple-600" },
  { id: 3, title: "Compte Rendu Cardio", type: "Compte Rendu", date: "15 Nov 2025", size: "850 KB", color: "bg-green-100 text-green-600" },
  { id: 4, title: "Certificat Médical - Sport", type: "Certificat", date: "10 Sept 2025", size: "50 KB", color: "bg-orange-100 text-orange-600" },
  { id: 5, title: "Ordonnance - Ophtalmo", type: "Ordonnance", date: "22 Juil 2025", size: "110 KB", color: "bg-blue-100 text-blue-600" },
];

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mes Documents</h1>
          <p className="text-gray-500 mt-1">
            Retrouvez ici tout votre historique médical sécurisé.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
            <Filter size={18} /> Filtrer par date
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
            type="text" 
            placeholder="Rechercher un document (ex: Ordonnance, Cardio...)" 
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Liste des documents */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {filteredDocs.length > 0 ? (
            <div className="divide-y divide-gray-100">
                {filteredDocs.map((doc) => (
                    <div key={doc.id} className="p-4 hover:bg-gray-50 transition-colors flex flex-col md:flex-row items-center gap-4">
                        
                        {/* Icône */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${doc.color}`}>
                            <FileText size={24} />
                        </div>

                        {/* Infos */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-bold text-gray-900">{doc.title}</h3>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-xs text-gray-500 mt-1">
                                <span className="flex items-center gap-1"><Calendar size={12}/> {doc.date}</span>
                                <span>•</span>
                                <span>{doc.size}</span>
                            </div>
                        </div>

                        {/* Badge Type */}
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase">
                            {doc.type}
                        </span>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors" title="Voir">
                                <Eye size={20} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors" title="Télécharger">
                                <Download size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-12">
                <p className="text-gray-500">Aucun document trouvé pour cette recherche.</p>
            </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
        <div className="bg-blue-100 p-1 rounded-full text-blue-600 shrink-0 mt-0.5">
            <Search size={16} />
        </div>
        <p className="text-sm text-blue-800">
            <strong>Astuce :</strong> Vos résultats d'analyses effectués via nos laboratoires partenaires sont ajoutés automatiquement ici sous 24h.
        </p>
      </div>

    </div>
  );
}