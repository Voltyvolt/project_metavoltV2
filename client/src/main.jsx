import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { TransactionProvider } from './context/TransactionContext';

ReactDOM.render(
  <TransactionProvider>
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>

  </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)
