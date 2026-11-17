const stack = [
  ['Python e Django', 'Back-end, regras de negócio e páginas, no padrão MVT (Model-View-Template).'],
  ['PostgreSQL', 'Banco de dados relacional, hospedado no Render.'],
  ['HTML5, CSS3, JavaScript e Bootstrap', 'Estrutura, estilo e responsividade das telas.'],
  ['Chart.js', 'Gráficos dos painéis, desenhados no navegador com os dados enviados pelo Django.'],
  ['Render', 'Hospedagem, com HTTPS e certificado renovado automaticamente.'],
  ['Gunicorn e WhiteNoise', 'Gunicorn atende as requisições; WhiteNoise entrega CSS, JS e imagens.'],
  ['GitHub', 'Controle de versão. Cada push na branch main gera um novo deploy.'],
]

const integracoes = [
  ['AwesomeAPI', 'Cotações do dólar, euro e bitcoin. O resultado fica em cache por 2 minutos e, se a API demorar mais de 5 segundos, a página carrega sem ela.'],
  ['Brevo (SMTP com TLS)', 'Envio do código de verificação do login e do link para redefinir a senha.'],
]

export default function Tecnologias() {
  return (
    <>
      <section className="cabecalho-pagina">
        <div className="container">
          <h1>Tecnologias</h1>
          <p>Como o Go Cash foi construído e onde ele roda.</p>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <h2>Ferramentas usadas</h2>
          <dl className="definicoes">
            {stack.map(([nome, descricao]) => (
              <div key={nome}>
                <dt>{nome}</dt>
                <dd>{descricao}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="container">
          <h2>Arquitetura</h2>
          <p>
            O navegador fala com o Render por HTTPS. Lá, o Gunicorn repassa a requisição
            para o Django, que consulta o PostgreSQL e os serviços externos quando
            precisa.
          </p>
          <figure className="figura">
            <img src="/arquitetura.png" alt="Diagrama de arquitetura do Go Cash: navegador, Render, aplicação Django, PostgreSQL e serviços externos" />
            <figcaption>Diagrama de arquitetura. Fonte: a autora.</figcaption>
          </figure>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <h2>Padrão MVT</h2>
          <div className="tres-colunas">
            <div>
              <h3>Model</h3>
              <p>Define as tabelas, valida e salva os dados. Ex.: Modulo, Atividade, Tentativa.</p>
            </div>
            <div>
              <h3>View</h3>
              <p>Recebe a requisição, aplica as regras (como o cálculo dos Cashs) e devolve a resposta.</p>
            </div>
            <div>
              <h3>Template</h3>
              <p>Monta o HTML que o aluno vê no navegador.</p>
            </div>
          </div>

          <h2>Integrações externas</h2>
          <dl className="definicoes">
            {integracoes.map(([nome, descricao]) => (
              <div key={nome}>
                <dt>{nome}</dt>
                <dd>{descricao}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="container">
          <h2>Diagrama de classes</h2>
          <figure className="figura">
            <img src="/diagrama-classes.png" alt="Diagrama de classes do Go Cash com User, PerfilUsuario, Modulo, Atividade, Pergunta, Alternativa, Tentativa e Resposta" />
            <figcaption>Diagrama de classes. Fonte: a autora.</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
