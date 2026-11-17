const objetivosEspecificos = [
  'Identificar os principais conceitos e tópicos financeiros para o público da plataforma.',
  'Desenvolver módulos educacionais com base em fontes confiáveis sobre educação financeira.',
  'Implementar quizzes de conhecimento financeiro para aplicar o que foi estudado.',
  'Disponibilizar atividades avaliativas para verificar a evolução do aprendizado.',
  'Permitir a consulta, a interação e o acompanhamento do progresso do usuário.',
  'Garantir a segurança e a proteção de dados conforme a LGPD.',
]

export default function Projeto() {
  return (
    <>
      <section className="cabecalho-pagina">
        <div className="container">
          <h1>O projeto</h1>
          <p>O problema que o Go Cash tenta resolver e o que ele se propõe a entregar.</p>
        </div>
      </section>

      <section className="secao">
        <div className="container texto-largo">
          <h2>Contexto</h2>
          <p>
            A BNCC já trata a educação financeira como tema transversal, e em julho de
            2026 o Senado aprovou o PL 2.979/2023, que coloca o assunto no currículo do
            Ensino Fundamental e Médio. O texto voltou para a Câmara antes da sanção.
          </p>
          <p>
            Mesmo assim, a maior parte das pessoas ainda chega à vida adulta sem saber
            montar um orçamento ou entender juros. Quando isso é aprendido cedo, vira
            hábito: planejar, controlar gastos e pensar antes de comprar.
          </p>

          <h2>Problema</h2>
          <blockquote>
            De que maneira uma plataforma web com conteúdo sobre educação e gestão
            financeira, atividades e recursos interativos para acompanhamento pode ajudar
            alunos a formar hábitos de consumo mais conscientes e a aprender conceitos
            financeiros?
          </blockquote>

          <h2>Justificativa</h2>
          <p>
            O aluno de hoje passa o dia recebendo estímulo digital, e só sentar para ouvir
            uma aula expositiva cansa rápido. Quando ele participa, responde e vê o
            resultado, fica mais ligado ao tema.
          </p>
          <p>
            Bacich e Moran (2018) apontam que a tecnologia permite registrar o processo de
            aprendizagem de cada aluno, mapear o progresso e mostrar as dificuldades. É
            exatamente o que o Go Cash faz com as tentativas, os Cashs e o painel “Minhas
            atividades”.
          </p>

          <h2>Objetivo geral</h2>
          <p>
            Desenvolver uma plataforma web de educação financeira que apoie estudantes no
            aprendizado de conceitos financeiros, planejamento e consumo consciente,
            ajudando na adoção de hábitos mais saudáveis e em decisões mais conscientes ao
            longo da vida.
          </p>

          <h2>Objetivos específicos</h2>
          <ul className="lista">
            {objetivosEspecificos.map((objetivo) => (
              <li key={objetivo}>{objetivo}</li>
            ))}
          </ul>

          <h2>Para quem é</h2>
          <p>
            Jovens a partir de 16 anos. O site funciona de forma aberta, para qualquer
            pessoa que queira estudar sozinha, e também pode ser usado em sala de aula
            como apoio às explicações do professor.
          </p>
        </div>
      </section>
    </>
  )
}
