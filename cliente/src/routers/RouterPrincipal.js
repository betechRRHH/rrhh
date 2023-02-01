import {React} from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Formulario } from "../componentes/Formulario.jsx"
import { Header } from "../componentes/Header.jsx"

export const RouterPrincipal = () => {
  return (
       
    <BrowserRouter>

        <Header/>

        <Routes>
          <Route path="/empleados/nuevo" element={ <Formulario/> }/>
        </Routes>
    </BrowserRouter>
  )
}


