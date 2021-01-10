import React from "react";
import NumberOfItemsView from "./NumberOfItemsView";
import { shallow } from "enzyme";

it("The number of items should be correct", () => {
  const wrapper = shallow(<NumberOfItemsView numberOfItems={3} />);
  let text = wrapper.find("div").text();
  expect(text).toEqual("3");

  wrapper.setProps({ numberOfItems: 6 });
  text = wrapper.find("div").text();
  expect(text).toEqual("6");
});
