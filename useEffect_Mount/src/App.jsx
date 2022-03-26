import { useState } from 'react'
import './App.css'
import { Display } from './components/display'
import { Todo } from './components/todo'

function App() {
  const [button, setButton] = useState(false)

  const clicked = (touch) =>
  {
    setButton(touch)
  }
 

  return (
    <div className="App">
      <Todo bttn={clicked}/>
      <Display click={button}/>
    </div>
  )
}

export default App
