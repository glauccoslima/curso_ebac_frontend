// Importando as dependências necessárias
import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import styles from './ListaVagas.module.css'

// Definindo o tipo de vaga
type VagaType = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

// Lista inicial de vagas
const vagas: VagaType[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '3',
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '4',
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '5',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '6',
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '7',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

// Componente principal para listar as vagas
const ListaVagas = () => {
  // Estado para armazenar o filtro atual
  const [filtro, setFiltro] = useState<string>('')

  // Filtrando as vagas de acordo com o termo de busca
  const vagasFiltradas = vagas.filter((vaga) => {
    const termoBusca = filtro.toLocaleLowerCase()
    return (
      // Verificando se o termo de busca está presente em qualquer parte da vaga
      vaga.titulo.toLocaleLowerCase().includes(termoBusca) ||
      vaga.localizacao.toLocaleLowerCase().includes(termoBusca) ||
      vaga.nivel.toLocaleLowerCase().includes(termoBusca) ||
      vaga.modalidade.toLocaleLowerCase().includes(termoBusca) ||
      vaga.requisitos.some((requisito) =>
        requisito.toLocaleLowerCase().includes(termoBusca)
      ) ||
      vaga.salarioMin.toString().includes(termoBusca) ||
      vaga.salarioMax.toString().includes(termoBusca)
    )
  })

  return (
    <div>
      {/* Renderizando o formulário para pesquisa */}
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />

      {/* Listando as vagas filtradas */}
      <ul className={styles.vagas}>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </ul>
    </div>
  )
}

// Exportando o componente
export default ListaVagas
