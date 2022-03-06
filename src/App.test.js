import App from "./App";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("sample test", () => {
  const wrapper = shallow(<App />);
  //console.log(wrapper.debug());

  expect(wrapper.length).toEqual(1);
  expect(wrapper.exists()).toBe(true);
});
