import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RegistrationContextProvider} from "./Context/form-context";
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <RegistrationContextProvider>
    <App />
    </RegistrationContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
