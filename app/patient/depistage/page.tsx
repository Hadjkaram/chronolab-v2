"use client";

import { useState } from 'react';
import { Activity, Heart, Brain, ArrowRight, Check, AlertTriangle, RefreshCw, ChevronLeft } from 'lucide-react';

// --- LES DONNÉES DES TESTS ---
const tests = [
  {
    id: 'hypertension',
    title: "Risque Hypertension",
    desc: "Évaluez vos facteurs de risque liés à la pression artérielle.",
    icon: Activity,
    color: "bg-red-500",
    questions: [
      "Avez-vous souvent des maux de tête le matin ?",
      "Ressentez-vous des bourdonnements d'oreilles ?",
      "Avez-vous des antécédents familiaux d'hypertension ?",
      "Êtes-vous fumeur ?",
      "Votre consommation de sel est-elle élevée ?"
    ]
  },
  {
    id: 'diabete',
    title: "Risque Diabète T2",
    desc: "Détectez les signes précurseurs du diabète.",
    icon: Heart, // On utilise Heart faute d'icône "Goutte" dans ce pack de base
    color: "bg-blue-500",
    questions: [
      "Avez-vous souvent soif de manière intense ?",
      "Ressentez-vous une fatigue chronique après les repas ?",
      "Avez-vous pris du poids rapidement récemment ?",
      "Avez-vous plus de 45 ans ?",
      "Faites-vous moins de 30 min de sport par semaine ?"
    ]
  },
  {
    id: 'burnout',
    title: "Stress & Burnout",
    desc: "Évaluez votre charge mentale et votre niveau de stress.",
    icon: Brain,
    color: "bg-purple-500",
    questions: [
      "Avez-vous des troubles du sommeil réguliers ?",
      "Vous sentez-vous irritable ou anxieux au travail ?",
      "Avez-vous perdu l'envie de faire vos activités habituelles ?",
      "Ressentez-vous une fatigue émotionnelle constante ?",
      "Avez-vous du mal à vous concentrer ?"
    ]
  }
];

export default function DepistagePage() {
  const [activeTest, setActiveTest] = useState<any>(null); // Quel test est lancé ?
  const [currentQuestion, setCurrentQuestion] = useState(0); // Quelle question (0 à 4)
  const [score, setScore] = useState(0); // Score (Nombre de Oui)
  const [showResult, setShowResult] = useState(false); // Affiche le résultat ?

  // Lancer un test
  const startTest = (test: any) => {
    setActiveTest(test);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  // Répondre à une question
  const handleAnswer = (isYes: boolean) => {
    if (isYes) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < activeTest.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // Réinitialiser
  const reset = () => {
    setActiveTest(null);
    setShowResult(false);
  };

  // --- VUE 1 : CHOIX DU TEST ---
  if (!activeTest) {
    return (
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Centre de Dépistage</h1>
          <p className="text-gray-500">
            Sélectionnez un parcours pour évaluer vos facteurs de risque en moins de 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tests.map((test) => (
            <button 
              key={test.id}
              onClick={() => startTest(test)}
              className="group text-left bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${test.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                <test.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{test.desc}</p>
              <div className="flex items-center text-brand-600 font-bold text-sm">
                Commencer le test <ArrowRight size={16} className="ml-2" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- VUE 2 : RÉSULTAT FINAL ---
  if (showResult) {
    const isHighRisk = score >= 3; // Si 3 "Oui" ou plus = Risque élevé
    
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center animate-in zoom-in-95 duration-300">
        <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${isHighRisk ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
           {isHighRisk ? <AlertTriangle size={48} /> : <Check size={48} />}
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isHighRisk ? "Risque Élevé Détecté" : "Risque Faible"}
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {isHighRisk 
                ? "D'après vos réponses, vous présentez plusieurs facteurs de risque. Nous vous recommandons vivement de consulter un médecin pour un examen approfondi."
                : "Vos réponses sont rassurantes. Continuez à maintenir une bonne hygiène de vie et surveillez ces indicateurs régulièrement."
            }
        </p>

        <div className="flex flex-col gap-4">
            {isHighRisk && (
                <button className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                    Prendre Rendez-vous (Annuaire)
                </button>
            )}
            <button 
                onClick={reset}
                className="w-full py-4 bg-gray-50 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
                <RefreshCw size={18} /> Faire un autre test
            </button>
        </div>
      </div>
    );
  }

  // --- VUE 3 : LE QUIZ EN COURS ---
  const progress = ((currentQuestion + 1) / activeTest.questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
        {/* Bouton retour */}
        <button onClick={reset} className="mb-8 flex items-center text-gray-500 hover:text-gray-900 transition-colors">
            <ChevronLeft size={20} /> Retour aux tests
        </button>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Barre de progression */}
            <div className="h-2 bg-gray-100 w-full">
                <div className={`h-full ${activeTest.color} transition-all duration-500`} style={{ width: `${progress}%` }}></div>
            </div>

            <div className="p-8 md:p-12">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                    Question {currentQuestion + 1} / {activeTest.questions.length}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 min-h-[100px]">
                    {activeTest.questions[currentQuestion]}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => handleAnswer(false)}
                        className="py-6 rounded-2xl border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 font-bold text-gray-600 text-xl transition-all"
                    >
                        Non
                    </button>
                    <button 
                        onClick={() => handleAnswer(true)}
                        className={`py-6 rounded-2xl text-white font-bold text-xl transition-all shadow-lg hover:opacity-90 hover:scale-[1.02] ${activeTest.color}`}
                    >
                        Oui
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}