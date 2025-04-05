import React from 'react';
import "./Destination.css";
import DestData from "./DestData";

const Destination =()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Explore the most popular travel destinations around the world.</p>
            
            <DestData
            className="first-des"
            heading="Shivamogga, Jog Falls"
            text="It is a segmented waterfall which, depending on rain and season, becomes a plunge waterfall. It's viewpoint is major tourist attraction in Shivamogga district and is ranked 13th in the world by the waterfall database. They are also known as the Gersoppa Falls or Jogada Gundi."
            img1="https://www.travel-notes.org/photos/jog_falls.jpg"
            img2="https://i.pinimg.com/736x/63/87/2c/63872ce3ca1fbe8574de64a799df0b18.jpg"
            />
            <DestData
            className="first-des-reverse"
            heading="Dandeli"
            text="Dandeli is a fascinating and adventurous city situated on the Western Ghats in Uttarakhand popular for its lush dense deciduous forests, deep valleys, wildlife sanctuaries, bird watching, water sports, river side fishing, trekking on hilly terrains, mountain biking, night camps and scenic beauty."
            img1="https://www.dandeliresorts.in/img/newimg/River-Rafting.jpg"
            img2="https://www.wildwingsdandeli.com/assets/images/act11-1198x800.jpg"
            />

        </div>
    )
}
export default Destination;
// This component is a placeholder for the destination page of the travel web application.