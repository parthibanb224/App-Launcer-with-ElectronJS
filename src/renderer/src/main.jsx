import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import { HashRouter } from 'react-router-dom'
import DataContextProvider from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </HashRouter>,
)
