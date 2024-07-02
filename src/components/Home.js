import React from 'react';
import Navbar from './Navbar';
import Hero from '../components/Hero'
import HomeImg from '../assets/home-bg.jpg'
import './HomeStyle.css';
import Footer from './Footer';



function Home({ user, onLogout }) {
  return (
      <div>
      <Navbar onLogout={onLogout} />
      <marquee direction="right" loop="">
            <div id='Nuser'>
            *...Welcome , to our website {user}...*!
            </div>
            {/* <div class="geek2">
                A computer science portal for geeks
            </div> */}
        </marquee>
    {/* <div className='Wuser'>
      <div className="Wuser-slide">
        <h6>Welcome,to our website {user}!</h6>
      </div>
    </div> */}
       <Hero
       idName="hero"
       heroImg={HomeImg}
       CName="home-text"
       title="“Travel far enough,You meet yourself”&#127757;"
       />
     
    </div>
    
  );
}

export default Home;
