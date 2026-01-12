import { FormularioData } from "../lib/validators";

export async function enviarFormulario(data: FormularioData) {
    const res = await fetch("/api/formulario/criar", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    if(!res.ok){
        throw new Error("Erro ao enviar fomulário");
    }

    return res.json();
}