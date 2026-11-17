import { useEffect, useState } from 'react'

const URL_API = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'

const moedas = [
  { chave: 'USDBRL', nome: 'Dólar' },
  { chave: 'EURBRL', nome: 'Euro' },
  { chave: 'BTCBRL', nome: 'Bitcoin' },
]

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

// Mesma integração do sistema em Django, só que feita direto no navegador.
// Se a API não responder em 5 segundos, a página segue normalmente.
export default function Cotacoes() {
  const [dados, setDados] = useState(null)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const controle = new AbortController()
    const limite = setTimeout(() => controle.abort(), 5000)

    fetch(URL_API, { signal: controle.signal })
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Resposta inválida')
        return resposta.json()
      })
      .then((json) => setDados(json))
      .catch(() => setErro(true))
      .finally(() => clearTimeout(limite))

    return () => {
      clearTimeout(limite)
      controle.abort()
    }
  }, [])

  if (erro) {
    return <p className="aviso">Não foi possível carregar as cotações agora. Tente de novo mais tarde.</p>
  }

  if (!dados) {
    return <p className="aviso">Carregando cotações...</p>
  }

  return (
    <div className="tabela-rolagem">
      <table className="tabela">
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Compra</th>
            <th>Variação no dia</th>
          </tr>
        </thead>
        <tbody>
          {moedas.map((moeda) => {
            const item = dados[moeda.chave]
            if (!item) return null
            const variacao = Number(item.pctChange)
            return (
              <tr key={moeda.chave}>
                <td>{moeda.nome}</td>
                <td>{real.format(Number(item.bid))}</td>
                <td className={variacao >= 0 ? 'positivo' : 'negativo'}>
                  {variacao >= 0 ? '+' : ''}{variacao.toFixed(2).replace('.', ',')}%
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="nota">Fonte: AwesomeAPI. Atualizado em {dados.USDBRL?.create_date}.</p>
    </div>
  )
}
