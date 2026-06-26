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

6. Rode `npm run dev`.

Quando o Supabase está configurado, o sistema carrega os dados compartilhados do banco e sincroniza alterações automaticamente. Sem variáveis de ambiente, o sistema roda em modo local com backup no `localStorage`.

## Build

```bash
npm run build
```

## Publicação na Vercel

Recomendado para produção.

1. Envie o projeto para um repositório no GitHub.
2. Acesse `https://vercel.com`.
3. Clique em `Add New > Project`.
4. Importe o repositório `barbearia-pro`.
5. Em `Environment Variables`, cadastre:

```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

6. Clique em `Deploy`.

Na Vercel, o site roda sem `NEXT_PUBLIC_BASE_PATH`, então a URL fica limpa, por exemplo `https://seu-projeto.vercel.app`.

## Observação sobre GitHub Pages

O deploy por GitHub Pages foi removido. Use a Vercel para publicar o sistema em produção.
