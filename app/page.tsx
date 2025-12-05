import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* Section ADN (Simplifiée pour l'instant) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
             <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Notre ADN</span>
             <h2 className="mt-2 text-3xl font-bold text-gray-900">Placer le patient au centre du jeu</h2>
             <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Chez Chronolab, on simplifie la vie des docs pour que tout le monde soit gagnant. 
                Notre but : proposer des solutions innovantes qui transforment l'expérience de santé.
             </p>
        </div>
      </section>
    </>
  );
}