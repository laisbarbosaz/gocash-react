import { Link } from 'react-router-dom'
import { EMAIL_SUPORTE, LINK_SISTEMA } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container rodape-grade">
        <div>
          <strong>Go Cash</strong>
          <p>
            Plataforma de Educação Financeira Aplicada. Projeto de Final de Curso de
            Sistemas de Informação, Universidade de Mogi das Cruzes, 2026.
          </p>
        </div>
        <div>
          <strong>Páginas</strong>
          <ul>
            <li><Link to="/projeto">O projeto</Link></li>
            <li><Link to="/funcionalidades">Funcionalidades</Link></li>
            <li><Link to="/tecnologias">Tecnologias</Link></li>
            <li><Link to="/lgpd">LGPD e segurança</Link></li>
          </ul>
        </div>
        <div>
          <strong>Contato</strong>
          <ul>
            <li><a href={`mailto:${EMAIL_SUPORTE}`}>{EMAIL_SUPORTE}</a></li>
            <li><a href={LINK_SISTEMA} target="_blank" rel="noreferrer">Sistema no ar</a></li>
          </ul>
        </div>
      </div>
      <div className="container rodape-final">
        Laís Barbosa Silva · {new Date().getFullYear()}
      </div>
    </footer>
  )
}
