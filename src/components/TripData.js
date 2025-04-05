import "./NavStyles.css";
import React from "react";

function TripData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="trip" />
            </div>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </div>

    )
}
export default TripData;
// // Compare this snippet from travelweb/src/components/NavBar.js: