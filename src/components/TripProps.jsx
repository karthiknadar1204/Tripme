import React from 'react'
const TripProps = (props) => {
  return (

    <div className='t-card'>


        <div className="t-image">
            {/* props for image inside the card */}
            <img src={props.image} alt="image" />
        </div>

        {/* prop for heading inside the card */}
        <h4>{props.heading}</h4>
        {/* props for paragraph inside */}
        <p>{props.text}</p>


    </div>
  )
}

export default TripProps