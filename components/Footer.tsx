import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1: Branding */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight">Chronolab<span className="text-brand-500">.</span></h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Le hot spot de la e-santé où patients et professionnels se connectent pour une révolution bien-être.
            </p>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-100">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/annuaire" className="hover:text-brand-500 transition-colors">Annuaire Santé</Link></li>
              <li><Link href="/startups" className="hover:text-brand-500 transition-colors">Catalogue Startups</Link></li>
              <li><Link href="/quiz" className="hover:text-brand-500 transition-colors">Quiz Médical</Link></li>
              <li><Link href="/contact" className="hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Légal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-100">Légal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/confidentialite" className="hover:text-brand-500 transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/cgu" className="hover:text-brand-500 transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="/cookies" className="hover:text-brand-500 transition-colors">Gestion des cookies</Link></li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-100">Nous trouver</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-500 shrink-0 mt-1" size={18} />
                <span>23 Rue Colonel Mohamed Chaabani, Alger, Algérie</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-500 shrink-0" size={18} />
                <span>contact@chronolab.dz</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-500 shrink-0" size={18} />
                <span>+213 12 34 56 78</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Chronolab. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}