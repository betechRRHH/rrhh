import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://beitech.com.ar/" target='_blank' rel='noreferrer'>BeTech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/cumpleaños'>Cumpleaños</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to='/empleados' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Empleados
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to='empleados/nuevo'>Nuevo</Link></li>
            <li><Link class="dropdown-item" to='/empleados'>Modificar</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to='/empleados'>Buscar</Link></li>
          </ul>
        </li>
         </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar Empleado.." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  )
}
