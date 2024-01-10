import React from 'react'
import Description from "./Description";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import Footer from './Footer';

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Gallery/>
        <Description/>
        <Footer/>
    </div>
  )
}

export default Main