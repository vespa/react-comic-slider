import React, { Component } from "react";

import {configure, shallow, mount} from 'enzyme';
import SliderContainer from "container/SliderContainer";
import SliderCommands from "container/SliderCommands";
import Slider from "presentational/Slider";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("SliderContainer", ()=>{
    const comp = shallow(<SliderContainer />);
    it("should find one SliderCommands", ()=>{
        expect(comp.find(SliderCommands).length).toEqual(1)
    }) 

    it("should find one Slider", ()=>{
        expect(comp.find(Slider).length).toEqual(1)
    })
})