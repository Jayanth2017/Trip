import "./Destination.css";
import React from 'react';
import { Component } from 'react';

class DestData extends Component {
    render() {  
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    </div>
                <div className="image">
                    <img src={this.props.img1} alt="Shivamogga, Jog Falls" />
                    <img src={this.props.img2} alt="Shivamogga, Jog Falls" />
                    </div>
                </div>

        )
    }
  
    }
export default DestData;
        
    