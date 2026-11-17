import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import VoltarAoTopo from './components/VoltarAoTopo.jsx'
import Inicio from './pages/Inicio.jsx'
import Projeto from './pages/Projeto.jsx'
import Funcionalidades from './pages/Funcionalidades.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Lgpd from './pages/Lgpd.jsx'
import Sobre from './pages/Sobre.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// Cada <Route> liga um endereço (path) a um componente de página.
// Header e Footer ficam fora das rotas porque aparecem em todas as páginas.
export default function App() {
  return (
    <>
      <VoltarAoTopo />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/lgpd" element={<Lgpd />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
