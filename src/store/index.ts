// Importando a função para configurar a store do Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'

// Importando o redutor do carrinho
import carrinhoReducer from './reducers/carrinho'

// Importando a API configurada anteriormente
import api from '../services/api'

// Configurando e criando a store do Redux
export const store = configureStore({
  reducer: {
    // Associando o redutor do carrinho à sua respectiva slice do estado
    carrinho: carrinhoReducer,
    // Associando o redutor da API à sua respectiva slice do estado
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    // Concatenando o middleware padrão com o middleware da API
    getDefaultMiddleware().concat(api.middleware)
})

// Definindo o tipo do RootReducer com base no estado da store
export type RootReducer = ReturnType<typeof store.getState>
