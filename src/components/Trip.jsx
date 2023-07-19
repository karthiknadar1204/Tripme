import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import "../styles/Trip.css";
import TripProps from './TripProps';
import trip1 from "../assets/Travel_Indonesia.jpeg";
import trip2 from "../assets/Travel_Malaysia.jpeg";
import trip3 from "../assets/Travel_France.jpeg";

const Trip = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="trip">
      <h1 className='triph1' >Recent Trips</h1>
      <p className='first_para_services'>You can discover unique destinations using Google Maps.</p>

      <div className='carousel-container'>
        <Slider {...settings}>
          <div className="t-card">
            <TripProps
              image={trip1}
              heading="Trip to Indonesia"
              text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
            />
          </div>

          <div className="t-card">
            <TripProps
              image={trip2}
              heading="Trip to Malaysia"
              text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It is known for its beaches, rainforests, and mix of Malay, Chinese, Indian, and European influences."
            />
          </div>

          <div className="t-card">
            <TripProps
              image={trip3}
              heading="Trip to France"
              text="France, in Western Europe, encompasses medieval cities, alpine villages, and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre, and monuments like the Eiffel Tower."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Trip;
