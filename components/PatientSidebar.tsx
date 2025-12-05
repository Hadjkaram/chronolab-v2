"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Activity, MessageSquare, Settings, LogOut, FileScan } from 'lucide-react';

const menuItems = [
  { name: 'Vue d\'ensemble', icon: LayoutDashboard, href: '/patient' },
  { name: 'Analyse IA', icon: FileScan, href: '/patient/ia' },
  { name: 'Dépistage', icon: Activity, href: '/patient/depistage' },
  { name: 'Mes Documents', icon: FileText, href: '/patient/documents' },
  { name: 'Assistant Santé', icon: MessageSquare, href: '/patient/chat' },
];

export default function PatientSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-100 min-h-[calc(100vh-80px)]">
      
      {/* Menu Principal */}
      <div className="flex-1 py-6 px-4 space-y-2">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Mon Espace
        </p>
        
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                isActive 
                  ? 'bg-brand-50 text-brand-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}

        <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Paramètres
            </p>
            <Link href="/patient/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium">
                <Settings size={20} />
                Mon Compte
            </Link>
        </div>
      </div>

      {/* Bas de page Sidebar */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors">
            <LogOut size={20} />
            Déconnexion
        </button>
      </div>
    </aside>
  );
}