import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Tickicon from "../Images/tick-icon.png";
import './ContactStyle.css';
import Footer from './Footer';



export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_eta0oi5', 'template_522j8ch', form.current, {
        publicKey: 'Dj3bDIjl8KbaIdXfO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  let popup = document.getElementById("popup");
function openPopup(){
popup.classList.add("open-popup");
}

function closePopup(){
popup.classList.remove("open-popup");
}

  return (
<div>
      <section id="contact">
        <p>If you want to know about any Travel Places.. ✈ ..</p>
  <h2>Contact Me!</h2>

<form ref={form} onSubmit={sendEmail} action="#" className='form-items'>
  <div class="input-box">
    <div class="input-field">
      <input type="text" name="from_name" placeholder="Full Name" id="Name" className="item" autocomplete="off" required/>
    </div>
    <div class="input-field">
      <input type="text" name='from_email' placeholder="Email Address" id="Email" className="item" autocomplete="off" required/>
    </div>
  </div>

<div class="input-box">
    <div class="input-field">
      <input type="text" name='from_Pnumber' placeholder="Phone number" id="Phone" className="item" autocomplete="off" required/>
    </div>
    <div class="input-field">
      <input type="text" name='from_Subject' placeholder="subject" id="Subject" className="item" autocomplete="off" required/>
    </div>
  </div>

  <div class="textarea-field field">
    <textarea name="from_message" id="message" cols="30" rows="10" 
    placeholder="Your Message" className="item" autocomplete="off" required>
    </textarea>
  </div>

  <button type="submit" className="btn-1 box" 
  // onClick={openPopup}
  >Send Message</button>

{/* <div class="container" id="popup" >
 
 <div>
<img src={Tickicon} id="tick-icon"/>
<h3>Thank You!</h3>
<p>Message sent Successfully...</p>
<button type="button" class="btn-2"
 onclick={closePopup}
 >OK</button>
 </div> 

</div>  */}

</form>
</section>

<Footer/>
</div>

  );
};
