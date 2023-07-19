import React from 'react'
import vg from "../assets/About_Hero.jpeg";
import Hero from './Hero'
const About = () => {
  return (
    <>
    <Hero
    cName="hero-mid"
    heroImg={vg}
    title="About"
    btnClass="hide"
    
    />

    <div className='about-container'>
      <h1>Our History</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum maxime, reiciendis suscipit voluptatem qui voluptates quos tempore nemo eos ducimus accusamus repudiandae veritatis architecto molestias expedita temporibus! Commodi, accusantium.
        Ducimus reiciendis quo, nesciunt temporibus iste facilis pariatur hic esse cum dicta debitis error fugiat recusandae vel labore eius, aspernatur, doloremque ex. Voluptatum aliquid dignissimos animi incidunt et. Ratione, qui.
        Nesciunt laboriosam error qui nulla et in a placeat magnam dolor aperiam eligendi amet impedit incidunt rem dignissimos dolores, ipsa minus at! Fuga beatae tempora at alias minus voluptatem iste?
        Facilis facere voluptatem corrupti veniam exercitationem eveniet numquam ullam, alias neque dolor temporibus, officia tempore qui. Ducimus facere sequi fugit ea, aperiam sapiente rerum sed, cumque, a quidem ex illum!
        Ad expedita iusto ullam nam provident asperiores vero, voluptates ratione obcaecati eius quia dicta placeat laudantium non delectus iure officia eaque repellat autem? Eaque quas animi.
      </p>

      <h1>Our Mission</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum maxime, reiciendis suscipit voluptatem qui voluptates quos tempore nemo eos ducimus accusamus repudiandae veritatis architecto molestias expedita temporibus! Commodi, accusantium.
        Ducimus reiciendis quo, nesciunt temporibus iste facilis pariatur hic esse cum dicta debitis error fugiat recusandae vel labore eius, aspernatur, doloremque ex. Voluptatum aliquid dignissimos animi incidunt et. Ratione, qui.
        Nesciunt laboriosam error qui nulla et in a placeat magnam dolor aperiam eligendi amet impedit incidunt rem dignissimos dolores, ipsa minus at! Fuga beatae tempora.
      </p>

      <h1>Our Vision</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum maxime, reiciendis suscipit voluptatem qui voluptates quos tempore nemo eos ducimus accusamus repudiandae veritatis architecto molestias expedita temporibus! Commodi, accusantium.
        Ducimus reiciendis quo, nesciunt temporibus iste facilis pariatur hic esse cum dicta debitis error fugiat recusandae vel labore eius, aspernatur, doloremque ex.
      </p>
    </div>


   
   </>
  )
}

export default About