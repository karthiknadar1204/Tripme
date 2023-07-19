import React from 'react'
import Hero from './Hero'
import vg from "../assets/Travel_Contact.avif";
const contact = () => {
  return (
    <>
    <Hero
    cName="hero-mid"
    heroImg={vg}
    title="Contact Us"
    btnClass="hide"
    />

    <div className="from-container">
      <h1>Send a message to us </h1>
      <form action=""> 
        <input placeholder='Name' />
        <input placeholder='Email' />
        <input placeholder='Subject' />
        <textarea placeholder='Message' rows="4" ></textarea>

        <button>Send Message</button>
      </form>
    </div> 
    </>
  )
}

export default contact

