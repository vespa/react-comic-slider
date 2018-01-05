import React, { Component } from "react";
import ReactDOM from "react-dom";
import SliderAction from "../presentational/SliderAction";
const path = require("path");
class SliderCommands extends Component {
  constructor() {
    super();

    this.state = {
      position: 0,
      lastPosition: null
    };
    
    this.next     = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goFirst  = this.goFirst.bind(this);
    this.goLast   = this.goLast.bind(this);

  }

  next(){
    let pos = this.state.position;
    this.setState({ position: pos+1})
  }

  previous(){
    let pos = this.state.position;
    this.setState({ position:  (pos <= 0)? 0: pos-1})
  }

  goFirst(){
     this.setState({ position: 0})
  }

  goLast(){
    let pos = this.state.position;
    this.setState({ position: 9999})
  }

  createButtons(){
    // TODO: convert the string in var to make easier to translate to other languages
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
      // TODO: fetch to get last position
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