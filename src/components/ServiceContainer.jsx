import React from 'react'
import { Service } from './Service'
import NavBar from './NavBar'
import Footer from "./Footer"
import { Link } from 'react-router-dom'


export const ServiceContainer = ({services}) => {
  return (
    <div>
      <NavBar/>
      <div className='row p-2 container-fluid'>
        <div className="col-sm-12">
            <h2 className="text-center my-3">Conoce nuestros servicios</h2> 
        </div>
        <div className='row m-auto'>
        {services.map(service => 
        <div className="col-sm-6 col-md-4">
        <Link style={{textDecoration: 'none'}} to={service.key}>
          <Service key={service.key} service={service}/>
        </Link>
        </div>
        )}
        </div>
        <Footer/>
    </div>
    </div>
    
  )
}
