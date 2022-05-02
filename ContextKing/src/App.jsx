import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { OneForm } from './Component/form-one'
import { TwoForm } from './Component/form_two'
import { Users } from './Component/users'
import {Home} from "./Component/home"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/registration/one" element={<OneForm/>}></Route>
        <Route path="/registration/two" element={<TwoForm/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
      </Routes>
    </div>
  )
}

export default App
