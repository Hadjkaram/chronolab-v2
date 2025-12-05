"use client";

import { useState } from 'react';
import { Plus, Trash2, Printer, Download, Pill } from 'lucide-react';

export default function OrdonnancePage() {
  // État du patient
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  
  // État des médicaments
  const [medications, setMedications] = useState([
    { name: "Doliprane 1000mg", dosage: "1 comprimé", frequency: "3 fois par jour", duration: "5 jours" }
  ]);

  // Ajouter une ligne
  const addMedication = () => {
    setMedications([...medications, { name: "", dosage: "", frequency: "", duration: "" }]);
  };

  // Mettre à jour une ligne
  const updateMedication = (index: number, field: string, value: string) => {
    const newMeds = [...medications];
    // @ts-ignore
    newMeds[index][field] = value;
    setMedications(newMeds);
  };

  // Supprimer une ligne
  const removeMedication = (index: number) => {
    const newMeds = medications.filter((_, i) => i !== index);
    setMedications(newMeds);
  };

  // Date du jour
  const today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col md:flex-row gap-6">
      
      {/* GAUCHE : ÉDITEUR */}
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <h2 className="font-bold text-gray-700 flex items-center gap-2">
                <Pill size={20} className="text-brand-500"/> Éditeur d'Ordonnance
            </h2>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {/* Info Patient */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Nom du Patient</label>
                    <input 
                        type="text" 
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Ex: Jean Dupont"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Âge</label>
                    <input 
                        type="text" 
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        placeholder="Ex: 45 ans"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* Liste Médicaments */}
            <div className="space-y-4">
                <label className="block text-xs font-bold text-gray-500 uppercase">Prescription</label>
                {medications.map((med, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 relative group">
                        <button 
                            onClick={() => removeMedication(index)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                        
                        <div className="grid grid-cols-1 gap-3">
                            <input 
                                type="text" 
                                placeholder="Nom du médicament (ex: Amoxicilline)"
                                className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-brand-500 outline-none pb-1"
                                value={med.name}
                                onChange={(e) => updateMedication(index, 'name', e.target.value)}
                            />
                            <div className="grid grid-cols-3 gap-2">
                                <input 
                                    type="text" 
                                    placeholder="Dosage"
                                    className="text-sm bg-transparent border-b border-gray-200 focus:border-brand-500 outline-none"
                                    value={med.dosage}
                                    onChange={(e) => updateMedication(index, 'dosage', e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Fréquence"
                                    className="text-sm bg-transparent border-b border-gray-200 focus:border-brand-500 outline-none"
                                    value={med.frequency}
                                    onChange={(e) => updateMedication(index, 'frequency', e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Durée"
                                    className="text-sm bg-transparent border-b border-gray-200 focus:border-brand-500 outline-none"
                                    value={med.duration}
                                    onChange={(e) => updateMedication(index, 'duration', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button 
                    onClick={addMedication}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center gap-2"
                >
                    <Plus size={20} /> Ajouter un médicament
                </button>
            </div>
        </div>
      </div>

      {/* DROITE : APERÇU (LIVE PREVIEW) */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Actions */}
        <div className="mb-4 flex justify-end gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm">
                <Printer size={18} /> Imprimer
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-600 rounded-lg text-white font-medium hover:bg-brand-700 shadow-sm">
                <Download size={18} /> PDF
            </button>
        </div>

        {/* FEUILLE A4 (Simulation) */}
        <div className="bg-white flex-1 rounded-sm shadow-2xl p-8 md:p-12 relative overflow-y-auto text-gray-800 font-serif leading-relaxed">
            
            {/* Header Ordonnance */}
            <div className="flex justify-between items-start mb-12 border-b-2 border-gray-800 pb-6">
                <div>
                    <h1 className="text-2xl font-bold uppercase text-gray-900">Dr. Élisabeth Dubois</h1>
                    <p className="text-sm">Médecine Générale</p>
                    <p className="text-sm mt-2">123 Rue de la Santé, Alger</p>
                    <p className="text-sm">Tél: 01 23 45 67 89</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold">Alger, le {today}</p>
                </div>
            </div>

            {/* Info Patient */}
            <div className="mb-10 pl-4 border-l-4 border-gray-200">
                <p className="text-lg">
                    <span className="font-bold">Patient : </span> 
                    {patientName || "................................................"}
                </p>
                {patientAge && <p className="text-md text-gray-600">Âge : {patientAge}</p>}
            </div>

            {/* Liste des médicaments (QSP) */}
            <div className="space-y-6 mb-20">
                {medications.map((med, i) => (
                    <div key={i} className="mb-4">
                        <div className="flex items-baseline gap-2">
                            <span className="font-bold text-lg text-gray-900">
                                {i + 1}. {med.name || "..."}
                            </span>
                        </div>
                        <div className="pl-6 text-gray-600 italic">
                            {med.dosage && <span>{med.dosage}, </span>}
                            {med.frequency && <span>{med.frequency}</span>}
                            {med.duration && <span> pendant {med.duration}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Signature */}
            <div className="absolute bottom-12 right-12 text-center w-48">
                <p className="text-sm mb-8">Signature & Cachet</p>
                <div className="h-0.5 bg-gray-300 w-full mb-2"></div>
                {/* On pourrait mettre une image de signature ici */}
                <p className="font-script text-2xl text-blue-900 opacity-70 rotate-[-5deg]">Dr. Dubois</p>
            </div>

            {/* Footer légal */}
            <div className="absolute bottom-4 left-0 w-full text-center text-[10px] text-gray-400">
                Membre d'une association de gestion agréée - N° RPPS : 10002345678
            </div>

        </div>
      </div>

    </div>
  );
}