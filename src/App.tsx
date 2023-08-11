// Importação de componentes e estilos globais
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import './global.css'

// Componente App principal da aplicação
function App() {
  return (
    <>
      {/* Renderização do componente Header, responsável pelo cabeçalho do site */}
      <Header />
      {/* Renderização do componente Hero, responsável pela seção herói (banner principal) */}
      <Hero />
      {/* Div container para centralizar e estilizar o componente ListaVagas */}
      <div className="container">
        {/* Renderização do componente ListaVagas, responsável por exibir a lista de vagas de emprego */}
        <ListaVagas />
      </div>
    </>
  )
}

// Exportação do componente App para ser utilizado em outros lugares da aplicação
export default App
