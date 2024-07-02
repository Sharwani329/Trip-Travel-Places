import React from 'react';
import Navbar from './Navbar';
import Hero from '../components/Hero';
import TravelImg from '../assets/travel-img2.jpeg';
import tourImg01 from "../Images/tour-img01.jpg";
import tourImg02 from "../Images/tour-img02.jpg";
import tourImg03 from "../Images/tour-img03.jpg";
import tourImg04 from "../Images/tour-img04.jpg";
import tourImg05 from "../Images/tour-img05.jpg";
import tourImg06 from "../Images/tour-img06.jpg";
import tourImg07 from "../Images/tour-img07.jpg";
import TripData from '../components/TripData';
import Footer from './Footer';



function Places({ onLogout }) {
  return (
    <div>
      <Navbar onLogout={onLogout}/>
      <Hero
        idName="place-hero"
        heroImg={TravelImg}
        cName="place-text"
        title="“*...Oh the places you’ll go...😉✈”"
        />

        <div id="Tripcards">
            <TripData
            image={tourImg01}
            placeName="Westminister Bridge"
            city="London"
            price="$99"
            />
            <TripData
            image={tourImg02}
            placeName="Indonesia,Bali"
            city="Bali"
            price="$100"
            />            
            <TripData
            image={tourImg03}
            placeName="Snowy Mountains,Thailand"
            city="Bangkok"
            price="$80"
            />
            <TripData
            image={tourImg04}
            placeName="Beautiful Sunrise,Thailand"
            city="Phuket"
            price="$105"

            />
            <TripData
            image={tourImg05}
            placeName="Nusa Pendia Bali, Indonesia"
            city="Bali"
            price="$99"

            />
            <TripData
            image={tourImg06}
            placeName="Cherry Blossoms Spring"
            city="Tokyo"
            price="$90"

            />
            <TripData
            image={tourImg07}
            placeName="Holmen Lofoten"
            city="Paris"
            price="$100"

            />
        </div>
<Footer/>
   </div>

  );
}

export default Places;
