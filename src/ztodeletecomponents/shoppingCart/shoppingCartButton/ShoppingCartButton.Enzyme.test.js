import React from "react";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { mount } from "enzyme";

const defaultProps = {
  price: "1000",
  history: {
    location: {
      pathname: "/",
    },
  },
};

const paymentPath = "/payment-with-wompi";

function renderStore(args) {
  const props = { ...defaultProps, ...args };
  return mount(<ShoppingCartButton {...props} />);
}

it("Shopping button when is not active  ", () => {
  const wrapper = renderStore();
  const activeElement = wrapper.find(".shoppingCart-button-active");
  const closeButton = wrapper.find(".shoppingCart-button-close");

  expect(activeElement.length).toEqual(0);
  expect(closeButton.length).toEqual(0);
});

it("Shopping button when is not active  ", () => {
  const history = {
    location: {
      pathname: paymentPath,
      push: jest.fn(),
    },
  };
  const wrapper = renderStore({ history });
  const activeElement = wrapper.find(".shoppingCart-button-active");
  const closeButton = wrapper.find(".shoppingCart-button-close");

  expect(activeElement.length).toEqual(1);
  expect(closeButton.length).toEqual(1);
});
