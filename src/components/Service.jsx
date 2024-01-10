import React from 'react'
import "./Service.css"

export const Service = ({service}) => {
  return (
        <div className="p-3 card-container h-100" key={service.key}>
        <div className="card my-3 h-100">
            <img src={service.thumbnail} className="card-img" alt={service.thumbnail}/>
            <div className="card-body card-background text-center card-text-background  ">
                <h5 className="card-title lh-lg">{service.title}</h5>
            </div>
        </div>
        </div>
  )
}
