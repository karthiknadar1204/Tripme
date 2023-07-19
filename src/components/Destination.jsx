import React from 'react'
import "../styles/Destination.css"
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import DestinationProps from './DestinationProps'
import Mountain3 from "../assets/5.jpg"
import Mountain4 from "../assets/8.jpg"
const Destination = () => {
  return (
    <div className='destination'>
        <h1>popular destinations</h1>
        <p className='first_para_dest' >Tours give opportunity to see a lot within a short time frame</p>
        <DestinationProps
        className="first-des" 
        heading="Taal Volcanoes, Batangas"
        text="Taal Volcano, located in Batangas, offers a mesmerizing sight with
        its volcano nestled within a lake on an island. For adventure enthusiasts, a
        quick 45-minute hike to the crater is accessible even for beginners. Knowledgeable
        guides will accompany you, leading the way through the fascinating terrain of an active
        volcano, showcasing volcanic rocks and steam vents. To beat the heat and dust, plan an
        invigorating early morning trip and reward yourself with a delectable serving of bulalo
        before concluding your journey."
        img1={Mountain1}
        img2={Mountain2}
        />
        <DestinationProps
        className="first-des-reverse"
        
        heading="Mt. Daguldul Batangas "
        text="If you are looking for a hike thats a little more challenging but still
        good for a beginner mountaineer, check out Mt Daguldul san juan, Batangas. You will
        start your hike from beach and through tropical forests, different rock formations 
        and small streams. There is a small store halfway up the trailwhere you can take a break
        and drink buko juice, and though the summit itself may not have the best view, the breeze 
        is fantastic once you've made it back down, head straight to the beach for a refreshing
        well deserved swim."
        img1={Mountain3}
        img2={Mountain4}
        />
        </div>
  )
}

export default Destination