// Importando o tipo Game do componente App
import { Game } from '../App'

// Importando o componente Produto para exibir cada jogo
import Produto from '../components/Produto'

// Importando o hook de consulta para buscar jogos
import { useGetJogosQuery } from '../services/api'

// Importando os estilos específicos para este componente
import * as S from './styles'

// Componente Produtos para listar todos os jogos
const Produtos = () => {
  // Utilizando o hook para buscar os jogos;
  // `jogos` contém a lista de jogos e `isLoading` indica se a consulta ainda está em progresso
  const { data: jogos, isLoading } = useGetJogosQuery()

  // Se os jogos ainda estão sendo carregados, exibe uma mensagem de carregamento
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {/* Mapeia a lista de jogos e renderiza cada jogo usando o componente Produto */}
        {jogos?.map(
          (
            game: Game // Define que 'game' é do tipo Game
          ) => (
            // Renderiza o componente Produto para cada jogo na lista
            <Produto key={game.id} game={game} />
          )
        )}
      </S.Produtos>
    </>
  )
}

// Exporta o componente Produtos para uso em outras partes da aplicação
export default Produtos
