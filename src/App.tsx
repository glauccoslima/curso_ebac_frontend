import React from 'react'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { store } from './store'

// Definição do tipo para um objeto de jogo
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
  return (
    // Provendo a store do Redux para os componentes descendentes
    <Provider store={store}>
      {/* Aplicando estilos globais */}
      <GlobalStyle />
      <div className="container">
        {/* Renderizando o cabeçalho da aplicação */}
        <Header />
        {/* Renderizando a lista de produtos */}
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
