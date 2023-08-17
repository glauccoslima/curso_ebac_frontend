// Importando os hooks e funções necessárias
import { useSelector } from 'react-redux'

// Importando os estilos do Header
import * as S from './styles'

// Importando assets
import cesta from '../../assets/cesta.png'

// Importando funções de utilidade
import { paraReal } from '../Produto'

// Importando tipos
import { RootReducer } from '../../store'

// Componente Header
const Header = () => {
  // Usando o hook useSelector para buscar os itens do carrinho do estado global
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  // Calculando o valor total dos itens no carrinho
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  // Renderizando o componente
  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        {/* Exibindo imagem da cesta */}
        <img src={cesta} />
        <span>
          {/* Exibindo o número de itens e o valor total formatado em reais */}
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

// Exportando o componente Header
export default Header
