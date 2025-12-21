"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// Importar sua função de serviço aqui depois

// Schema de validação (Pode mover para lib/validators.ts)
const schema = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 letras"),
  telefone: z.string().min(10, "Informe um telefone válido"),
  pedidoOracao: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function FormularioMembro() {
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setEnviando(true);
    try {
      // Aqui chamaremos seu services/formulario.ts
      // await enviarFormulario(data); 
      console.log(data); // Teste por enquanto
      setSucesso(true);
    } catch (error) {
      alert("Erro ao enviar");
    } finally {
      setEnviando(false);
    }
  };

  if (sucesso) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center animate-in zoom-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl"></span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Recebemos seu contato!</h2>
        <p className="text-gray-500 mt-2">O pastor entrará em contato em breve.</p>
        <button 
          onClick={() => setSucesso(false)} 
          className="mt-6 text-black font-semibold underline"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 pt-10 animate-in slide-in-from-right duration-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Cartão de Conexão</h2>
      <p className="text-gray-500 text-sm mb-8">Queremos conhecer você melhor.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 uppercase">Nome Completo</label>
          <input
            {...register("nome")}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            placeholder="Seu nome"
          />
          {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 uppercase">Telefone / WhatsApp</label>
          <input
            {...register("telefone")}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            placeholder="(11) 99999-9999"
          />
          {errors.telefone && <span className="text-red-500 text-xs">{errors.telefone.message}</span>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 uppercase">Pedido de Oração (Opcional)</label>
          <textarea
            {...register("pedidoOracao")}
            rows={4}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
            placeholder="Como podemos orar por você?"
          />
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
        >
          {enviando ? "Enviando..." : "Enviar Cartão"}
        </button>
      </form>
    </div>
  );
}