import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todo } from './components/todo'
import { Route, Routes } from 'react-router-dom'
import { TodoDetails } from './components/todo_details'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/todo/:id' element={<TodoDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
