
import {Empform} from "./components/employee_form"
import './App.css'
import { TableData } from './components/table'
import { useState } from "react"

function App() {

  const [datas,setDatas] = useState([])

  const store = (data) =>
  {
    setDatas(data)
  } 

  return (
    <div className="App">
      <Empform getdata={store} />
      {console.log("DATAS",datas)}
      <TableData display={datas}/> 
    </div>
  )
}

export default App
