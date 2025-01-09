import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <div className='row p-2 container-fluid'>
            <div className="col-12">
                <h2 className="text-center my-3">Contactanos</h2>
                <p className='text-center'>Envianos un correo con tu consulta o pedido de presupuesto. También podés comunicarte a nuestros teléfonos fijos o enviarnos un Whatsapp.</p>
            </div>
            <div className="col p-5">
                <div className="card p-3">
                    <div className="card-text p-3">
                        <div className="container-fluid">
                            <a id="email" href="mailto:tv@torresyvercelli.com.ar">
                                <div className="row py-3">
                                    <div className="col-1">
                                        <img className="m-auto social-net-logo d-block" src="/assets/email.png" alt="logo-email"/>
                                    </div>
                                    <div className="col-md-11 m-auto">
                                        <p>Email: tv@torresyvercelli.com.ar</p>
                                    </div>
                                </div>
                            </a>
                            <a href="tel:+543417959532" alt="phone-link">
                                <div className="row py-3">
                                    <div className="col-1">
                                        <img className="m-auto social-net-logo d-block" src="/assets/phone.png" alt="logo-phone"/>
                                    </div>
                                    <div className="col-md-11 m-auto">
                                        <p>Teléfonos: +54 341 4405979 / 4241988</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=+5493416048061" alt="whatsapp-link">
                                <div className="row py-3">
                                    <div className="col-1">
                                        <img className="m-auto social-net-logo d-block" src="/assets/whatsapp.png" alt="logo-phone"/>
                                    </div>
                                    <div className="col-md-11 m-auto">
                                        <p>Whatsapp: +54 341 607 8061</p>
                                    </div>
                                </div>
                            </a>
                                
                                
                            
                        </div>
                    </div>
                </div>
            </div>
            <iframe className='' title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.027393143431!2d-60.63726148862498!3d-32.94475457348384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab18d6120f9b%3A0xe9bf6b384f3b1ae4!2sTorres%20y%20Vercelli%20SRL!5e1!3m2!1ses!2sar!4v1704821340073!5m2!1ses!2sar" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact