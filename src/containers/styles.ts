// Importando o método styled do 'styled-components'
import styled from 'styled-components'

// Estilização para o componente Produtos que é uma lista não ordenada (ul)
export const Produtos = styled.ul`
  // Define uma grade (grid) para exibir os itens
  display: grid;

  // Define que a grade terá 4 colunas de tamanhos iguais
  grid-template-columns: 1fr 1fr 1fr 1fr;

  // Define um espaço entre os itens da grade
  gap: 24px;

  // Consulta de mídia para adaptar o layout quando a tela tem uma largura máxima de 1024px
  @media (max-width: 1024px) {
    // Em telas até 1024px de largura, usa 2 colunas
    grid-template-columns: 1fr 1fr;
  }

  // Consulta de mídia para adaptar o layout quando a tela tem uma largura máxima de 768px
  @media (max-width: 768px) {
    // Em telas até 768px de largura, usa 1 coluna
    grid-template-columns: 1fr;
  }
`
