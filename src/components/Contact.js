import React from 'react';
import Navbar from './Navbar';
import ContactImg from "../assets/contact-img.png";
import Hero from './Hero';
import { ContactUs } from './ContactUs';

function Contact({ onLogout }) {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      <Hero
        idName="contact-hero"
        heroImg={ContactImg}
        cName="contact-text"
        title="Contact Us"
        />
        <ContactUs/>
    </div>
  );
}

export default Contact;
