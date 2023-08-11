import { FormEvent, useState } from 'react'
import styles from './FormVagas.module.css'

// Define as propriedades que o componente FormVagas espera receber
type Props = {
  aoPesquisar: (termo: string) => void // Função a ser chamada quando uma pesquisa é feita
}

const FormVagas = ({ aoPesquisar }: Props) => {
  // Estado para controlar o termo de pesquisa
  const [termo, setTermo] = useState<string>('')

  // Estado para controlar se o botão de pesquisa foi clicado
  const [isClicked, setIsClicked] = useState(false)

  // Função para lidar com o envio do formulário
  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Previne a ação padrão do formulário
    aoPesquisar(termo.toLocaleLowerCase()) // Chama a função de pesquisa com o termo em minúsculas
    setIsClicked(true) // Indica que o botão de pesquisa foi clicado

    // Retorna o estado de clique para falso após 2 segundos
    setTimeout(() => {
      setIsClicked(false)
    }, 2000)
  }

  // Função para lidar com a mudança no campo de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value // Pega o valor do campo de entrada
    setTermo(valor) // Atualiza o termo no estado

    // Se o valor estiver vazio, redefina o filtro
    if (valor.trim() === '') {
      aoPesquisar('')
    }
  }

  // Renderiza o formulário
  return (
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Informe o valor a ser pesquisado"
        onChange={handleInputChange}
        type="search"
      />
      <button
        className={`${styles.btnPesquisar} ${
          isClicked ? styles.btnPesquisarClicked : ''
        }`}
        type="submit"
      >
        Pesquisar
      </button>
    </form>
  )
}

// Exporta o componente FormVagas para ser usado em outros arquivos
export default FormVagas
