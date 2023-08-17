import styled from 'styled-components'

// Importando as cores definidas no projeto
import { cores } from '../../styles'

// Estilização geral do Produto
export const Produto = styled.div``

// Estilização do título do produto
export const Titulo = styled.h3``

// Estilização da capa (imagem) do produto
export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
  }
`

// Estilização para exibir os preços do produto
export const Prices = styled.div`
  margin: 16px 0;
  color: #fff;

  // Estilo para preço antigo (geralmente com desconto)
  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  // Estilo para o preço atual
  strong {
    font-size: 18px;
  }
`

// Estilização da tag que geralmente mostra a categoria ou promoção
export const Tag = styled.span`
  background-color: ${cores.corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`

// Estilização da lista de plataformas disponíveis para o produto
export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0;

  // Estilo de cada item da plataforma
  li {
    background-color: ${cores.corPrincipal};
    padding: 8px;
    font-size: 10px;
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: bold;
  }
`

// Estilização do botão "Comprar"
export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  // Efeito de hover para o botão
  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }
`
