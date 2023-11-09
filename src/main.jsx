import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './container/Home/Home'
import GlobalStyles from './Styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>,
)
