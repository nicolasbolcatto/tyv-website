import React from 'react'
import "./Member.css"

export const Member = ({props}) => {
  return (
        <div className="col-sm-4 p-3 mb-3" key={props.key}>
        <div className="card my-3 h-100 member-cont">
            <img src={props.avatar} className="card-img-top py-2" alt="..." style={{width: 100, margin: "auto"}}/>
            <div className="card-body card-text">
                <h5 className="card-title lh-lg h-50 text-center">{props.name}</h5>
                <p className="my-3 text-center">{props.position}</p>
                <a href={`mailto:${props.email}`}><p className="my-3 text-center text-primary pb-5">{props.email}</p></a>
            </div>
        </div>
        </div>
  )
}