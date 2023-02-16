import {
    Routes,
    Route
   } from "react-router-dom"
import Empleados from "../Components/Empleados"
import Error404 from "../Components/Error404"

import SearchBar from "../Components/SearchBar"

export default function RouterRRHH() {
  return (
   
    <Routes>
        <Route path="/" element={<Empleados/>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path='*' element={<Error404/>}/>
    </Routes>
  
  )
}
