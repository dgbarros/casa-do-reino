"use client";

import { Instagram, Facebook, Youtube, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Inicio() {
  const [copiado, setCopiado] = useState(false);

  const copiarCNPJ = () => {
    navigator.clipboard.writeText("47.414.367.0001-15");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="flex flex-col items-center px-6 pt-10 animate-in fade-in duration-500">
      <div className="w-32 h-32 bg-black rounded-full overflow-hidden flex items-center justify-center mb-6 shadow-lg">
        <img src="/cr-image.png" alt="Logo igreja CR" className="w-full h-full object-cover" />
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Casa do Reino</h1>
      <p className="text-gray-500 text-sm text-center mb-8 uppercase tracking-wide">
        Uma igreja de famílias para famílias
      </p>

      {/* Social Links - Estilo "Bento Grid" ou Botões Largos */}
      <div className="w-full space-y-3 mb-10">
        <BotaoSocial icone={<Instagram />} label="Instagram" href="#" />
        <BotaoSocial icone={<Facebook />} label="Facebook" href="#" />
        <BotaoSocial icone={<Youtube />} label="Youtube" href="#" />
      </div>

      {/* Área de Generosidade */}
      <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
        <h3 className="font-semibold text-gray-900 mb-4">Generosidade</h3>
        <div 
          onClick={copiarCNPJ}
          className="bg-gray-50 p-3 rounded-lg flex items-center justify-between cursor-pointer active:scale-95 transition-transform border border-gray-200"
        >
          <span className="text-sm font-mono text-gray-600">47.414.367/0001-15</span>
          {copiado ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400" />}
        </div>
        <p className="text-xs text-gray-400 mt-2">Toque para copiar a chave PIX</p>
      </div>
    </div>
  );
}

// Subcomponente para manter o código limpo
function BotaoSocial({ icone, label, href }: { icone: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 w-full p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
    >
      <div className="text-gray-800">{icone}</div>
      <span className="font-medium text-gray-700">{label}</span>
    </a>
  );
}