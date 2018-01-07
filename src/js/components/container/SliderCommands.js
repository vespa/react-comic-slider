import React, { Component } from "react";
import ReactDOM from "react-dom";
import SliderAction from "../presentational/SliderAction";
import { comic } from "../config/config";

const path = require("path");
class SliderCommands extends Component {
  constructor() {
    super();

    this.state = {
      position: 0,
      lastPosition: null,
      func: null
    };

    this.next     = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goFirst  = this.goFirst.bind(this);
    this.goLast   = this.goLast.bind(this);
    this.updatePosition   = this.updatePosition.bind(this);
  }

  next(){
    let pos = this.state.position;
    this.setState({ position: pos+1},this.updatePosition);
  }

  previous(){
    let pos = this.state.position;
    this.setState({ position:  (pos <= 0)? 0: pos-1}, this.updatePosition)
  }

  goFirst(){
     this.setState({ position: 0}, this.updatePosition);
  }

  goLast(){
    let pos = this.state.position;
    this.setState({ position: this.state.lastPosition}, this.updatePosition)
  }

  updatePosition(){
    this.func(this.state.position);
  }

  createButtons(){
    return [
      {
        text: "primeira",
        action : this.goFirst 
      },

      {
        text: "próxima",
        action : this.next
      },
      {
        text: "anterior",
        action : this.previous 
      },
      {
        text: "última",
        action : this.goLast
      },
    ];
  }


  componentDidMount(){
    this.func = (this.props.func)? this.props.func : ()=> false;
    fetch(comic, {method:"get"})
      .then(comicData => comicData.json())
      .then(res => {
        this.setState({lastPosition: res.totalResults});
    });
  }
  
  render() {
    const commands = this.createButtons();
    const {position} = this.state;
    let counter = 0;
       return (
      <div>
      <span> {position} </span>
        {commands.map(( { text, action } ) =>
          <SliderAction text={text} key={counter++} action={action}/>
        )}
      </div>
    );
  }
}
export default SliderCommands;