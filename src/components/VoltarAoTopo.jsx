import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ao trocar de página, o React não recarrega o site, então a rolagem
// ficaria onde estava. Este componente volta a tela para o topo.
export default function VoltarAoTopo() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
