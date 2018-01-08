import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "../presentational/Slider";
import SliderCommands from "./SliderCommands";
import UrlManager from "../../libs/URLManager";
import { comicAPI } from "../config/config";

class SliderContainer extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: "",
      position:0,
      lastPosition: 0,
      alt:"",
      title:""
    };
    this.changeImage = this.changeImage.bind(this);
  }

  getAPI(){
    return  fetch(comicAPI)
      .then(res => res.json()) 
      .then(res => res);

  }

  setImageData(data){
    this.setState ({ 
      position: data.id,
      currentImage: data.uri,
      alt: data.description
    });
  }

  updateImage(){
    const currentURL = UrlManager.checkCurrentURL().get("currentURL");
    let data;
    if(currentURL ==="/" || currentURL ===""){
      this.getAPI().then(res=>{
        data = res.results[res.length-1];
        this.setImageData(data);
      });
    } else {
      this.getAPI().then(res=>{
        data = res.results.filter(item => item.slug === currentURL.replace(/\//, ""));
        data = (data.length > 0)? data[0]
        :  {
          uri: "",
          id:0,
          description:""
        }
        this.setImageData(data);
      });
    }
  }

  componentDidMount(){
    this.updateImage();
    this.getAPI().then(res=>{
      this.setState({ lastPosition: res.totalResults})
    })
  }

  changeImage(pos){
    let data;
    this.setState({position: pos});
      this.getAPI().then(res=>{
        data = res.results.filter(item => item.id === pos);
        data = (data.length > 0)? data[0] :  false
        if(data!==false) this.setImageData(data);
      });
  }


  render() {
    const { position, currentImage, title, alt, lastPosition } = this.state;
    return (
      <div className="slider">
        <SliderCommands 
            func={this.changeImage} 
            position={position} 
            lastPosition={lastPosition} 
        />
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