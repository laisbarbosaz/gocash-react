# Go Cash: site de apresentação (React + Vite)

Site de apresentação do meu Projeto de Final de Curso, o **Go Cash**, uma plataforma web de educação financeira para jovens.
Feito em React com Vite para a atividade de Programação para Internet (Prof. Bruno Messias Aguiar), com apoio de IA.

O sistema completo (Django + PostgreSQL) está em https://gocash-qv0v.onrender.com

## Páginas

| Rota | Página | O que tem |
|---|---|---|
| `/` | Início | Apresentação, números, como o aluno usa, trilha sugerida, cotações ao vivo |
| `/projeto` | O projeto | Contexto, problema, justificativa e objetivos |
| `/funcionalidades` | Funcionalidades | Módulos, atividades, Cashs (com simulador), ranking e requisitos funcionais |
| `/tecnologias` | Tecnologias | Stack, arquitetura, padrão MVT, integrações e diagrama de classes |
| `/lgpd` | LGPD | Dados tratados, bases legais, direitos do titular e segurança |
| `/sobre` | Sobre | Autora, orientação e contato |

## Como rodar no computador

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Estrutura

```
src/
  main.jsx            ponto de entrada; liga o React ao index.html e ativa as rotas
  App.jsx             define qual página abre em cada endereço
  index.css           todo o estilo do site
  data/site.js        links, e-mail, menu e trilha (dados usados em várias páginas)
  components/
    Header.jsx        topo com menu (abre e fecha no celular com useState)
    Footer.jsx        rodapé
    Cotacoes.jsx      busca dólar, euro e bitcoin na AwesomeAPI (useEffect + fetch)
    SimuladorCashs.jsx  calcula os Cashs de 3 tentativas, com as regras do RF06
    VoltarAoTopo.jsx  volta a rolagem para o topo ao trocar de página
  pages/              uma página por arquivo
public/               imagens dos diagramas e favicon
vercel.json           faz a Vercel abrir o index.html em qualquer rota (necessário para o React Router)
```

## Conceitos de React usados

- **Componentes**: cada parte do site é uma função que retorna JSX (`Header`, `Footer`, cada página).
- **Props e listas com `map`**: o menu, a trilha e as tabelas são montados a partir de arrays.
- **`useState`**: menu do celular e campos do simulador de Cashs.
- **`useEffect`**: busca das cotações quando a página abre, com limite de 5 segundos.
- **React Router**: navegação entre páginas sem recarregar o site (`Routes`, `Route`, `NavLink`).

## Uso de IA no desenvolvimento

Ferramenta usada: Claude (Anthropic).

**Prompt inicial** (com a monografia do Go Cash e os slides da disciplina anexados):

> Fazer um site com React Vite com IA. Tema: página inicial do seu PFC/TCC, moderna e bem estruturada, no mínimo 5 páginas. Entrega: o projeto React funcionando (GitHub e Vercel).

**O que a IA fez**: leu a monografia, propôs as 6 páginas, escreveu os componentes e o CSS, e testou o build e as telas no computador e no celular.

**O que revisei e ajustei**: <!-- preencher: o que você conferiu, mudou ou corrigiu depois -->

- Conferi os textos com a monografia (números, requisitos, regras dos Cashs e LGPD).
- Ajuste feito durante o teste: a coluna de texto das páginas internas estava centralizada e desalinhada do título; o CSS foi corrigido para alinhar à esquerda.
- ...

## Deploy

1. Criar um repositório no GitHub e enviar o projeto (`git init`, `git add .`, `git commit`, `git push`).
2. Na Vercel, **Add New → Project**, importar o repositório. A Vercel detecta o Vite sozinha (build `npm run build`, saída `dist`).
3. Clicar em **Deploy**. Cada novo push na branch `main` publica de novo.
