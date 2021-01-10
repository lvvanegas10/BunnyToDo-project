import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

it("The header should contain Logo and ShoppingCartButton", () => {
  const wrapper = shallow(<Header />);
  const logoElement = wrapper.find("Logo");
  const childrenLength = wrapper.children().length;

  expect(logoElement.length).toEqual(1);
  expect(childrenLength).toEqual(2);
});
