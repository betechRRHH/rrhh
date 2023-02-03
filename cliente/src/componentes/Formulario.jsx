import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const url = 'http://localhost:5000/empleados/nuevo'

export const Formulario = () => {

     const[nombre , setNombre] = useState('')
     const[apellido, setApellido] = useState('')
     const[domicilioReal, setDomR] = useState('')
     const[domicilioLegal, setDomL] = useState('')
     const[ciudad, setCiudad] = useState('')
     const[cp, setCp] = useState('')
     const[dni, setDni] = useState('')
     const[fechaNacimiento, setFechaNac] = useState('')
     const[lugarNacimiento, setLugarNac] = useState('')
     const[fechaIngreso, setfechaIngreso] = useState('')
     const[rol, setRol] = useState('')
     const[elementos, setElementos] = useState('')
     
     
     const handleSubmit = async (e) => {
        e.preventDefault()
           try {
            const resp = await axios.post(url, {
                nombre: nombre, apellido: apellido, domicilioReal: domicilioReal, 
                domicilioLegal: domicilioLegal, ciudad: ciudad, cp: cp, dni: dni, fechaNacimiento: fechaNacimiento, 
                lugarNacimiento: lugarNacimiento, fechaIngreso: fechaIngreso, rol: rol, elementos: elementos
            })
            console.log(resp.data) // Devuelve 'created' por consola si todo esta ok
        } catch (error) {
            console.log(error.response)
        }
     }


  return (
    <div className="container ">


        <div className="row mb-3">
            <h4 className="text-center">INGRESE LOS DATOS DEL NUEVO EMPLEADO:</h4>
        </div>
        <form className="row g-3" onSubmit={ handleSubmit }>

            <div className="col-4">
                <label for="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingresar nombre"
                 value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" placeholder="Ingresar apellido"
                 value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="domicilio-real" className="form-label">Domicilio real</label>
                <input type="text" className="form-control" id="domicilio-real" placeholder="Ingresar domicilio real"
                value={domicilioReal} onChange={(e) => setDomR(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="domicilio-legal" className="form-label">Domicilio legal</label>
                <input type="text" className="form-control" id="domicilio-legal" placeholder="Ingresar domicilio legal"
                value={domicilioLegal} onChange={(e) => setDomL(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="ciudad" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="ciudad" placeholder="Ingresar ciudad"
                value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="cp" className="form-label">CP</label>
                <input type="cp" className="form-control" id="cp" placeholder="Ingresar Codigo Postal"
                value={cp} onChange={(e) => setCp(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="dni" className="form-label">DNI</label>
                <input type="number" className="form-control" id="dni" placeholder="Ingresar dni"
                value={dni} onChange={(e) => setDni(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="fechaDeNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="fechaDeNacimiento" placeholder="Ingresar fecha de nacimiento"
                value={fechaNacimiento} onChange={(e) => setFechaNac(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="lugarDeNacimiento" className="form-label">Lugar de nacimento</label>
                <input type="text" className="form-control" id="lugarDeNacimiento" placeholder="Ingresar lugar de nacimiento"
                value={lugarNacimiento} onChange={(e) => setLugarNac(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="fechaDeIngreso" className="form-label">Fecha de ingreso</label>
                <input type="date" className="form-control" id="fechaDeIngreso" placeholder="Ingresar fecha de ingreso"
                value={fechaIngreso} onChange={(e) => setfechaIngreso(e.target.value)}/>
            </div>

            <div className="col-4">
                <label for="rol" className="form-label">ROL</label>
                <select name="rol" id="rol" className="form-control" placeholder="Elegir rol"
                value={rol} onChange={(e) => setRol(e.target.value)}>

                    <option disabled selected value="">Selecciona una opcion</option>
                    <option value="FullStackDeveloper">FullStack Developer</option>
                    <option value="FrontendDeveloper">FrontEnd Developer</option>
                    <option value="BackEndDveloper">BackEnd Developer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="AnalistaFuncional">Analista Funcional</option>
                    <option value="UxUiDesigner">Ux/Ui Designer</option>
                    <option value="Designer">Designer</option>

                </select>
            </div>

            <div className="col-4">
                <label for="elementos" className="form-label">Elementos</label>
                <input type="text" className="form-control" id="elementos" placeholder="Ingresar Elementos"
                value={elementos} onChange={(e) => setElementos(e.target.value)}/>
            </div>

            <div className="col">
             <button type="submit" className="btn btn-primary" value="guardar">Guardar</button>
            </div>
            

        </form>
    </div>
  )
}
