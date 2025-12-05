import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Fond décoratif (Gradient flou) */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-full bg-gradient-to-bl from-brand-50 to-white blur-3xl opacity-50" />

      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        
        {/* Texte (Gauche) */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold border border-brand-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            La santé connectée 2.0
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Votre santé, notre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">priorité absolue.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            Chronolab est le hot-spot de la e-santé où patients et professionnels se connectent pour une révolution du bien-être en Afrique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/annuaire" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1">
              Trouver un médecin
              <SearchIcon />
            </Link>
            <Link href="/patients" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all">
              Espace Patient
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="pt-8 flex items-center gap-8 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-full text-green-600"><Activity size={16}/></div>
              <span>IA Médicale Avancée</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600"><div className="w-4 h-4 font-bold text-xs flex items-center justify-center">24</div></div>
              <span>Support 7j/7</span>
            </div>
          </div>
        </div>

        {/* Visuel (Droite) - Placeholders pour le moment */}
        <div className="flex-1 w-full relative">
            <div className="relative aspect-square md:aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl border border-gray-100 overflow-hidden shadow-2xl">
                {/* Ici on mettra ton image/vidéo 3D plus tard */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-2xl">
                    VISUEL 3D HEALTH
                </div>
                
                {/* Carte Flottante Décorative 1 */}
                <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce delay-1000 duration-[3000ms]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Activity size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Analyse IA</p>
                            <p className="text-sm font-bold text-gray-800">Terminée</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    )
}