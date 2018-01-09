import React, { Component } from "react";

import SliderAction from "presentational/SliderAction";
import { comicAPI } from "config/config";

const path = require("path");
class SliderCommands extends Component {
  constructor() {
    super();

    this.state = {
      func: null,
      position:0
    };

    this.next     = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goFirst  = this.goFirst.bind(this);
    this.goLast   = this.goLast.bind(this);
    this.updatePosition   = this.updatePosition.bind(this);
  }

  next(){
    let pos = this.props.position;
    let lastPosition = this.props.lastPosition;
    pos = (pos >= lastPosition)? lastPosition: pos+1;
    this.setState({ position: pos}, this.updatePosition);
  }

  previous(){
    let pos = this.props.position;
    this.setState({ position:  (pos <= 0)? 0: pos-1}, this.updatePosition)
  }

  goLast(){
    this.setState({ position: 0}, this.updatePosition);
  }

  goFirst(){
    this.setState({ position: this.props.lastPosition}, this.updatePosition)
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
  }
  
  render() {
    const commands = this.createButtons();
    const {position} = this.state;
    let counter = 0;
       return (
      <div>
      <div> {position} </div>
        {commands.map(( { text, action } ) =>
          <SliderAction text={text} key={counter++} action={action}/>
        )}
      </div>
    );
  }
}
export default SliderCommands;