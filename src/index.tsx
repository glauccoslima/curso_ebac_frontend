import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Inicializando a raiz do DOM com a nova API createRoot (React Concurrent Mode)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Renderizando o App dentro do modo estrito para destacar potenciais problemas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Ferramenta para medir a performance da aplicação.
// Pode-se passar uma função para logar os resultados,
// ou enviar para um endpoint de análise.
// Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals()
