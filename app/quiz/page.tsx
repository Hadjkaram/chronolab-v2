import { Brain, Trophy, HeartPulse, Stethoscope, Play } from 'lucide-react';

const quizzes = [
  { id: 1, title: "Nutrition & Santé", questions: 10, color: "bg-green-500", icon: HeartPulse, level: "Facile" },
  { id: 2, title: "Premiers Secours", questions: 15, color: "bg-red-500", icon: Stethoscope, level: "Moyen" },
  { id: 3, title: "Anatomie Humaine", questions: 20, color: "bg-blue-500", icon: Brain, level: "Expert" },
];

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
      
      {/* Hero Quiz */}
      <div className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px]"></div>
        <h1 className="text-5xl font-bold mb-4 relative z-10">Quiz Médical <span className="text-yellow-400">Challenge</span></h1>
        <p className="text-slate-300 max-w-xl mx-auto relative z-10">
            Testez vos connaissances, gagnez des points et apprenez à prendre soin de vous en vous amusant !
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
                <div key={quiz.id} className="bg-slate-800 rounded-3xl p-2 hover:-translate-y-2 transition-transform duration-300 border border-slate-700">
                    <div className="bg-slate-900 rounded-2xl p-6 h-full flex flex-col items-center text-center">
                        <div className={`w-20 h-20 rounded-full ${quiz.color} flex items-center justify-center mb-6 shadow-lg shadow-${quiz.color}/30`}>
                            <quiz.icon size={32} className="text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">{quiz.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-400 mb-8">
                            <span>{quiz.questions} Questions</span>
                            <span>•</span>
                            <span className={quiz.level === 'Expert' ? 'text-red-400' : 'text-green-400'}>{quiz.level}</span>
                        </div>

                        <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-brand-400 hover:text-white transition-colors flex items-center justify-center gap-2">
                            <Play size={18} fill="currentColor" /> Jouer
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Leaderboard Rapide */}
        <div className="mt-20 max-w-2xl mx-auto bg-slate-800 rounded-3xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="text-yellow-400" /> Meilleurs Scores
            </h2>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-slate-500">#{i}</span>
                            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                            <span className="font-bold">Utilisateur_{i*94}</span>
                        </div>
                        <span className="text-brand-400 font-mono font-bold">{1000 - (i*50)} pts</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}