import { Search, Stethoscope, Activity, Users, Lightbulb, HeartPulse, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Dépistage Rapide",
    desc: "Plongez dans notre page de dépistage, remplie de conseils et de régimes adaptés.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600",
    link: "/patients"
  },
  {
    title: "Annuaire Médical",
    desc: "Votre guide pour trouver les meilleurs professionnels de santé sur le continent.",
    icon: Search,
    color: "bg-brand-50 text-brand-600",
    link: "/annuaire"
  },
  {
    title: "Outils Gestion Pro",
    desc: "Médecins, découvrez des outils révolutionnaires pour optimiser les soins.",
    icon: Stethoscope,
    color: "bg-purple-50 text-purple-600",
    link: "/medecins"
  },
  {
    title: "Communauté Active",
    desc: "Rejoignez nos membres et groupes pour partager vos expériences.",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
    link: "/communaute"
  },
  {
    title: "Blog & Innovation",
    desc: "Restez à l'affût de notre blog qui met en avant les startups tech.",
    icon: Lightbulb,
    color: "bg-yellow-50 text-yellow-600",
    link: "/startups"
  },
  {
    title: "Expérience Patient",
    desc: "Nous plaçons le patient au centre de notre mission pour des résultats optimaux.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600",
    link: "/avis"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services Clés</h2>
          <p className="text-gray-600">
            Des outils conçus pour vous, que vous soyez patient ou médecin. Tout est centralisé pour une santé simplifiée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 flex flex-col items-start"
            >
              <div className={`p-4 rounded-xl mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}