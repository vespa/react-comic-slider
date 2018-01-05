import React, { Component } from "react";
import ReactDOM from "react-dom";
import SliderAction from "../presentational/SliderAction";
const path = require("path");
class SliderCommands extends Component {
  constructor() {
    super();
  }

  back(){
    alert("hey")
  }

  createButtons(){
    return [
      {
        text: "voltar",
        action : this.back
      },
      {
        text: "avançar",
        action : this.back
      }
    ];
  }

  componentDidMount(){}
  
  render() {
    const commands = this.createButtons();
    let counter = 0;
       return (
      <div>
        {commands.map(( { text, action } ) =>
          <SliderAction text={text} key={counter++} action={action}/>
        )}
      </div>
    );
  }
}
export default SliderCommands;