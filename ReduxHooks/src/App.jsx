import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Signup } from './Components/Signup'
import { Login } from './Components/login'
import { Home } from './Components/home'
import { TodoCreate } from './Components/todosCreate'
import { TodoEdit } from './Components/todoEdit'
import { Summary } from './Components/Summary'
import { Navbar } from './Components/Navbar'
import { useSelector } from 'react-redux'

function App() {

  const {isAuth} = useSelector((store)=>{return store.auth})

  const PrivateRoute = ({children}) =>{
    return isAuth ? children : <Navigate to="/login"/>
  }


  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/register" element={<Signup/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path='/' element={
         <PrivateRoute>
           <Home/>
         </PrivateRoute>
       }></Route>
       <Route path='/create' element={
         <PrivateRoute>
           <TodoCreate/>
         </PrivateRoute>
       }></Route>
        <Route path='/todos/edit/:id' element={
         <PrivateRoute>
           <TodoEdit/>
         </PrivateRoute>
       }></Route>
       <Route path='/summary' element={
         <PrivateRoute>
           <Summary/>
         </PrivateRoute>
       }></Route>
     </Routes>
    </div>
  )
}

export default App
