import nodemailer from "nodemailer";

type SendMailData = {
  nome: string;
  telefone: string;
  pedidoOracao?: string;
  interesses?: string[];
};
export async function sendMail({
  nome,
  telefone,
  pedidoOracao,
  interesses,
}: SendMailData) {

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Cartão de conexão" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    cc: process.env.SMTP_CC,
    subject: "Novo cartão de conexão",
    html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; padding:24px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
        
        <h2 style="color:#111827; margin-bottom:16px;">
          Novo Cartão de Conexão
        </h2>

        <p style="margin:8px 0;"><strong>Nome:</strong> ${nome}</p>
        <p style="margin:8px 0;"><strong>Telefone:</strong> ${telefone}</p>
        <p style="margin:8px 0;">
          <strong>Pedido de oração:</strong><br />
          ${pedidoOracao || "Não informado"}
        </p>
        <p style="margin:8px 0;">
          <strong>Interesses:</strong> ${interesses}
        </p>

        <hr style="margin:24px 0; border:none; border-top:1px solid #e5e7eb;" />

        <p style="font-size:12px; color:#6b7280;">
          Enviado automaticamente pelo Cartão de Conexão
        </p>
      </div>
    </div>
  `,
  });
}
