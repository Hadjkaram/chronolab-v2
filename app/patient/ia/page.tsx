"use client";

import { useState } from 'react';
import { UploadCloud, FileText, CheckCircle, AlertCircle, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function IAMedicalPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<null | typeof mockResult>(null);

  // Simulation d'une analyse (On fait semblant que l'IA réfléchit pendant 3 secondes)
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult(mockResult); // On affiche le résultat fictif
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
           <span className="bg-brand-100 p-2 rounded-lg text-brand-600"><FileText size={28}/></span>
           Interprétation d&apos;Analyses par IA
        </h1>
        <p className="text-gray-500">
          Téléchargez votre rapport de laboratoire (PDF, JPG) pour obtenir une explication claire et simplifiée.
        </p>
      </div>

      {/* Zone d'avertissement médical */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="text-orange-500 shrink-0 mt-0.5" size={20} />
        <div className="text-sm text-orange-800">
          <span className="font-bold">Important :</span> Ceci est un assistant éducatif basé sur l&apos;IA. Il ne remplace pas l&apos;avis d&apos;un médecin. En cas d&apos;urgence, consultez immédiatement un professionnel.
        </div>
      </div>

      {/* Zone de Dépôt de Fichier (Upload) */}
      {!analysisResult && !isAnalyzing && (
        <div className="border-3 border-dashed border-gray-200 rounded-3xl p-10 text-center hover:border-brand-400 hover:bg-brand-50/30 transition-all cursor-pointer group bg-white">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-brand-500">
            <UploadCloud size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Glissez votre fichier ici</h3>
          <p className="text-gray-500 mb-6">ou cliquez pour parcourir vos dossiers (PDF, PNG, JPG)</p>
          
          <button 
            onClick={handleAnalyze}
            className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-shadow shadow-lg shadow-brand-500/30"
          >
            Sélectionner un fichier
          </button>
          
          <div className="mt-8 flex justify-center items-center gap-2 text-xs text-gray-400">
             <ShieldCheck size={14} />
             Vos données sont cryptées et anonymisées.
          </div>
        </div>
      )}

      {/* État de Chargement (Animation) */}
      {isAnalyzing && (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
           <Loader2 size={50} className="animate-spin text-brand-500 mx-auto mb-6" />
           <h3 className="text-xl font-bold text-gray-900 animate-pulse">Analyse en cours...</h3>
           <p className="text-gray-500 mt-2">Notre IA examine vos biomarqueurs.</p>
        </div>
      )}

      {/* RÉSULTAT DE L'ANALYSE */}
      {analysisResult && (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
           
           {/* Header Résultat */}
           <div className="bg-brand-900 text-white p-6 flex justify-between items-center">
              <div>
                 <p className="text-brand-200 text-sm uppercase font-semibold tracking-wider">Rapport généré</p>
                 <h2 className="text-2xl font-bold">Analyse Sanguine Complète</h2>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                 Score Santé: <span className="font-bold text-brand-400">Bon</span>
              </div>
           </div>

           <div className="p-8 space-y-8">
              
              {/* Résumé global */}
              <div>
                 <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    Synthèse Simplifiée
                 </h3>
                 <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {analysisResult.summary}
                 </p>
              </div>

              {/* Points d'attention */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {analysisResult.points.map((point, index) => (
                    <div key={index} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                       <div className="flex justify-between mb-2">
                          <span className="font-bold text-gray-800">{point.name}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${point.status === 'Normal' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                             {point.status}
                          </span>
                       </div>
                       <p className="text-sm text-gray-500">{point.desc}</p>
                    </div>
                 ))}
              </div>

              {/* Recommandations */}
              <div>
                 <h3 className="font-bold text-gray-900 mb-4">Recommandations IA</h3>
                 <ul className="space-y-3">
                    {analysisResult.recommendations.map((rec, i) => (
                       <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <ArrowRight className="text-brand-500 shrink-0 mt-0.5" size={16} />
                          {rec}
                       </li>
                    ))}
                 </ul>
              </div>

              <button 
                onClick={() => setAnalysisResult(null)}
                className="w-full py-4 border border-gray-200 rounded-xl text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Lancer une nouvelle analyse
              </button>
           </div>
        </div>
      )}
    </div>
  );
}

// Données fictives pour la simulation
const mockResult = {
   summary: "Vos résultats montrent une santé globale satisfaisante. Votre taux de glycémie est excellent. Cependant, une légère carence en Fer a été détectée, ce qui pourrait expliquer votre fatigue récente.",
   points: [
      { name: "Glycémie", status: "Normal", desc: "0.92 g/L (Valeur idéale)" },
      { name: "Cholestérol Total", status: "Normal", desc: "1.80 g/L (Dans la moyenne)" },
      { name: "Fer (Ferritine)", status: "Attention", desc: "20 ng/mL (Légèrement bas)" },
      { name: "Vitamine D", status: "Normal", desc: "35 ng/mL (Correct)" },
   ],
   recommendations: [
      "Augmenter la consommation d'aliments riches en fer (lentilles, épinards, viande rouge).",
      "Maintenir une hydratation régulière (1.5L d'eau par jour).",
      "Refaire un contrôle dans 3 mois pour vérifier le taux de fer."
   ]
};