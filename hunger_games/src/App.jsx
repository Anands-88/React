import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Form } from "./Component/add_data"
import { RestaurantDetails } from './Component/resturant_details'
import { Navbar } from './Component/navbar'
import { Route, Routes } from 'react-router-dom'
import { Favorites } from './Component/add-fav'

function App() {
  const [save, setSave] = useState([])

  function getData(id)
  {
    setSave([...save,id])
  }

  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/favorites" element={<Favorites fav={save}/>}></Route>
      <Route path="/create" element={<Form/>}/>
       <Route path='/' element={<RestaurantDetails getdata={getData}/>}/>
     </Routes>
    </div>
  )
}

export default App
