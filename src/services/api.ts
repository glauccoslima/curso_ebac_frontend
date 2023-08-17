// Importando as funções necessárias da biblioteca '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Importando o tipo Game de '../App'
import { Game } from '../App'

// Criando uma instância da API usando o método createApi
const api = createApi({
  // Define a base da consulta com o endereço base
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000' // URL base do servidor onde os dados serão buscados
  }),

  // Definindo os endpoints para a API
  endpoints: (builder) => ({
    // Endpoint para buscar jogos
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos' // Sub-path para buscar produtos (jogos)
    })
  })
})

// Exportando os hooks gerados pela API
export const { useGetJogosQuery } = api

// Exportando a instância da API como padrão
export default api
