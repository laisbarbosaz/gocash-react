import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menu, LINK_SISTEMA } from '../data/site.js'

export default function Header() {
  // Controla se o menu está aberto no celular
  const [aberto, setAberto] = useState(false)

  return (
    <header className="topo">
      <div className="container topo-linha">
        <Link to="/" className="marca" onClick={() => setAberto(false)}>
          Go <span>Cash</span>
        </Link>

        <button
          className="botao-menu"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav id="menu-principal" className={aberto ? 'menu aberto' : 'menu'}>
          {menu.map((item) => (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              end={item.caminho === '/'}
              onClick={() => setAberto(false)}
            >
              {item.texto}
            </NavLink>
          ))}
          <a href={LINK_SISTEMA} target="_blank" rel="noreferrer" className="menu-acesso">
            Acessar o sistema
          </a>
        </nav>
      </div>
    </header>
  )
}
