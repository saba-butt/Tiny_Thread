import React from 'react'
// import { FaFacebook, FaInstagram, FaShopify } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-container" style={{backgroundImage:"url(/contact.jpg)"}}>
      <section className="contact">
        <h2 className='fade-in'>
          Contact Us
        </h2>
        <form>
          <input type="text" placeholder='Full Name' required/>
          <input type="email" placeholder="Email Address" required/>
          <input type="text" placeholder="Phone No" required />
          <textarea placeholder="Message" rows={5} required/>
          <button type="submit">
            Send Message
</button>
        </form>
          {/* Social Media Links */}
          <div className="socialMedia">
          <a
            href="https://www.facebook.com/tinythreadshelpline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaFacebook size={30} color="#4267B2" /> */}
          </a>
          <a
            href="https://www.instagram.com/tinythreads.helpline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaInstagram size={30} color="#E1306C" /> */}
          </a>
          <a
            href="https://tiny-threads-for-baby.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaShopify size={30} color="#E1306C" /> */}
          </a>
        </div>
      </section>
    </div>
    
  )
}

export default Contact
