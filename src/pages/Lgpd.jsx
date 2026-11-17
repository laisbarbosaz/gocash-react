import { EMAIL_SUPORTE } from '../data/site.js'

const dados = [
  ['Nome, sobrenome, usuário e e-mail', 'Criar a conta e enviar códigos e links', 'Execução do contrato (art. 7º, V)'],
  ['Senha (só o hash)', 'Autenticar o usuário', 'Execução do contrato (art. 7º, V)'],
  ['Tentativas, respostas e Cashs', 'Registrar o aprendizado', 'Legítimo interesse educacional (art. 7º, IX)'],
  ['Nome abreviado no ranking', 'Exibir o ranking', 'Consentimento (art. 7º, I)'],
  ['Logs do painel', 'Segurança e responsabilização da equipe', 'Obrigação legal (art. 7º, II)'],
]

const direitos = [
  ['Acesso aos dados', 'Meu perfil e o painel Minhas atividades.'],
  ['Correção', 'Meu perfil, alterando nome e e-mail.'],
  ['Eliminação', 'Meu perfil, opção Excluir conta. Apaga tudo na hora.'],
  ['Revogar o consentimento', 'Desmarcar “Quero aparecer no ranking”.'],
  ['Anonimização e portabilidade', `Pedido pelo e-mail ${EMAIL_SUPORTE}.`],
]

export default function Lgpd() {
  return (
    <>
      <section className="cabecalho-pagina">
        <div className="container">
          <h1>LGPD e segurança</h1>
          <p>Quais dados o Go Cash guarda, por quê, e como o usuário controla isso.</p>
        </div>
      </section>

      <section className="secao">
        <div className="container texto-largo">
          <h2>O que é coletado</h2>
          <p>
            Só o necessário para a conta funcionar. O Go Cash não pede CPF, endereço,
            telefone nem data de nascimento, e não coleta dados sensíveis. A idade mínima
            de 16 anos é confirmada por declaração no cadastro.
          </p>
        </div>
        <div className="container">
          <div className="tabela-rolagem">
            <table className="tabela">
              <thead>
                <tr>
                  <th>Dado</th>
                  <th>Para quê</th>
                  <th>Base legal</th>
                </tr>
              </thead>
              <tbody>
                {dados.map(([dado, finalidade, base]) => (
                  <tr key={dado}>
                    <td>{dado}</td>
                    <td>{finalidade}</td>
                    <td>{base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="container">
          <h2>Direitos do titular</h2>
          <p>A maioria é feita pelo próprio usuário, sem precisar pedir para a equipe.</p>
          <dl className="definicoes">
            {direitos.map(([direito, como]) => (
              <div key={direito}>
                <dt>{direito}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="secao">
        <div className="container texto-largo">
          <h2>Segurança</h2>
          <ul className="lista">
            <li>Senhas guardadas com hash (PBKDF2), nunca em texto.</li>
            <li>Verificação em duas etapas com código que expira em 5 minutos.</li>
            <li>HTTPS, cookies seguros e proteção CSRF do Django.</li>
            <li>Permissões diferentes para aluno, administrador e administrador principal.</li>
            <li>Senhas e chaves em variáveis de ambiente, fora do código no GitHub.</li>
            <li>Contas desativadas são excluídas automaticamente depois de 6 meses.</li>
          </ul>

          <h2>Adolescentes e ECA Digital</h2>
          <p>
            Como parte do público tem 16 ou 17 anos, o tratamento segue o melhor interesse
            do adolescente (art. 14 da LGPD) e o ECA Digital (Lei nº 15.211/2025). O site não
            tem publicidade, não faz perfilamento e não tem troca de mensagens entre
            usuários.
          </p>
        </div>
      </section>
    </>
  )
}
