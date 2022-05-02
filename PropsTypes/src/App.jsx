import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { InputBox } from './Components/inputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <InputBox length={8} onChange={(val)=> setCount(val)} perBox={1} label="Input Box"/>
     {count}
    </div>
  )
}

export default App
