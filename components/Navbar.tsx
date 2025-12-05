"use client";

import Link from 'next/link';
import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
           <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-brand-500/20">C</div>
           <span className="text-2xl font-bold text-gray-900 tracking-tight">Chronolab<span className="text-brand-500">.</span></span>
        </Link>

        {/* MENU BUREAU */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 text-sm uppercase tracking-wide">
          <Link href="/" className="hover:text-brand-500 transition-colors">Accueil</Link>
          <Link href="/annuaire" className="hover:text-brand-500 transition-colors">Annuaire</Link>
          {/* LIEN CORRIGÉ ICI (patient sans s) */}
          <Link href="/patient" className="hover:text-brand-500 transition-colors">Patients</Link>
          <Link href="/medecin" className="hover:text-brand-500 transition-colors">Médecins</Link>
          <Link href="/startups" className="hover:text-brand-500 transition-colors">Nos Startups</Link>
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} className="text-gray-600" />
          </button>
          <Link href="/login" className="flex items-center gap-2 px-5 py-2.5 bg-brand-900 text-white rounded-full hover:bg-brand-600 transition-all shadow-md hover:shadow-lg text-sm font-medium">
            <User size={18} />
            <span>Connexion</span>
          </Link>
        </div>

        {/* BOUTON MOBILE */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE (S'affiche si ouvert) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl absolute w-full">
          <Link href="/" className="py-2 text-gray-700 font-medium hover:text-brand-500">Accueil</Link>
          <Link href="/annuaire" className="py-2 text-gray-700 font-medium hover:text-brand-500">Annuaire</Link>
          {/* LIEN CORRIGÉ ICI AUSSI */}
          <Link href="/patient" className="py-2 text-gray-700 font-medium hover:text-brand-500">Patients</Link>
          <Link href="/medecin" className="py-2 text-gray-700 font-medium hover:text-brand-500">Médecins</Link>
          <Link href="/startups" className="py-2 text-gray-700 font-medium hover:text-brand-500">Nos Startups</Link>
          <hr />
          <Link href="/login" className="flex items-center gap-2 py-2 text-brand-600 font-bold">
             <User size={18} /> Se connecter
          </Link>
        </div>
      )}
    </header>
  );
}