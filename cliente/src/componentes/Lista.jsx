import React from 'react'
import { Link } from 'react-router-dom'

export const Lista = () => {
  return (
    <div className='container'>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Empleados</li>
        </ol>
      </nav>
      <div><h4 className='text-center'>Aca se deberian mostrar todos los empleados</h4></div>
    </div>
  )
}
