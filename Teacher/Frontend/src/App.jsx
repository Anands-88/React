import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Component/signup'
import { Login } from './Component/login'
import { Home } from './Component/home'
import {SingleInfo} from "./Component/Single"
import { Edit } from './Component/edit'
import { Navbar } from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/teacher/:id" element={<SingleInfo/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>

    </Routes>
    </div>
  )
}

export default App
