import React from 'react'
import Hero from './Hero'
import vg from "../assets/Travel_Home_Hero_2.jpeg";
import Destination from './Destination';
import Trip from './Trip';

const Home = () => {
  return (
    <>
     <Hero 
     cName="hero"
     heroImg={vg}
     title="Your Journey Your Story"
     text="Choose your favourite Destination" 
     buttonText="Travel Plan"
     url="/"
     btnClass="show"
    />
     <Destination/>  
     <Trip/>
    </>
  )
}

export default Home