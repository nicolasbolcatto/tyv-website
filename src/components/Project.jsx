import "./Project.css"

export const Project = ({project}) => {
  return (
        <div className="card m-3 w-100" key={project.key}>
              <div className="card-body row align-items-start">
                <div className="col-md-4 h-100">
                    <h5 className="card-title fs-1"><span className="badge project-badge">{project.name}</span></h5>
                    <p className='card-text fs-3 fw-bold'>Comitente: {project.client}</p>
                    <p className='card-text fs-3 fw-bold'>Ubicación: {project.location}</p>
                    <p className='card-text fs-3 fw-bold'>Fecha: {project.month} {project.year}</p>
                    <img src={project.url} alt="project-pic" className='w-100 project-pic' />
                    
                </div>
                <div className="col-md-8 px-5 m-auto h-100">
                  <p className='fw-normal card-text pt-4'>{project.description}</p>
                  {project.items ? <ul className='service-list-items d-flex flex-column'>{project.items.map(item => {return(<li key={item.length}><p className='service-list-item'>{item}</p></li>)})}</ul> : <></>}
                  {project.link ? <a href={project.link} target='_blank' rel="noreferrer" className="btn btn-success d-block w-50 fs-3 location-button m-auto">Ver ubicación</a> : <></>}
                </div>
                  
              </div>  
            </div>
  )
}