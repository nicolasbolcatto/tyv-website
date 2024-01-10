import React from 'react'
import { Member } from './Member'
import NavBar from './NavBar'
import "./MemberContainer.css"
import Footer from './Footer'


export const MemberContainer = ({members}) => {
  return (
    <div>
       
       <NavBar/>
      <div className='row p-2 services'>
        <div className="col-sm-12 px-4">
                    <h2 className="text-center">Nosotros</h2>
                    <p className="lh-lg text-center">Somos una firma especializada en Mecánica de Suelos e Ingeniería de Fundaciones desde hace más de 60 años.</p>
                    <p className="lh-lg text-center">Contamos con una vasta experiencia en la ejecución de perforaciones para estudios geotécnicos, garantizando la calidad e integridad de cada uno de los estudios que llevamos a cabo.</p>
                    <p className="lh-lg text-center">Nuestro objetivo diario es maximizar la confiabilidad, seguridad y desempeño de las obras de ingeniería civil en las que participamos.</p>
        </div>
                <div className='col-sm-12 p-4'>
                    <h2 className='text-center'>Conocé nuestro equipo</h2>
                </div>
        {members.map(member => 
            <Member key={member.key} props={member}/> 
        )}
        <Footer/>
    </div>
    </div>
    
  )
}
