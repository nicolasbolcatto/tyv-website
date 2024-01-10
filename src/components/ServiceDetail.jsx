import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./ServiceDetail.css"
import { Link } from 'react-router-dom'

export const ServiceDetail = ({service}) => {

  return (
    <div key={service.id}>
      <NavBar/>
      <Link style={{textDecoration: 'none'}} to={"/servicios"}>
          <div className="row service-detail container mx-auto mt-5">
            <h5 className='fw-bold h-25'>&#171; Ver más servicios</h5>
          </div>
      </Link>
      <div className="row service-detail container mx-auto mt-5" >
        <div className="col-sm-12 col-md-12 col-lg-6 service-text">
          <h5 className='display-5 fw-bold'>
            {service.title}
          </h5>
          <p className='service-text'>
            {service.description}
          </p>
          <div>
            {service.items ? <ul className='service-list-items d-flex flex-column'>{service.items.map(item => {return(<li key={item.length}><p className='service-list-item'>{item}</p></li>)})}</ul> : <></>}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 service-image my-auto">
          <img src={service.thumbnail} alt={service.thumbnail} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
