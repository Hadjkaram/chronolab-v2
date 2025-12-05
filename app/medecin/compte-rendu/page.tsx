"use client";

import { useState } from 'react';
import { FileText, Printer, Download, Activity, User, Thermometer, Save } from 'lucide-react';

export default function CompteRenduPage() {
  // --- ÉTATS (DONNÉES) ---
  const [patient, setPatient] = useState({ name: "", age: "", sex: "M" });
  const [vitals, setVitals] = useState({ tension: "", poids: "", temp: "", pouls: "" });
  const [motif, setMotif] = useState("");
  const [observation, setObservation] = useState("");
  const [conclusion, setConclusion] = useState("");

  const today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col md:flex-row gap-6">
      
      {/* --- GAUCHE : ÉDITEUR --- */}
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-bold text-gray-700 flex items-center gap-2">
                <FileText size={20} className="text-brand-600"/> Nouveau Compte Rendu
            </h2>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 space-y-8">
            
            {/* 1. Patient */}
            <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
                    <User size={14}/> Informations Patient
                </label>
                <div className="grid grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        placeholder="Nom complet" 
                        className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-brand-500 outline-none w-full"
                        value={patient.name}
                        onChange={(e) => setPatient({...patient, name: e.target.value})}
                    />
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Âge" 
                            className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-brand-500 outline-none w-20"
                            value={patient.age}
                            onChange={(e) => setPatient({...patient, age: e.target.value})}
                        />
                        <select 
                            className="p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none flex-1"
                            value={patient.sex}
                            onChange={(e) => setPatient({...patient, sex: e.target.value})}
                        >
                            <option value="M">Homme</option>
                            <option value="F">Femme</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 2. Constantes Vitales */}
            <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
                    <Activity size={14}/> Constantes
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                        <span className="text-xs text-blue-500 font-bold block mb-1">Tension</span>
                        <input type="text" placeholder="12/8" className="w-full bg-transparent font-bold text-gray-700 outline-none" 
                               value={vitals.tension} onChange={(e) => setVitals({...vitals, tension: e.target.value})} />
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg border border-green-100">
                        <span className="text-xs text-green-500 font-bold block mb-1">Poids (kg)</span>
                        <input type="text" placeholder="70" className="w-full bg-transparent font-bold text-gray-700 outline-none" 
                               value={vitals.poids} onChange={(e) => setVitals({...vitals, poids: e.target.value})} />
                    </div>
                    <div className="bg-red-50 p-2 rounded-lg border border-red-100">
                        <span className="text-xs text-red-500 font-bold block mb-1">Temp (°C)</span>
                        <input type="text" placeholder="37.5" className="w-full bg-transparent font-bold text-gray-700 outline-none" 
                               value={vitals.temp} onChange={(e) => setVitals({...vitals, temp: e.target.value})} />
                    </div>
                    <div className="bg-purple-50 p-2 rounded-lg border border-purple-100">
                        <span className="text-xs text-purple-500 font-bold block mb-1">Pouls</span>
                        <input type="text" placeholder="70" className="w-full bg-transparent font-bold text-gray-700 outline-none" 
                               value={vitals.pouls} onChange={(e) => setVitals({...vitals, pouls: e.target.value})} />
                    </div>
                </div>
            </div>

            {/* 3. Texte Libre */}
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Motif de consultation</label>
                    <input 
                        type="text" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                        placeholder="Ex: Douleurs abdominales depuis 3 jours..."
                        value={motif}
                        onChange={(e) => setMotif(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Examen Clinique & Observations</label>
                    <textarea 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none h-32 resize-none"
                        placeholder="Décrivez vos observations ici..."
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Conclusion / Traitement</label>
                    <textarea 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none h-24 resize-none bg-gray-50"
                        placeholder="Conclusion médicale..."
                        value={conclusion}
                        onChange={(e) => setConclusion(e.target.value)}
                    />
                </div>
            </div>

            <button className="w-full py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20">
                <Save size={20} /> Enregistrer le dossier
            </button>
        </div>
      </div>

      {/* --- DROITE : APERÇU (LIVE) --- */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="mb-4 flex justify-end gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm">
                <Printer size={18} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-white font-medium hover:bg-slate-900 shadow-sm">
                <Download size={18} /> PDF
            </button>
        </div>

        {/* FEUILLE A4 */}
        <div className="bg-white flex-1 rounded-sm shadow-2xl p-10 md:p-14 relative overflow-y-auto text-gray-800 leading-relaxed font-sans">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-lg font-bold text-xl">C</div>
                    <div>
                        <h1 className="font-bold text-lg text-slate-900">Dr. Élisabeth Dubois</h1>
                        <p className="text-xs text-gray-500">Médecine Générale • Cardiologie</p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-600">COMPTE RENDU</span>
                    <p className="text-sm mt-1 font-bold">{today}</p>
                </div>
            </div>

            {/* Info Patient & Constantes */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Patient</p>
                        <p className="font-bold text-lg text-slate-900">{patient.name || "Nom du patient..."}</p>
                        <p className="text-sm text-gray-500">
                            {patient.age ? `${patient.age} ans` : ""} • {patient.sex === 'M' ? 'Homme' : 'Femme'}
                        </p>
                    </div>
                </div>
                
                {/* Grille Constantes */}
                <div className="grid grid-cols-4 gap-4 mt-4 border-t border-slate-200 pt-4">
                    <div className="text-center">
                        <p className="text-[10px] text-gray-400 uppercase">Tension</p>
                        <p className="font-bold text-slate-900">{vitals.tension || "-"}</p>
                    </div>
                    <div className="text-center border-l border-slate-200">
                        <p className="text-[10px] text-gray-400 uppercase">Poids</p>
                        <p className="font-bold text-slate-900">{vitals.poids || "-"} <span className="text-xs font-normal">kg</span></p>
                    </div>
                    <div className="text-center border-l border-slate-200">
                        <p className="text-[10px] text-gray-400 uppercase">Temp.</p>
                        <p className="font-bold text-slate-900">{vitals.temp || "-"} <span className="text-xs font-normal">°C</span></p>
                    </div>
                    <div className="text-center border-l border-slate-200">
                        <p className="text-[10px] text-gray-400 uppercase">Pouls</p>
                        <p className="font-bold text-slate-900">{vitals.pouls || "-"} <span className="text-xs font-normal">bpm</span></p>
                    </div>
                </div>
            </div>

            {/* Corps du rapport */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-sm font-bold text-brand-600 uppercase mb-2 border-b border-gray-100 pb-1 w-max">Motif</h3>
                    <p className="text-gray-800">{motif || "..."}</p>
                </div>
                
                <div>
                    <h3 className="text-sm font-bold text-brand-600 uppercase mb-2 border-b border-gray-100 pb-1 w-max">Examen Clinique</h3>
                    <p className="text-gray-800 whitespace-pre-line min-h-[100px]">
                        {observation || "En attente de saisie..."}
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-500">
                    <h3 className="text-sm font-bold text-gray-900 uppercase mb-2">Conclusion</h3>
                    <p className="text-gray-800 font-medium">
                        {conclusion || "..."}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-0 w-full text-center">
                <p className="text-xs text-gray-400">Ce document est confidentiel et soumis au secret médical.</p>
            </div>
        </div>
      </div>
    </div>
  );
}