import { useState } from 'react'
import {Routes,Route, Link} from "react-router-dom"
import './App.css'
import { Cities } from './Component/cities'
import { AddCountry } from './Component/country'
import { Edit } from './Component/edit'
import { Home } from './Component/home'
import {Navbar} from "./Component/navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-country" element={<AddCountry/>}/>
        <Route path="/add-city" element={<Cities/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      
    </div>
  )
}

export default App
