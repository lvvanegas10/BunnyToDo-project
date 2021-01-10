import React from "react";
import { ShoopingCart } from "./ShoppingCart";
import { mount } from "enzyme";

const defaultProps = {
  products: [],
  loadProducts: jest.fn(),
  price: "1000",
};

function renderShoppingCart(args) {
  const props = { ...defaultProps, ...args };
  return mount(<ShoopingCart {...props} />);
}

it("Shopping cart is empty", () => {
  const loadProducts = function () {
    return {
      catch: jest.fn(),
    };
  };
  const wrapper = renderShoppingCart({ loadProducts });
  const container = wrapper.find(".shoppingCart-container");
  expect(container.length).toEqual(0);
});
