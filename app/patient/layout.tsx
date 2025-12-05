import PatientSidebar from "../../components/PatientSidebar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* La Sidebar s'affiche à gauche */}
      <PatientSidebar />
      
      {/* Le contenu de la page s'affiche à droite */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}