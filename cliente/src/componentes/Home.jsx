import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='contanier'>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
        </nav>
        <div className='text-center'>
            <h1 className='text-center'>Bienvenido a la app BE TECH</h1>
            <div className='row g-3 d-flex justify-content-center' >
            <button className='btn btn-primary col-3' type='button'><Link to='/empleados' className=' col-10 text-decoration-none text-reset'>Ver Empleados</Link></button>
            <button className='btn btn-warning col-3' type='button'><Link to='/empleados/nuevo' className='col-10 text-decoration-none text-reset'>Crear Empleados</Link></button>
            </div>
            
        </div>
    </div>
  )
}
