"use client";

import { Search, MoreHorizontal, FileText, Phone } from 'lucide-react';

const patients = [
  { id: 1, name: "Jean Dupont", age: 45, visit: "04 Déc 2025", status: "Stable", img: "JD" },
  { id: 2, name: "Sarah Connor", age: 32, visit: "03 Déc 2025", status: "Critique", img: "SC" },
  { id: 3, name: "Marc Lavoine", age: 58, visit: "01 Déc 2025", status: "Suivi", img: "ML" },
  { id: 4, name: "Julie Zenatti", age: 29, visit: "28 Nov 2025", status: "Stable", img: "JZ" },
];

export default function MyPatientsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Header avec Recherche */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Liste des Patients</h1>
        <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="text" 
                placeholder="Rechercher un patient..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none shadow-sm"
            />
        </div>
      </div>

      {/* Tableau des patients */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Patient</th>
                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Dernière Visite</th>
                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Statut</th>
                    <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {patients.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
                                    {p.img}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{p.name}</p>
                                    <p className="text-xs text-gray-500">{p.age} ans</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{p.visit}</td>
                        <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                p.status === 'Critique' ? 'bg-red-100 text-red-600' :
                                p.status === 'Stable' ? 'bg-green-100 text-green-600' :
                                'bg-blue-100 text-blue-600'
                            }`}>
                                {p.status}
                            </span>
                        </td>
                        <td className="p-4 text-right">
                            <div className="flex justify-end gap-2">
                                <button className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors" title="Dossier">
                                    <FileText size={18} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Appeler">
                                    <Phone size={18} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-900 rounded-lg transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}