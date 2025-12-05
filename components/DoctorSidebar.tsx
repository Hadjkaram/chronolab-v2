"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FilePlus, Users, Stethoscope, Settings, LogOut, FileText } from 'lucide-react';

const menuItems = [
  { name: 'Tableau de bord', icon: LayoutDashboard, href: '/medecin' },
  { name: 'Nouvelle Ordonnance', icon: FilePlus, href: '/medecin/ordonnance' },
  { name: 'Compte Rendu', icon: FileText, href: '/medecin/compte-rendu' }, // On le fera plus tard
  { name: 'Mes Patients', icon: Users, href: '/medecin/patients' },
];

export default function DoctorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-white min-h-[calc(100vh-80px)]">
      
      {/* En-tête Sidebar */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">Dr</div>
            <div>
                <p className="font-bold text-sm">Dr. Dubois</p>
                <p className="text-xs text-slate-400">Cardiologue</p>
            </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${
                isActive 
                  ? 'bg-brand-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Bas de page */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors">
            <LogOut size={20} />
            Déconnexion Pro
        </button>
      </div>
    </aside>
  );
}