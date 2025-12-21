"use client";

import { useState } from "react";
import Inicio from "./Inicio";
import FormularioMembro from "./FormularioMembro";
import { BotaoNav } from "./BotaoNav";

export function AppShell() {
  const [abaAtiva, setAbaAtiva] = useState<"inicio" | "conexao">("inicio");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative">
      <div className="flex-1 overflow-y-auto pb-24">
        {abaAtiva === "inicio" ? <Inicio /> : <FormularioMembro />}
      </div>

      <BotaoNav abaAtiva={abaAtiva} onChange={setAbaAtiva} />
    </main>
  );
}
