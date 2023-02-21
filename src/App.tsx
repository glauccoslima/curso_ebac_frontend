import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  const [carrinho, setCarrinho] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => res.json())
      .then((res) => setGames(res))
  }, [])

  function adicionarAoCarrinho(jogo: Game) {
    if (carrinho.find((game) => game.id === jogo.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, jogo])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} />
        <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </>
  )
}

export default App
