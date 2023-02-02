import {React} from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Formulario } from "../componentes/Formulario.jsx"
import { Header } from "../componentes/Header.jsx"
import { Home } from "../componentes/Home.jsx"
import { Lista } from "../componentes/Lista.jsx"

export const RouterPrincipal = () => {
  return (
       
    <BrowserRouter>

        <Header/>

        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path="/empleados" element={ <Lista/> }/>
          <Route path="/empleados/nuevo" element={ <Formulario/> }/>
        </Routes>
    </BrowserRouter>
  )
}


