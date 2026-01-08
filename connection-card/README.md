# Cartão de Conexão – Casa do Reino

Aplicação web desenvolvida para substituir formulários em papel, facilitando o primeiro contato de visitantes com a igreja de forma simples, segura e digital.

##  Contexto

Este projeto nasceu de uma necessidade real da igreja Casa do Reino:  
eliminar o uso de formulários em papel para coleta de informações de visitantes, 
tornando o processo mais rápido, organizado e sustentável.
A solução permite que visitantes preencham seus dados diretamente pelo celular, 
enviando as informações automaticamente por e-mail para a equipe responsável.

##  Funcionalidades

- Interface mobile-first
- Formulário de cartão de conexão
- Validação de dados com feedback ao usuário
- Envio automático de e-mails via SMTP
- Proteções contra spam (rate limit)
- Feedback visual de envio com animações

## Tecnologias Utilizadas

- **Next.js (App Router)** – Estrutura moderna com Server e Client Components
- **React** – Construção da interface
- **TypeScript** – Tipagem e segurança
- **Tailwind CSS** – Estilização rápida e consistente
- **React Hook Form + Zod** – Validação de formulários
- **Nodemailer** – Envio de e-mails
- **SMTP (Gmail)** – Infraestrutura de e-mail

## Arquitetura

- **Client Components**: interface e interações do usuário
- **Server Actions / API Routes**: validação e envio de e-mails
- **Validação centralizada** com Zod
- **Configurações sensíveis protegidas** via variáveis de ambiente
- **Rate limit em memória** para evitar abuso da API

## Segurança

- Nenhuma credencial sensível versionada no repositório
- Uso de variáveis de ambiente (.env)
- Senha de aplicativo SMTP (não senha da conta)
- Validação de payload no backend
- Rate limit para prevenção de spam

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/dgbarros/casa-do-reino.git
```
2. Instale as dependências: 
```bash
npm install
```
3. Configure o seu .env 
SMTP_HOST=
SMTP_PORT=
SMTP_USER=seu-email@gmail.com
SMTP_PASS=senha-de-app
SMTP_TO=destino@email.com

4. Rode o projeto: 
```bash
npm run dev
```
