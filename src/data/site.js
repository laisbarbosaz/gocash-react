// Dados usados em mais de uma página ficam aqui, num lugar só.
// Se o link ou o e-mail mudar, basta trocar neste arquivo.

export const LINK_SISTEMA = 'https://gocash-qv0v.onrender.com'
export const EMAIL_SUPORTE = 'gocashsuporte@gmail.com'
export const GITHUB_AUTORA = 'https://github.com/laisbarbosaz'

export const menu = [
  { caminho: '/', texto: 'Início' },
  { caminho: '/projeto', texto: 'O projeto' },
  { caminho: '/funcionalidades', texto: 'Funcionalidades' },
  { caminho: '/tecnologias', texto: 'Tecnologias' },
  { caminho: '/lgpd', texto: 'LGPD' },
  { caminho: '/sobre', texto: 'Sobre' },
]

// Trilha sugerida exibida na página inicial do sistema.
// Ajuste os nomes para ficarem iguais aos módulos cadastrados no Go Cash.
export const trilha = [
  { nome: 'Orçamento pessoal', resumo: 'Entender para onde o dinheiro vai e montar um orçamento do mês.' },
  { nome: 'Consumo consciente', resumo: 'Diferenciar necessidade de desejo antes de comprar.' },
  { nome: 'Poupança e metas', resumo: 'Guardar um pouco todo mês com um objetivo definido.' },
  { nome: 'Crédito e dívidas', resumo: 'Como funcionam juros, cartão e parcelamento.' },
  { nome: 'Economia Global', resumo: 'Por que o dólar, o euro e o bitcoin mudam de preço.' },
]
