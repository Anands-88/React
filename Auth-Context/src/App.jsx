import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './Components/Navbar/login_out'
import { Display } from './Components/Body/display'

function App() {

  return (
    <div className="App">
      <Button/>
      <Display/>
    </div>
    
  )
}

export default App
