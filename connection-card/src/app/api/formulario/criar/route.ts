import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mailer";
import { formularioSchema } from "@/src/lib/validators";
import { success } from "zod";
import { ZodError } from "zod";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = formularioSchema.parse(body);

    await sendMail(data);

    return NextResponse.json(
      { message: "Cartão enviado com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError){
        return NextResponse.json(
            {
                error: "Dados inválidos",
                issues: error.format(),
            },
            {status: 422}
        );
    }

    console.error("Erro ao enviar formulário:", error);

    return NextResponse.json(
        {error: "Erro interno ao enviar formulário"},
        {status: 500}
    )
  }
}
