"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MoreVertical, Phone } from 'lucide-react';

export default function ChatPage() {
  const [input, setInput] = useState("");
  // Messages initiaux
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Bonjour Ibrahim ! Je suis l'assistant Chronolab. Comment puis-je vous aider concernant votre santé aujourd'hui ?" },
  ]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Scroll automatique vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Ajouter le message utilisateur
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulation réponse IA après 1 seconde
    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, sender: 'bot', text: "J'ai bien reçu votre message. En tant qu'IA, je note vos symptômes. Pensez à consulter Dr. Dubois si la douleur persiste." };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      
      {/* Header du Chat */}
      <div className="bg-brand-600 p-4 flex justify-between items-center text-white shadow-md z-10">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot size={24} />
            </div>
            <div>
                <h2 className="font-bold">Assistant Santé 24/7</h2>
                <p className="text-xs text-brand-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> En ligne
                </p>
            </div>
        </div>
        <div className="flex gap-2">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Phone size={20}/></button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><MoreVertical size={20}/></button>
        </div>
      </div>

      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] md:max-w-[70%] gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-gray-200 text-gray-600' : 'bg-brand-100 text-brand-600'}`}>
                        {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    {/* Bulle */}
                    <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                        msg.sender === 'user' 
                        ? 'bg-brand-600 text-white rounded-tr-none' 
                        : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Barre de saisie */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-4">
        <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Décrivez vos symptômes..." 
            className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
        />
        <button 
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white rounded-xl px-6 flex items-center justify-center transition-colors shadow-lg shadow-brand-500/20"
        >
            <Send size={20} />
        </button>
      </form>
    </div>
  );
}