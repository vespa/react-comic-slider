import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "../presentational/SliderAction";

const path = require("path");

class SliderCommands extends Component {
  constructor() {
    super();
    // this.state = {

    // };
  }
  back(){

  }
  createButtons(){
    return [
      {
        text: "voltar",
        action : this.back
      }
    ];
  }
  componentDidMount(){

  }

  render() {
    //const { currentImage, title, alt } = this.state;
    return (
      <div>
        commandos
  
      </div>
    );
  }
}
export default SliderCommands;