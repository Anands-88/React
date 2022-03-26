import { useState } from 'react'

import { Routes,Route } from "react-router-dom"
import './App.css'
import { Hello } from "./components/hello"
import { About } from "./components/about"
import { Navbar } from "./components/navbar"
import {Product} from "./components/product"
import { User } from './components/user'
import {UserDetails} from "./components/usersdetails"
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/about" element={<About/>}/> //  path is page and element is file
         <Route path="/users" element={<User/>}/>
        <Route path="/users/:userid" element={<UserDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
