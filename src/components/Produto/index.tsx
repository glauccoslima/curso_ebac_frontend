import { useDispatch } from 'react-redux'

import { Game } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'

// Definindo os tipos de propriedades para o componente Produto
type Props = {
  game: Game
}

// Função para formatar valores em formato de moeda BRL (Real)
export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ game }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        {/* Exibindo a categoria do jogo */}
        <S.Tag>{game.categoria}</S.Tag>

        {/* Exibindo a imagem do jogo */}
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>

      {/* Exibindo o título do jogo */}
      <S.Titulo>{game.titulo}</S.Titulo>

      {/* Listando as plataformas do jogo */}
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>

      <S.Prices>
        {/* Exibindo o preço antigo (se existir) */}
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}

        {/* Exibindo o preço atual */}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>

      {/* Botão para adicionar o jogo ao carrinho */}
      <S.BtnComprar onClick={() => dispatch(adicionar(game))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
