import React, { Component } from "react";
import ReactDOM from "react-dom";

class SliderContainer extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <div id="slider">
        here comes the viewer
      </div>
    );
  }
}

export default SliderContainer;
const wrapper = document.getElementById("slide-container");
wrapper ? ReactDOM.render(<SliderContainer />, wrapper) : false;