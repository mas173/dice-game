import { use, useState } from 'react'
import './App.css'
import HomePage from "./Components/HomePage"
import  Second  from "./Components/Second"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

const [Showval , Setshowval] = useState(false);
  return (
    <>
    
{Showval ? <Second></Second> : <HomePage Setshowval={Setshowval}></HomePage>}
    </>
  )
}

export default App
