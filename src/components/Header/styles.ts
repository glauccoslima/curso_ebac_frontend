import styled from 'styled-components'
import { cores } from '../../styles'

/* Estilizando o componente Header */
export const Header = styled.header`
  /* Definindo um gradiente linear para o fundo, utilizando as cores principais e secundárias */
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );

  /* Definindo margens e padding para o cabeçalho */
  margin: 80px 0;
  padding: 16px 24px;

  /* Definindo propriedades de flexbox para centralizar o conteúdo e alinhar itens */
  display: flex;
  border-radius: 6px;
  align-items: center;

  /* Estilizando a tag h1 dentro do cabeçalho */
  h1 {
    font-size: 18px;
    flex: 1;
  }

  /* Estilizando a div dentro do cabeçalho */
  div {
    display: flex;
    align-items: center;

    /* Estilizando a imagem dentro da div */
    img {
      width: 18px;
      margin-right: 8px;
    }
  }

  /* Adicionando estilos responsivos para telas com largura até 768px */
  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`
