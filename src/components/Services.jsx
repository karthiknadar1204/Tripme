import React from 'react'
import Hero from './Hero'
import vg from "../assets/Travel_Services_2.jpeg";
import Trip from './Trip';
const Services = () => {
  return (
    <>
        <Hero
    cName="hero-mid"
    heroImg={vg}
    title="Services"
    btnClass="hide"
    
    />
    <Trip/>
    
    </>
  )
}

export default Services 