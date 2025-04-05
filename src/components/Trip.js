import "./TripStyles.css";
import React from "react";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p> You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
            image="https://www.wildwingsdandeli.com/assets/images/act11-1198x800.jpg"
            heading="Dandeli"
            text="Dandeli is a town in the western Indian state of Karnataka. The Dandeli Wildlife Sanctuary, with its trails and dense forests, is home to animals including black panthers, monkeys and elephants, as well as many bird species. "
        />
        <TripData
            image="https://travelghat.com/wp-content/uploads/2023/04/jog-falls-image.jpeg"
            heading="Jog Falls"
            text="Jog Falls is the second highest plunge waterfall in India, located in the Shimoga district of Karnataka. The falls are formed by the Sharavathi River, which drops from a height of 253 meters (830 feet) in four distinct cascades: Raja, Rani, Rover, and Rocket. "
            
        />
        <TripData
            image="https://media.assettype.com/outlooktraveller%2F2025-03-24%2Fzr2flwop%2FKyatanmakki-3.jpg"
            heading="Kyatanamakki Hills Station"
            text="Kyatanamakki Hill Station, located near Horanadu in the Chikmagalur district of Karnataka, is a lesser-known gem in the Western Ghats, known for its scenic beauty, off-roading opportunities, and panoramic views. "
        />

      </div>
    </div>
  );
}
export default Trip;
// Compare this snippet from travelweb/src/components/TripData.js: