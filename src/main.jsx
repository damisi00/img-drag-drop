import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser, faLock, faSearch } from '@fortawesome/free-solid-svg-icons';
import App from './App.jsx'
import './index.css'


library.add(fas, faUser, faLock, faSearch );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
