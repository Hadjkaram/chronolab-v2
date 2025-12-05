import Link from 'next/link';
import { Activity, FileScan, Calendar, ArrowUpRight, Bell } from 'lucide-react';

export default function PatientDashboard() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* 1. En-tête */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bonjour, Ibrahim 👋</h1>
          <p className="text-gray-500">Voici le résumé de votre santé aujourd&apos;hui.</p>
        </div>
        <button className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-brand-600 hover:border-brand-200 shadow-sm relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>

      {/* 2. Cartes d'action */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Carte IA */}
        <div className="md:col-span-2 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <FileScan size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Analyse IA Rapide</h3>
            <p className="text-brand-100 mb-6 max-w-sm">
                Téléchargez vos résultats d&apos;analyses pour une interprétation instantanée.
            </p>
            <Link href="/patient/ia" className="inline-flex items-center gap-2 bg-white text-brand-600 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-md">
                Lancer une analyse
                <ArrowUpRight size={18} />
            </Link>
        </div>

        {/* Carte Dépistage */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Autotests</h3>
            <p className="text-gray-500 text-sm mb-6">
                Évaluez vos risques en 2 minutes.
            </p>
            <Link href="/patient/depistage" className="w-full block text-center bg-gray-50 text-gray-900 border border-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Commencer
            </Link>
        </div>
      </div>
    </div>
  );
}