import { EMAIL_SUPORTE, GITHUB_AUTORA, LINK_SISTEMA } from '../data/site.js'

export default function Sobre() {
  return (
    <>
      <section className="cabecalho-pagina">
        <div className="container">
          <h1>Sobre</h1>
          <p>Quem fez o Go Cash e como entrar em contato.</p>
        </div>
      </section>

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <h2>Autora</h2>
            <p>
              <strong>Laís Barbosa Silva</strong>, estudante de Bacharelado em Sistemas de
              Informação na Universidade de Mogi das Cruzes, com conclusão prevista para
              dezembro de 2026.
            </p>
            <p>
              <a href={GITHUB_AUTORA} target="_blank" rel="noreferrer">github.com/laisbarbosaz</a>
            </p>

            <h2>Orientação</h2>
            <dl className="definicoes">
              <div>
                <dt>Orientador</dt>
                <dd>Prof. Bruno Messias Aguiar</dd>
              </div>
              <div>
                <dt>Coorientador</dt>
                <dd>Prof. Alessandro Aparecido da Silva Horas</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2>Contato</h2>
            <p>
              Dúvidas, sugestões ou pedidos sobre seus dados podem ser enviados para o
              suporte:
            </p>
            <p>
              <a href={`mailto:${EMAIL_SUPORTE}`}>{EMAIL_SUPORTE}</a>
            </p>

            <h2>Sistema</h2>
            <p>
              A versão completa, com cadastro, módulos e atividades, está no ar em{' '}
              <a href={LINK_SISTEMA} target="_blank" rel="noreferrer">gocash-qv0v.onrender.com</a>.
              No plano gratuito do Render, o primeiro acesso pode levar alguns segundos.
            </p>

            <h2>Este site</h2>
            <p>
              Esta página de apresentação foi feita em React com Vite, com apoio de
              inteligência artificial, como atividade da disciplina de Programação para
              Internet.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
