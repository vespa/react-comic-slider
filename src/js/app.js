import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from '../css/main.scss'
import 'babel-polyfill'
import SliderContainer from 'container/SliderContainer';
import Filters from 'container/Filters';

const wrapper = document.getElementById("root");

const app = ()=>{
	const itemClass = "app__item";
	return 	<div className="app">
				<div className={itemClass+" app__header"}>header</div>
				<SliderContainer className={itemClass+" app__body"} />
				<Filters className={itemClass+" app__side app__side--right"} />
			</div>
}
wrapper ? ReactDOM.render(app(), wrapper) : false;