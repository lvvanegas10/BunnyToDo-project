import React from "react";
import { Store } from "./Store";
import { mount } from "enzyme";

const defaultProps = {
  products: [
    {
      id: 1,
      image: "http://fake-image.com",
      numberOfItems: 3,
    },
    {
      id: 2,
      image: "http://fake-image.com",
      numberOfItems: 3,
    },
  ],
  selectedProduct: {},
  loadProducts: jest.fn(),
  updateSelectedProduct: jest.fn(),
};

function renderStore(args) {
  const props = { ...defaultProps, ...args };
  return mount(<Store {...props} />);
}

it("The store should contain one ProductItemStore for each product and no one selected", () => {
  const wrapper = renderStore();
  const product = wrapper.find("ProductItemStore");
  const selectedProduct = wrapper.find(".store-product-selected");
  expect(product.length).toEqual(defaultProps.products.length);
  expect(selectedProduct.length).toEqual(0);
});

it("The store should contain one ProductItemStore for each product and one selected", () => {
  const selectedProduct = {
    id: 1,
    image: "http://fake-image.com",
    numberOfItems: 3,
  };
  const wrapper = renderStore({ selectedProduct });
  const product = wrapper.find("ProductItemStore");
  const selectedProductElement = wrapper.find(".store-product-selected");
  expect(product.length).toEqual(defaultProps.products.length);
  expect(selectedProductElement.length).toEqual(1);
});
