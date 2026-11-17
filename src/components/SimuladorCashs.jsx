import { useState } from 'react'

const TOTAL_PERGUNTAS = 10

// Regras do RF06 da monografia:
// - aproveitamento = acertos / total * 100, arredondado
// - 10 Cashs a cada 10% completos (75% vale 70 Cashs)
// - vale sempre a melhor das 3 tentativas
function calcularCashs(acertos) {
  const aproveitamento = Math.round((acertos / TOTAL_PERGUNTAS) * 100)
  return Math.floor(aproveitamento / 10) * 10
}

export default function SimuladorCashs() {
  const [tentativas, setTentativas] = useState([7, 5, 0])

  function mudarTentativa(indice, valor) {
    const numero = Math.max(0, Math.min(TOTAL_PERGUNTAS, Number(valor) || 0))
    const novas = [...tentativas]
    novas[indice] = numero
    setTentativas(novas)
  }

  const cashsPorTentativa = tentativas.map(calcularCashs)
  const melhor = Math.max(...cashsPorTentativa)

  return (
    <div className="simulador">
      <p>
        Uma atividade com {TOTAL_PERGUNTAS} perguntas. Digite quantas o aluno acertou em cada
        tentativa e veja quantos Cashs a atividade vale no fim.
      </p>

      <div className="simulador-campos">
        {tentativas.map((acertos, i) => (
          <label key={i}>
            {i + 1}ª tentativa
            <input
              type="number"
              min="0"
              max={TOTAL_PERGUNTAS}
              value={acertos}
              onChange={(e) => mudarTentativa(i, e.target.value)}
            />
            <span>{cashsPorTentativa[i]} Cashs</span>
          </label>
        ))}
      </div>

      <p className="simulador-resultado">
        A atividade vale <strong>{melhor} Cashs</strong>, porque conta a melhor tentativa.
      </p>
    </div>
  )
}
