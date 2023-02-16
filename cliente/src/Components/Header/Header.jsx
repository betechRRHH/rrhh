import { Link } from 'react-router-dom';
import '../../Css/header.css'
import logo from './LOGO-BE-TECh.png'
export default function Header() {
  const data = Date.now()
  const hoy = new Date(data);

  return (
    
    <div className='header__container'>
      <section className='header__logo'>
        <img src={logo} alt="img" className='logo'/>
      </section>
      <seccion className='header__secciones'>
        <div className='fecha'>{hoy.toLocaleDateString()}</div>
        <div className='area'>
          <Link to='#' className='link__area'>
            Recursos Humanos
          </Link>
          </div>
      </seccion>
    </div>
  )
}
