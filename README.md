# Barbearia Pro

Sistema web completo para gerenciamento de barbearia com dashboard financeiro, clientes, serviços, produtos, agenda, relatórios, PWA e integração com Supabase.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Recharts
- jsPDF

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Banco de dados Supabase

1. Crie um projeto no Supabase.
2. Abra o SQL Editor.
3. Execute o arquivo `supabase/schema.sql`.
4. Copie `.env.example` para `.env.local`.
5. Preencha:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

6. Crie um usuário em Authentication com e-mail e senha.
7. Rode `npm run dev` e entre com esse usuário.

Quando o Supabase está configurado, o sistema usa `signInWithPassword`, carrega os dados das tabelas do usuário e sincroniza alterações automaticamente. Sem variáveis de ambiente, o sistema roda em modo local com backup no `localStorage`.

## Build

```bash
npm run build
```

## Publicação

O projeto está pronto para GitHub público. Não publique `.env` nem `.env.local`; use variáveis de ambiente no provedor de deploy.
