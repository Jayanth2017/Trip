import React from 'react';
import Navbar from '../components/Navbar';  
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import ContactForm from "../components/ContactForm.js";

function Contact() {
    return (
      <>
           <Navbar />
            <Hero cName="hero-mid"
              heroImg="https://amadeus.com/content/dam/amadeuswebevo/brand/amadeus/photos/sections/products/travel-sellers/cytric-travel-and-expense/woman-airport-sunrise.jpg"
              title="Contact Us"
                btnClass="hide"
                />
                <ContactForm />
                <Footer />
      </>
  
    );
  }
  export default Contact;