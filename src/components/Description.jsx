import React from "react";
import "./Description.css"

const Description = () => {

    return(
            <div className="container-flex description d-flex flex-column align-items-center">
                <div className="col-sm-10 px-4">
                    
                    <div className="col text-center">
                        <h2 className="text-center display-1 fw-bold py-5">Geotecnia de alta calidad</h2>
                        <img className="image" src="../../assets/drilling.png" alt=""/>
                    </div>
                    <p className="lh-lg text-center fs-2 py-5">Desde hace más de 60 años nos especializamos en estudios y asesoramiento geotécnico, 
                        ofreciendo una amplia gama de servicios que respaldan el desarrollo de proyectos sólidos y seguros. 
                        Nuestro equipo de profesionales expertos en ingeniería geotécnica trabaja día a día para proporcionar soluciones geotécnicas confiables 
                        y adaptadas a cada necesidad.</p>
                      
                </div>
                
                
                <div className="col-sm-10 px-4">
                    
                    <div className="col text-center">
                        <h2 className="text-center display-1 fw-bold py-5">Trayectoria</h2>
                        <img className="image" src="../../assets/data.png" alt=""/>
                    </div>
                        <p className="lh-lg text-center fs-2 py-5">Nuestra extensa trayectoria nos ha permitido conformar una extensa base de datos geotécnicos y geológicos a lo largo y ancho de la Argentina, como así también en países limítrofes. Utilizamos esta información como antecedente para cada uno de los proyectos en los que participamos, lo cual nos permite planificar las tareas de investigación geotécnica de forma eficiente, minimizando errores y anticipando riesgos geotécnicos.</p>
                        
                </div>

                <div className="col-sm-10 px-4">
                    
                    <div className="col text-center">
                        <h2 className="text-center display-1 fw-bold py-5">Procedimientos basados en normativas y códigos</h2>
                        <img className="image" src="../../assets/code.png" alt=""/>
                    </div>
                        <p className="lh-lg text-center fs-2 py-5">En cada uno de los procesos de trabajo que llevamos cabo, nos basamos en normativas y códigos tanto a nivel nacional como internacional. Utilizamos normativas ASTM, AASHTO, IRAM, CIRSOC, DNV, ROM, EC, etc. tanto para los procedimientos de investigación geotécnica in situ y en laboratorio, como para los procesos de dimensionamiento, diseño y verificaciones geotécnicas que llevamos a cabo día a día.</p>
                        
                </div>
                
                <div className="col-sm-10 px-4">
                    <div className="col text-center">
                        <h2 className="text-center display-1 fw-bold py-5">Trabajo interdisciplinario</h2>
                    <img className="image py-3" src="../../assets/think.png" alt=""/>
                </div>
                    <p className="lh-lg text-center fs-2 py-5">La geotecnia requiere de la articulación de conceptos sobre física, matemática, química, estructuras, geología e hidrología, entre otras disciplinas. Nuestro grupo de trabajo articula conocimientos en estas áreas para resolver problemas de ingeniería civil de forma integral, interactuando con otras disciplinas para maximizar la seguridad y minizar los costos en los proyectos en los que participamos.</p> 
                </div>
                
            </div>    
    )
}   

export default Description