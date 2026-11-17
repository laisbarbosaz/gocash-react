import { Link } from 'react-router-dom'
import Cotacoes from '../components/Cotacoes.jsx'
import { LINK_SISTEMA, trilha } from '../data/site.js'

export default function Inicio() {
  return (
    <>
      <section className="abertura">
        <div className="container">
          <p className="sobretitulo">Projeto de Final de Curso · Sistemas de Informação · UMC</p>
          <h1>Go Cash</h1>
          <p className="abertura-texto">
            Uma plataforma web para jovens aprenderem a lidar com dinheiro na prática:
            módulos curtos, atividades com nota e uma moeda própria, o Cash, que mostra
            a evolução de cada aluno.
          </p>
          <div className="acoes">
            <a className="botao" href={LINK_SISTEMA} target="_blank" rel="noreferrer">
              Acessar o sistema
            </a>
            <Link className="botao botao-secundario" to="/projeto">
              Conhecer o projeto
            </Link>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <h2>Por que existe</h2>
            <p>
              Em 2025, a pesquisa Observatório Febraban mostrou que 55% dos brasileiros
              dizem entender pouco ou nada de educação financeira. Quem não aprende isso
              cedo tende a se organizar mal e a se endividar mais na vida adulta.
            </p>
            <p>
              O Go Cash leva esse conteúdo para um formato que o aluno já usa todo dia:
              o site. Ele lê, responde, vê o próprio desempenho e sabe onde precisa
              estudar mais.
            </p>
            <Link to="/projeto">Ler o problema e os objetivos →</Link>
          </div>
          <div className="numeros">
            <div>
              <strong>55%</strong>
              <span>dos brasileiros entendem pouco ou nada de educação financeira (Febraban, 2025)</span>
            </div>
            <div>
              <strong>3</strong>
              <span>tentativas por atividade, valendo sempre a melhor</span>
            </div>
            <div>
              <strong>16+</strong>
              <span>idade mínima para criar conta, seguindo a LGPD e o ECA Digital</span>
            </div>
          </div>
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="container">
          <h2>Como o aluno usa</h2>
          <ol className="passos">
            <li>
              <strong>Estuda o módulo.</strong> Cada tema tem conteúdos curtos, escritos a
              partir de fontes confiáveis.
            </li>
            <li>
              <strong>Responde a atividade.</strong> Um quiz de múltipla escolha, com até 3
              tentativas.
            </li>
            <li>
              <strong>Ganha Cashs.</strong> 10 Cashs a cada 10% de acerto, no máximo 100 por
              atividade.
            </li>
            <li>
              <strong>Acompanha o progresso.</strong> O painel “Minhas atividades” mostra o
              saldo e as perguntas em que mais errou.
            </li>
          </ol>
          <Link to="/funcionalidades">Ver todas as funcionalidades →</Link>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <h2>Trilha sugerida</h2>
          <p>Para quem não sabe por onde começar, do orçamento à economia global.</p>
          <ol className="trilha">
            {trilha.map((modulo) => (
              <li key={modulo.nome}>
                <strong>{modulo.nome}</strong>
                <span>{modulo.resumo}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="container">
          <h2>Cotações de hoje</h2>
          <p>
            No sistema, estes valores abrem o módulo Economia Global, que explica por que
            eles mudam e como isso chega ao preço das coisas.
          </p>
          <Cotacoes />
        </div>
      </section>
    </>
  )
}
