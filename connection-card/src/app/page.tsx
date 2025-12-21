"use client";

import { useState } from "react";
import Inicio from "@/src/components/Inicio";
import FormularioMembro from "@/src/components/FormularioMembro";
import { Home, CreditCard } from "lucide-react"; 

export default function Page() {
  const [abaAtiva, setAbaAtiva] = useState<"inicio" | "conexao">("inicio");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative">
      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        {abaAtiva === "inicio" ? <Inicio /> : <FormularioMembro />}
      </div>

      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-around items-center z-50">
        <button
          onClick={() => setAbaAtiva("inicio")}
          className={`flex flex-col items-center gap-1 transition-colors ${
            abaAtiva === "inicio" ? "text-black font-semibold" : "text-gray-400"
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Início</span>
        </button>

        <button
          onClick={() => setAbaAtiva("conexao")}
          className={`flex flex-col items-center gap-1 transition-colors ${
            abaAtiva === "conexao" ? "text-black font-semibold" : "text-gray-400"
          }`}
        >
          <CreditCard size={24} />
          <span className="text-xs">Conexão</span>
        </button>
      </nav>
    </main>
  );
}