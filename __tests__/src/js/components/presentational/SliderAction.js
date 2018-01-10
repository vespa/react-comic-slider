import React from "react";
import SliderAction from "presentational/SliderAction";

import renderer from 'react-test-renderer';

it('should render correctly', () => {
 let fakeFunc = ()=> {}
 const component = renderer.create(
    <SliderAction text="http://www.facebook.com" action={fakeFunc} />
  );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();

});