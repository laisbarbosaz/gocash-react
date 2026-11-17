import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <section className="secao">
      <div className="container texto-largo">
        <h1>Página não encontrada</h1>
        <p>O endereço que você abriu não existe neste site.</p>
        <Link to="/">Voltar para o início</Link>
      </div>
    </section>
  )
}
