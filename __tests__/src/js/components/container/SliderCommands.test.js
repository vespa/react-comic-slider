import React, { Component } from "react";

import {configure, shallow, mount} from 'enzyme';
import SliderCommands from "container/SliderCommands";
import SliderAction from "presentational/SliderAction";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('SliderCommands', () => {
    let fakeFunc = ()=> {
        return true;
    };
    const comp = shallow(
        <SliderCommands 
            func={fakeFunc} 
            position={0}
            lastPosition={999} 
        />
    )


    it('should find 4 buttons', ()=>{
        expect(comp.find(SliderAction).length).toEqual(4);
    });

    it('should test current position and return 0', ()=>{
        expect(comp.instance().state.position).toEqual(0);
    });

    it('should modify position to 1', ()=>{
        comp.instance().next();
        expect(comp.instance().state.position).toEqual(1);
    });

    it('should modify position to 999', ()=>{
        comp.instance().goFirst();
        expect(comp.instance().state.position).toEqual(999);
    });

    it('should modify position to 998', ()=>{
        comp.setProps({ position: 999 });
        comp.instance().goPrevious();
        expect(comp.instance().state.position).toEqual(998);
    });

    it('should not return -1', ()=>{
        comp.setProps({ position: 0 });
        comp.instance().goPrevious();
        expect(comp.instance().state.position).toEqual(0);
    });

    it('should modify position to 0', ()=>{
        comp.setProps({ position: 999 });
        comp.instance().goLast();
        expect(comp.instance().state.position).toEqual(0);
    })

    it('should return 999', ()=>{
        comp.setProps({ position: 999 });
        comp.instance().next();
        expect(comp.instance().state.position).toEqual(999);
    })

    it('should avoid test if a callback is required', ()=>{comp.instance().func()
        expect(comp.instance().func()).toEqual(true);
        comp.setProps({ func: false });
        comp.instance().setCallback();
        expect(comp.instance().func()).toEqual(false);
    })
    
});