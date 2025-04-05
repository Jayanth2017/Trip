import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import AboutUs from '../components/AboutUs.js';


function About() {
    return (
      <>
                <Navbar />
            <Hero cName="hero-mid"
              heroImg="https://wallpapercrafter.com/desktop/16064-silhouette-lonely-mountain-night-travel-4k.jpg"
              title="About"
                btnClass="hide"
                />
                <AboutUs/>
                <Footer />
      </>
  
    );
  }
  export default About;