import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import Trip from '../components/Trip.js';


function Service() {
    return (
      <>    
           <Navbar />
            <Hero cName="hero-mid"
              heroImg="https://wallpapers.com/images/featured/4k-plane-39efmsuz0fhub1c3.jpg"
              title="Services"
                btnClass="hide"
                />
                <Trip/>
                <Footer />
      </>
  
    );
  }
  export default Service;