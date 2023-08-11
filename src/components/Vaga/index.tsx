// Importa os estilos do arquivo Vaga.module.css
import styles from './Vaga.module.css'

// Define o tipo de propriedades que o componente Vaga espera receber
type Props = {
  titulo: string // Título da vaga
  localizacao: string // Localização da vaga
  nivel: string // Nível de senioridade exigido
  modalidade: string // Tipo de contratação
  salarioMin: number // Salário mínimo oferecido
  salarioMax: number // Salário máximo oferecido
  requisitos: string[] // Lista de requisitos necessários
}

// Componente funcional Vaga que renderiza detalhes de uma vaga de emprego
const Vaga = (props: Props) => (
  <li className={styles.vaga}>
    {/* Título da vaga */}
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
    <ul>
      {/* Localização da vaga */}
      <li>Localizacao: {props.localizacao}</li>
      {/* Nível de senioridade */}
      <li>Senioridade: {props.nivel}</li>
      {/* Modalidade de contratação */}
      <li>Tipo de contratacao: {props.modalidade}</li>
      {/* Faixa salarial */}
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      {/* Lista de requisitos */}
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    {/* Link para mais detalhes e candidatura */}
    <a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a>
  </li>
)

// Exporta o componente Vaga, permitindo que ele seja utilizado em outros arquivos
export default Vaga
