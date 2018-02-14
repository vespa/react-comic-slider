import React from "react";
import Slider from "presentational/Slider";

import renderer from 'react-test-renderer';
describe("Slider", ()=>{
  it('should render complete', () => {
  // let fakeFunc = ()=> {}
   const component = renderer.create(
          <Slider 
            currentImage = 'test.jpg'
            title = 'titulo'
            alt = 'alt'
            description = 'description'
            authors = {[{name:'name', description:'description'}]}
          />
    );
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
  });

  it('should render as loading', () => {
  // let fakeFunc = ()=> {}
   const component = renderer.create(
          <Slider 
            currentImage = ''
            title = 'titulo'
            alt = 'alt'
            description = 'description'
          />
    );
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();


  });
});
