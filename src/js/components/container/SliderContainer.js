import React, { Component } from "react";
import ReactDOM from "react-dom";

import SlidePicture from "../presentational/SlidePicture";
const containerStyle = {
  padding: "0.5rem",
  fontSize: "1.2rem"
}

class SliderContainer extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: "none"
    };
  }

  componentDidMount(){
    this.setState ({ status: "loaded"});
    var that = this;
    this.setState ({ currentImage: "http://www.heresias.org/blog/wp-content/uploads/2017/02/simba.png"});
  }

  render() {
    const { currentImage } = this.state;
    return (
      <div id="slider-body" style={containerStyle}>
        <SlidePicture 
          currentImage = {currentImage}
        />
      </div>
    );
  }
}

const wrapper = document.getElementById("slide-container");
wrapper ? ReactDOM.render(<SliderContainer />, wrapper) : false;



export default SliderContainer;