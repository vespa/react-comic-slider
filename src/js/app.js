import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from '../css/main.scss'
import "isomorphic-fetch"
import 'babel-polyfill'
import SliderContainer from 'container/SliderContainer';

const wrapper = document.getElementById("slider-container");
wrapper ? ReactDOM.render(<SliderContainer />, wrapper) : false;