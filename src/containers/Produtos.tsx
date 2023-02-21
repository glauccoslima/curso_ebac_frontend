import { Game } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  jogos: Game[]
  adicionarAoCarrinho: (jogo: Game) => void
}

const Produtos = ({ jogos, adicionarAoCarrinho }: Props) => {
  return (
    <>
      <S.Produtos>
        {jogos.map((game) => (
          <Produto key={game.id} game={game} aoComprar={adicionarAoCarrinho} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
