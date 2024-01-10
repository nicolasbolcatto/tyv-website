import React from 'react'
import { Project } from './Project'
import NavBar from './NavBar'
import Footer from "./Footer"
    
export const ProjectList = ({projects}) => {
  return (
    <div>
      <NavBar/>
      <div className='row p-2 container-fluid'>
        <div className="col-sm-12">
            <h2 className="text-center my-3">Proyectos más relevantes</h2>
            
        </div>
        <div className='row m-auto'>
        {projects.map(project => 
        <div className="col-12" key={project.key}>
          <Project key={project.key} project={project}/>
        </div>
        )}
        </div>
        <Footer/>
    </div>
    </div>
    
  )
}