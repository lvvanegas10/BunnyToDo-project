import React from "react";
import Logo from "./Logo";
import { shallow } from "enzyme";

it("The logo should contain an icon", () => {
  const wrapper = shallow(<Logo />);
  const logoElement = wrapper.find("RiShoppingBagFill");
  expect(logoElement.length).toEqual(1);
});
