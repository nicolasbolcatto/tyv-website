import React from 'react'
import "./NavBar.css"

const arrayLinks = [
        { link: "/", name: "Inicio", categoryId: 999 },
        { link: "/nosotros", name: "Nosotros", categoryId: 0 },
        { link: "/servicios", name: "Servicios", categoryId: 1 },
        { link: "/proyectos", name: "Proyectos", categoryId: 2 },
        { link: "/contacto", name: "Contacto", categoryId: 3 }]

const NavBar2 = () => {
  return (
    <nav className="nav navbar sticky-top bg-light navbar-expand-xl">
        <div className="container-fluid">
            <button className="navbar-toggler m-auto shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src={"../../assets/logo.png"} alt="logo" className="d-block"/>
                <span className="navbar-toggler-icon Toggle"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand" id="logo" href="/"><img src={"../../assets/logo.png"} alt="logo" className="d-block bg-light"/></a>
                <a className="navbar-brand" id="title" href="/"><h1 className="title greenText m-0">TORRES y VERCELLI S.R.L.</h1><br /><p className="m-0 greenTextSub">Consultores de Ingeniería</p><p><i className="greenTextSub">desde 1961</i></p></a>
                <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row mx-auto" id="list-buttons">
                    {arrayLinks.map(x => (<li className="nav-item" key={x.categoryId}><a className="nav-link navButton" href={x.link}><p className="mb-0 textLink">{x.name}</p></a></li>))}
                </ul>
            </div>
            
            
            
        </div>
    </nav>
  )
}

export default NavBar2