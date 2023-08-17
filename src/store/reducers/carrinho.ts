// Importando ferramentas necessárias da biblioteca '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Importando o tipo Game de '../../App'
import { Game } from '../../App'

// Definindo o estado inicial para o carrinho
type CarrinhoState = {
  itens: Game[]
}

// Definindo o estado inicial como um array vazio de itens (jogos)
const initialState: CarrinhoState = {
  itens: []
}

// Criando uma slice (parte do estado) para o carrinho usando createSlice
const carrinhoSlice = createSlice({
  name: 'carrinho', // Nome da slice
  initialState, // Estado inicial definido anteriormente
  reducers: {
    // Redutor para adicionar um jogo ao carrinho
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      // Se o jogo já estiver no carrinho, mostra um alerta
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        // Caso contrário, adiciona o jogo ao carrinho
        state.itens.push(jogo)
      }
    }
  }
})

// Exportando as ações geradas pela slice
export const { adicionar } = carrinhoSlice.actions

// Exportando o redutor da slice como padrão
export default carrinhoSlice.reducer
