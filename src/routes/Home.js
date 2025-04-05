import Destination from "../components/Destination.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import React from "react";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";
function Home() {
  return (
    <>
    
        <Navbar />
    <Hero cName="hero"
      heroImg="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      buttonText="Travel Plan"
        
        btnClass="show"
    
    />
    <Destination />
    <Trip />
    <Footer />
    
    </>

  );
}
export default Home;
