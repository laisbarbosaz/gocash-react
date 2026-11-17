import SimuladorCashs from '../components/SimuladorCashs.jsx'

const requisitos = [
  ['RF01', 'Cadastrar usuário na plataforma'],
  ['RF02', 'Autenticar usuário com verificação em duas etapas'],
  ['RF03', 'Gerenciar perfis de acesso'],
  ['RF04', 'Consultar conteúdo dos módulos educativos'],
  ['RF05', 'Responder atividade (quiz) do módulo'],
  ['RF06', 'Calcular os Cashs do aluno'],
  ['RF07', 'Exibir ranking dos alunos com mais Cashs'],
  ['RF08', 'Exibir o painel “Minhas atividades”'],
  ['RF09', 'Consultar cotação do dólar, euro e bitcoin'],
  ['RF10', 'Registrar aceite dos Termos de Uso e Política de Privacidade'],
  ['RF11', 'Recuperar senha'],
  ['RF12', 'Gerenciar o perfil de usuário'],
  ['RF13', 'Excluir contas desativadas após 6 meses'],
  ['RF14', 'Exibir painéis administrativos'],
  ['RF15', 'Consultar logs'],
]

export default function Funcionalidades() {
  return (
    <>
      <section className="cabecalho-pagina">
        <div className="container">
          <h1>Funcionalidades</h1>
          <p>O que o aluno e o administrador conseguem fazer no Go Cash.</p>
        </div>
      </section>

      <section className="secao">
        <div className="container texto-largo">
          <h2>Módulos de aprendizagem</h2>
          <p>
            Os conteúdos são organizados em módulos, cadastrados pelos administradores no
            painel. Qualquer pessoa pode ler, mesmo sem conta. Para responder às
            atividades e somar Cashs, é preciso entrar.
          </p>

          <h2>Atividades</h2>
          <p>
            Cada módulo tem uma atividade de múltipla escolha. O aluno precisa responder
            todas as perguntas antes de enviar e tem 3 tentativas. O gabarito só aparece
            depois que as três foram usadas, para ninguém decorar a resposta na primeira.
          </p>

          <h2>Cashs</h2>
          <p>
            É a moeda de gamificação da plataforma. Cada 10% de acerto vale 10 Cashs,
            contando só dezenas completas: 75% vale 70 Cashs. Uma tentativa pior nunca
            tira pontos, porque vale sempre a melhor.
          </p>
          <SimuladorCashs />

          <h2>Ranking</h2>
          <p>
            A página inicial do sistema mostra os 10 alunos com mais Cashs. Só entra quem
            marcar “Quero aparecer no ranking” no perfil, e o nome aparece abreviado
            (por exemplo, “Mariana S.”), nunca o e-mail.
          </p>

          <h2>Minhas atividades</h2>
          <p>
            Painel do aluno com o saldo de Cashs, as atividades concluídas e em andamento,
            as tentativas usadas e as 3 perguntas em que ele mais errou, com link para
            rever o módulo.
          </p>

          <h2>Painel administrativo</h2>
          <p>
            O administrador cadastra módulos, atividades e perguntas, acompanha quantos
            alunos concluíram cada módulo e consulta os logs das ações feitas no painel.
            Existe um administrador principal, o único que pode mudar o perfil das contas.
          </p>

          <h2>Login com verificação em duas etapas</h2>
          <p>
            Depois de usuário e senha, o sistema envia um código de 6 dígitos por e-mail,
            que vale por 5 minutos. O administrador pode desligar essa etapa nas
            configurações do site.
          </p>
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="container">
          <h2>Requisitos funcionais</h2>
          <p>Lista completa, como está na monografia.</p>
          <div className="tabela-rolagem">
            <table className="tabela">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Requisito</th>
                </tr>
              </thead>
              <tbody>
                {requisitos.map(([codigo, nome]) => (
                  <tr key={codigo}>
                    <td>{codigo}</td>
                    <td>{nome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
