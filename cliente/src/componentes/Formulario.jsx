import React from 'react'

export const Formulario = () => {
  return (
    <div className="container ">
        <div className="row g-3">
            <text className=" form-control text-center">INGRESE LOS DATOS DEL NUEVO EMPLEADO:</text>
        </div>
        <form className="row g-3">

            <div className="col-4">
                <label for="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingresar nombre"/>
            </div>

            <div className="col-4">
                <label for="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" placeholder="Ingresar apellido"/>
            </div>

            <div className="col-4">
                <label for="domicilio-real" className="form-label">Domicilio real</label>
                <input type="text" className="form-control" id="domicilio-real" placeholder="Ingresar domicilio real"/>
            </div>

            <div className="col-4">
                <label for="domicilio-legal" className="form-label">Domicilio legal</label>
                <input type="text" className="form-control" id="domicilio-legal" placeholder="Ingresar domicilio legal"/>
            </div>

            <div className="col-4">
                <label for="ciudad" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="ciudad" placeholder="Ingresar ciudad"/>
            </div>

            <div className="col-4">
                <label for="cp" className="form-label">CP</label>
                <input type="cp" className="form-control" id="cp" placeholder="Ingresar Codigo Postal"/>
            </div>

            <div className="col-4">
                <label for="dni" className="form-label">DNI</label>
                <input type="number" className="form-control" id="dni" placeholder="Ingresar dni"/>
            </div>

            <div className="col-4">
                <label for="fechaDeNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="fechaDeNacimiento" placeholder="Ingresar fecha de nacimiento"/>
            </div>

            <div className="col-4">
                <label for="lugarDeNacimiento" className="form-label">Lugar de nacimento</label>
                <input type="text" className="form-control" id="lugarDeNacimiento" placeholder="Ingresar lugar de nacimiento"/>
            </div>

            <div className="col-4">
                <label for="fechaDeAlta" className="form-label">Fecha de alta</label>
                <input type="date" className="form-control" id="fechaDeAlta" placeholder="Ingresar fecha de alta"/>
            </div>

            <div className="col-6">
                <label for="rol" className="form-label">ROL</label>
                <select name="rol" id="rol" className="form-control" placeholder="Elegir rol">

                    <option disabled selected>Selecciona una opcion</option>
                    <option value="FullStackDeveloper">FullStack Developer</option>
                    <option value="FrontendDeveloper">FrontEnd Developer</option>
                    <option value="BackEndDveloper">BackEnd Developer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="AnalistaFuncional">Analista Funcional</option>
                    <option value="UxUiDesigner">Ux/Ui Designer</option>

                </select>
            </div>

            <div className="col-6">
                <label for="elementos" className="form-label">Elementos</label>
                <input type="text" className="form-control" id="elementos" placeholder="Ingresar Elementos"/>
            </div>

            <div className="col">
             <button type="button" className="btn btn-primary" value="guardar">Guardar</button>
            </div>
            

        </form>
    </div>
  )
}
