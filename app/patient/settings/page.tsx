export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Paramètres du compte</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Photo de profil */}
        <div className="p-8 border-b border-gray-100 flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
                IK
            </div>
            <div>
                <h3 className="font-bold text-lg">Ibrahim Karamoko</h3>
                <p className="text-gray-500 text-sm mb-3">Patient • ID: #883920</p>
                <button className="text-brand-600 text-sm font-bold hover:underline">Changer la photo</button>
            </div>
        </div>

        {/* Formulaire */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Nom Complet</label>
                <input type="text" defaultValue="Ibrahim Karamoko" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-brand-500" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email</label>
                <input type="email" defaultValue="ibrahim@email.com" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-brand-500" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Téléphone</label>
                <input type="tel" defaultValue="+225 07 00 00 00" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-brand-500" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Groupe Sanguin</label>
                <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-brand-500">
                    <option>O+</option>
                    <option>A+</option>
                    <option>B+</option>
                </select>
            </div>

            <div className="col-span-1 md:col-span-2 pt-4">
                <button className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors">
                    Sauvegarder les modifications
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}