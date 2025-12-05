import Link from 'next/link';
import { Users, Calendar, Clock } from 'lucide-react';

export default function DoctorDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Espace Professionnel</h1>
      
      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Users size={24}/></div>
                <div>
                    <p className="text-sm text-gray-500">Patients aujourd'hui</p>
                    <p className="text-2xl font-bold">12</p>
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-lg"><Calendar size={24}/></div>
                <div>
                    <p className="text-sm text-gray-500">Prochain RDV</p>
                    <p className="text-2xl font-bold">14:30</p>
                </div>
            </div>
        </div>
      </div>

      {/* Raccourci vers l'outil principal */}
      <div className="bg-brand-900 rounded-2xl p-8 text-white flex justify-between items-center">
        <div>
            <h2 className="text-xl font-bold mb-2">Besoin de générer un document ?</h2>
            <p className="text-brand-200">Créez une ordonnance ou un compte rendu en quelques clics.</p>
        </div>
        <Link href="/medecin/ordonnance" className="px-6 py-3 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-colors">
            Créer une ordonnance
        </Link>
      </div>
    </div>
  );
}