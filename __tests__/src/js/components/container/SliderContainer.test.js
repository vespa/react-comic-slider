
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "isomorphic-fetch";
import SliderContainer from 'container/SliderContainer';

it('renders without crashing', () => {
    //mount(<SliderContainer/>);
    var div = document.createElement("div");
    ReactDOM.render(<SliderContainer />, div);
});