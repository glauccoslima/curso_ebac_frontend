// Importa os estilos específicos do componente Cabecalho
import styles from './Cabecalho.module.css'

// Define o componente Cabecalho como uma função arrow
// Retorna o elemento de cabeçalho que usa a classe 'cabecalho' definida nos estilos importados
const Cabecalho = () => (
  <header className={styles.cabecalho}>
    {/* Define o título do cabeçalho como "EBAC Jobs" */}
    <h1>EBAC Jobs</h1>
  </header>
)

// Exporta o componente Cabecalho para ser usado em outros arquivos
export default Cabecalho
