import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Components/signup'
import { Login } from './Components/login'
import { PrivateRouter } from './Components/privateComponent'
import { DashBoard } from './Components/Dashboard'
import { useSelector } from "react-redux"

function App() {
  // const [count, setCount] = useState(0)

  const auth = useSelector((store)=>{return store.isAuth})

  return (
    <div className="App">
      <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={
          <PrivateRouter auth={auth}>
            <DashBoard />
          </PrivateRouter>}/>
      </Routes>
     
    </div>
  )
}

export default App
