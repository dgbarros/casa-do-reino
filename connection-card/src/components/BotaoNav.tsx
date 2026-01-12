"use client";

import { Home, CreditCard } from "lucide-react";

type Aba = "inicio" | "conexao";

interface Props {
  abaAtiva: Aba;
  onChange: (aba: Aba) => void;
}

export function BotaoNav({ abaAtiva, onChange }: Props) {
  return (
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-around items-center z-50">
      <button
        onClick={() => onChange("inicio")}
        className={`flex flex-col items-center gap-1 transition-colors ${
          abaAtiva === "inicio" ? "text-black font-semibold" : "text-gray-400"
        }`}
      >
        <Home size={24} />
        <span className="text-xs">Início</span>
      </button>

      <button
        onClick={() => onChange("conexao")}
        className={`flex flex-col items-center gap-1 transition-colors ${
          abaAtiva === "conexao" ? "text-black font-semibold" : "text-gray-400"
        }`}
      >
        <CreditCard size={24} />
        <span className="text-xs">Conexão</span>
      </button>
    </nav>
  );
}
