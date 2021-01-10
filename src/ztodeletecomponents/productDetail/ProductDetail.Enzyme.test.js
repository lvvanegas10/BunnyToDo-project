import React from "react";
import { ProductDetail } from "./ProductDetail";
import { mount } from "enzyme";
import { formatPrice } from "../../common/priceCalculator";

const defaultProps = {
  selectedProduct: {
    id: 1,
    name: "Milk",
    price: "1000",
    description: "Lorem ipsum",
    image: "http://fake-image.com",
    numberOfItems: 3,
  },
  addProductToShoppingCart: jest.fn(),
  deleteProductFromShoppingCart: jest.fn(),
};

function renderStore(args) {
  const props = { ...defaultProps, ...args };
  return mount(<ProductDetail {...props} />);
}

it("All properties should exists when a product is selected", () => {
  const wrapper = renderStore();

  const numberOfItemsElement = wrapper.find(".numberOfItems");
  const imageElement = wrapper.find(".productImageView-container > img");
  const priceElement = wrapper.find(".productDetails-price");
  const descriptionElement = wrapper.find(".productDetails-description");
  const nameElement = wrapper.find(".productDetails-name");

  expect(parseInt(numberOfItemsElement.text())).toEqual(
    defaultProps.selectedProduct.numberOfItems
  );
  expect(imageElement.prop("src")).toEqual(defaultProps.selectedProduct.image);
  expect(priceElement.text()).toEqual(
    "$ " + formatPrice(defaultProps.selectedProduct.price)
  );
  expect(descriptionElement.text()).toEqual(
    defaultProps.selectedProduct.description
  );
  expect(nameElement.text()).toEqual(defaultProps.selectedProduct.name);
});

it("Message when no product is selected", () => {
  const wrapper = renderStore({ selectedProduct: {} });

  const titleElement = wrapper.find("h1");
  const contentElement = wrapper.find("p");

  expect(titleElement.text()).toEqual("");
  expect(contentElement.text()).toEqual("Please choose a product on the left");
});
