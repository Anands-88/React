import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todo } from './component/todo'
import { TodoDetails } from './component/todoDetails'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './component/navbar'
import { Login } from './component/login'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path={"/"} element={ <Todo/>}/>
       <Route path={"/todo/:id"} element={<TodoDetails/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App
