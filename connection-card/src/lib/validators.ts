import {z} from "zod";

export const formularioSchema = z.object({
    nome: z.string().min(3, "O nome precisa ter pelo menos 3 letras"),
    telefone: z.string().min(10, "Informe um telefone válido"),
    pedidoOracao: z.string().optional(),
    interesses: z.array(z.string()).min(1, "Selecione pelo menos um interesse")
});

export type FormularioData = z.infer<typeof formularioSchema>;

