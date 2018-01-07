import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "../presentational/Slider";
import SliderCommands from "./SliderCommands";

class SliderContainer extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: "none",
      alt:"",
      title:""
    };
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount(){
    this.setState ({ status: "loaded"});
    var that = this;
    //
    this.setState ({ 
      currentImage: "http://www.heresias.org/blog/wp-content/uploads/2017/02/simba.png" ,
      title : "titulo",
      alt: 'alt'
    });
  }


  changeImage(pos){
    console.log(pos)
  }


  render() {
    const { currentImage, title, alt } = this.state;
    return (
      <div className="slider">
        <SliderCommands func={this.changeImage} />
        <Slider 
          currentImage = {currentImage}
          title = {title}
          alt = {alt}
        />
      </div>
    );
  }
}

const wrapper = document.getElementById("slider-container");
wrapper ? ReactDOM.render(<SliderContainer />, wrapper) : false;
export default SliderContainer;