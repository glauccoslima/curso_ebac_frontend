// Importação das bibliotecas React e ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importação do componente principal App e da função reportWebVitals
import App from './App'
import reportWebVitals from './reportWebVitals'

// Criação da raiz da aplicação no elemento HTML com o id 'root'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Renderização do componente App dentro de <React.StrictMode> para ativar verificações e avisos adicionais durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Chamada da função reportWebVitals para medir a performance da aplicação.
// Para personalizar essa chamada, você pode passar uma função para logar os resultados
// ou enviá-los para um endpoint de análise.
// Mais informações em: https://bit.ly/CRA-vitals
reportWebVitals()
