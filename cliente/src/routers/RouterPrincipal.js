import {React} from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Formulario } from "../componentes/Formulario.jsx"
import { Header } from "../componentes/Header.jsx"
import { Navbar } from "../componentes/Navbar.jsx"

export const RouterPrincipal = () => {
  return (
       
    <BrowserRouter>

        <Header/>
        <Navbar/>

        <Routes>
           <Route path="/empleados/nuevo" element={ <Formulario/> }/>
        </Routes>
    </BrowserRouter>
  )
}


