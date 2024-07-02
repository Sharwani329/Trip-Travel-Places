import React from 'react';
import Navbar from './Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/about-img.jpg';
import AboutUs from './AboutUs';
import Footer from './Footer';




function About({ onLogout }) {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      <Hero
        idName="about-hero"
        heroImg={AboutImg}
        cName="about-text"
        title="About Us"
        />
        <AboutUs/>
        <Footer/>
    </div>
  );
}

export default About;
