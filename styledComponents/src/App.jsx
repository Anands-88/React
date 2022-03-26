import { useState } from 'react'
import './App.css'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button primary >Primary Button </Button>
      <Button default >Default Button</Button>
      <Button dashed >Dashed Button</Button>
      <Button text >Text Button</Button>
      <Button link>Link Button</Button>
    </div>
  )
}

export default App
