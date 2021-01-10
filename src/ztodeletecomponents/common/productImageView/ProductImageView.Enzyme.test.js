import React from "react";
import ProductImageView from "./ProductImageView";
import { shallow } from "enzyme";

const defaultProps = {
  image: "http://fake-image.com",
  numberOfItems: 3,
  showItemsIfCero: false,
};

function renderProductImageView(args) {
  const props = { ...defaultProps, ...args };
  return shallow(<ProductImageView {...props} />);
}

it("If showItemsIfCero is false and number of items is different form cero", () => {
  const wrapper = renderProductImageView();
  const numberOfItemsElement = wrapper.find("NumberOfItemsView");
  const imageElement = wrapper.find("img");

  expect(numberOfItemsElement.length).toEqual(1);
  expect(imageElement.length).toEqual(1);
  expect(imageElement.prop("src")).toEqual(defaultProps.image);
});

it("If showItemsIfCero is false and number of items cero", () => {
  const wrapper = renderProductImageView({ numberOfItems: 0 });
  const numberOfItemsElement = wrapper.find("NumberOfItemsView");
  const imageElement = wrapper.find("img");

  expect(numberOfItemsElement.length).toEqual(0);
  expect(imageElement.length).toEqual(1);
  expect(imageElement.prop("src")).toEqual(defaultProps.image);
});

it("If showItemsIfCero is true and number of items cero", () => {
  const wrapper = renderProductImageView({
    numberOfItems: 0,
    showItemsIfCero: true,
  });
  const numberOfItemsElement = wrapper.find("NumberOfItemsView");
  const imageElement = wrapper.find("img");

  expect(numberOfItemsElement.length).toEqual(1);
  expect(imageElement.length).toEqual(1);
  expect(imageElement.prop("src")).toEqual(defaultProps.image);
});
