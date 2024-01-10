import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="py-5">
        <ul className="justify-content-center pb-3 my-5">
            <li><p className='footer-text'><a href="/">Inicio</a></p></li>
            <li><p className='footer-text'><a href="/nosotros">Nosotros</a></p></li>
            <li><p className='footer-text'><a href="/servicios">Servicios</a></p></li>
            <li><p className='footer-text'><a href="/proyectos">Proyectos</a></p></li>
            <li><p className='footer-text'><a href="/contacto">Contacto</a></p></li>
        </ul>
        <p className="text-center text-muted">© 2024 Torres y Vercelli S.R.L.</p>
    </footer>
  )
}

export default Footer