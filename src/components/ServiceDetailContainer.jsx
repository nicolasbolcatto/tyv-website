import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import {useState} from "react"
import { ServiceDetail } from './ServiceDetail';
import { servicesData } from '../data/services';

export const ServiceDetailContainer = () => {
  const {id} = useParams();
  const [service, setService] = useState([])

  useEffect(() => {
servicesData.forEach(service => {
      
          if (service.key === id){
            setService(service)
          }
        })
  }, [id])
  
    
  return (
    <div>
        <ServiceDetail service={service}/>
    </div>
  )
}
