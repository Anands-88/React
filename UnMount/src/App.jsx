import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './component/timer'

function App() {
  const [count, setCount] = useState(0)

  const Initial = 8;
  const End = 88;

  return (
    <div className="App">
      <Timer startTime={Initial} endTime={End}/>
    </div>
  )
}

export default App
