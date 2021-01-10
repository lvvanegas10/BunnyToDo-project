import React from "react";
import ProductItemShoppingCart from "./ProductItemShoppingCart";
import { shallow, mount } from "enzyme";

const defaultProps = {
  product: {
    image: "http://fake-image.com",
    numberOfItems: 3,
  },
};

function renderProductItemStore(args) {
  const props = { ...defaultProps, ...args };
  return shallow(<ProductItemShoppingCart {...props} />);
}

function renderMountProductItemStore(args) {
  const props = { ...defaultProps, ...args };
  return mount(<ProductItemShoppingCart {...props} />);
}

it("The Item should contain an NumberOfItemsView", () => {
  const wrapper = renderProductItemStore();
  const product = wrapper.find("NumberOfItemsView");
  expect(product.length).toEqual(1);
});

it("Product should have image and number of items", () => {
  const wrapper = renderMountProductItemStore();
  const imageElement = wrapper.find("img");
  const numberOfItemsElementes = wrapper.find(".numberOfItems");

  expect(imageElement.length).toEqual(1);
  expect(numberOfItemsElementes.length).toEqual(1);
  expect(imageElement.prop("src")).toEqual(defaultProps.product.image);
  expect(numberOfItemsElementes.text()).toEqual("3");
});
