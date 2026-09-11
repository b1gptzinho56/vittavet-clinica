# VittaVet Clínica Veterinária

Site institucional fictício criado como case de portfólio para clínicas veterinárias, pet shops e prestadores de serviços do setor pet.

> **Importante:** VittaVet, endereço, telefones, profissionais, avaliações, números, horários e demais dados comerciais deste projeto são fictícios. As imagens externas são usadas apenas como composição demonstrativa e devem ser substituídas por materiais licenciados/fornecidos pelo cliente em um projeto real.

## Stack

- React 19
- Vite
- CSS responsivo sem framework
- Lucide React para ícones
- Google Maps via iframe
- WhatsApp via link `wa.me`

## Recursos incluídos

- Header sticky e menu mobile
- Hero com CTAs e prova social fictícia
- Cards de serviços
- Área de urgência com orientação segura para procurar atendimento profissional
- História da clínica e indicadores fictícios
- Equipe demonstrativa com aviso claro de conteúdo fictício
- Galeria responsiva da estrutura com lightbox
- Formulário de agendamento com validação e estados de loading/sucesso
- Geração de mensagem para WhatsApp
- Avaliações fictícias
- FAQ com accordion animado
- Localização, contatos, horários e mapa
- Botão flutuante de WhatsApp
- Skeleton/fallback para imagens externas
- Animações leves com suporte a `prefers-reduced-motion`
- Foco visível e labels de formulário
- Meta tags, Open Graph, favicon e Schema.org `VeterinaryCare`
- Breakpoints preparados para 360px, 390px, 430px, tablet e desktop

## Como executar

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

A pasta final para deploy será `dist/`.

## Deploy

O projeto funciona bem em Vercel, Netlify, Cloudflare Pages e hospedagens estáticas compatíveis com Vite.

Configuração típica:

- Build command: `npm run build`
- Publish/output directory: `dist`

## Onde editar

- `src/data/content.js`: contatos, serviços, equipe, estrutura, avaliações e FAQ.
- `src/App.jsx`: seções institucionais e estrutura geral da página.
- `src/components/Booking.jsx`: fluxo do formulário e mensagem de WhatsApp.
- `src/components/Header.jsx`: navegação desktop/mobile.
- `src/components/UI.jsx`: componentes reutilizáveis de imagem, títulos e animações.
- `src/styles.css`: identidade visual, responsividade e estados de interação.
- `index.html`: title, descrição, Open Graph e favicon.

## Transformando em site de um cliente real

1. Troque nome, endereço, telefones e horários em `src/data/content.js`.
2. Substitua todas as imagens demonstrativas por fotos do estabelecimento ou imagens devidamente licenciadas.
3. Troque os perfis fictícios pelos profissionais reais e use os números de CRMV corretos quando aplicável.
4. Revise todo conteúdo médico/operacional com a clínica.
5. Conecte o formulário a um backend, CRM, agenda ou serviço de formulários se quiser persistência real.
6. Configure domínio, analytics e Search Console.
7. Troque o mapa para o endereço oficial e revise o perfil Google Business.

## Componentes reaproveitáveis em outros clientes

A maior parte do projeto é reaproveitável sem deixar aparência de template: Header, Hero, cards de serviços, seção de urgência, cards de equipe, galeria/lightbox, formulário, avaliações, FAQ, localização e footer. A identidade pode ser alterada principalmente pelas variáveis de CSS em `:root`, tipografia, imagens e conteúdo.

## Observação sobre imagens externas

O site possui `SmartImage`, que exibe skeleton durante o carregamento e um fallback elegante se uma imagem externa falhar. Para produção, prefira hospedar as imagens no próprio projeto/CDN do cliente e otimizar WebP/AVIF.
