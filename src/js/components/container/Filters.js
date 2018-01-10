import React, { Component } from "react";

class SliderContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className={this.props.className+" filter"}>
 			<h3>filtros</h3>
      </div>
    );
  }
}
export default SliderContainer;