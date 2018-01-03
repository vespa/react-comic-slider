import React, { Component } from "react";
import ReactDOM from "react-dom";

let comicData = require("../../dataModel/comic");

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
console.log(comicData);
export default SliderContainer;
const wrapper = document.getElementById("slide-container");
wrapper ? ReactDOM.render(<SliderContainer />, wrapper) : false;