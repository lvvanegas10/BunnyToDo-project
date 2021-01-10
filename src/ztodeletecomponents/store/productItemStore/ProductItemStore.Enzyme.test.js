import React from "react";
import ProductItemStore from "./ProductItemStore";
import { shallow, mount } from "enzyme";

const defaultProps = {
  product: {
    image: "http://fake-image.com",
    numberOfItems: 3,
  },
  isSelected: false,
  updateSelectedProduct: jest.fn(),
};

function renderProductItemStore(args) {
  const props = { ...defaultProps, ...args };
  return shallow(<ProductItemStore {...props} />);
}

function renderMountProductItemStore(args) {
  const props = { ...defaultProps, ...args };
  return mount(<ProductItemStore {...props} />);
}

it("The Item should contain an ProductImageView", () => {
  const wrapper = renderProductItemStore();
  const product = wrapper.find("ProductImageView");
  expect(product.length).toEqual(1);
});

describe("The Item should display the image and the number of items if greater than 0", () => {
  it("... is NOT selected", () => {
    const wrapper = renderMountProductItemStore();
    const container = wrapper.find(".store-product-selected");
    const imageElement = wrapper.find("img");
    const numberOfItemsElementes = wrapper.find(".numberOfItems");
    const text = numberOfItemsElementes.text();

    expect(container.length).toEqual(0);
    expect(imageElement.length).toEqual(1);
    expect(numberOfItemsElementes.length).toEqual(1);
    expect(text).toEqual("3");
    expect(imageElement.prop("src")).toEqual(defaultProps.product.image);
  });

  it("... is selected", () => {
    const wrapper = renderMountProductItemStore({ isSelected: true });
    const container = wrapper.find(".store-product-selected");
    const imageElement = wrapper.find("img");
    const numberOfItemsElementes = wrapper.find(".numberOfItems");
    const text = numberOfItemsElementes.text();

    expect(container.length).toEqual(1);
    expect(imageElement.length).toEqual(1);
    expect(numberOfItemsElementes.length).toEqual(1);
    expect(text).toEqual("3");
    expect(imageElement.prop("src")).toEqual(defaultProps.product.image);
  });
});

describe("The Item should display the image and NOT the number of items if equal than 0", () => {
  const product = {
    image: "http://fake-image.com",
    numberOfItems: 0,
  };
  it("and is NOT selected", () => {
    const wrapper = renderMountProductItemStore({ product });
    const container = wrapper.find(".store-product-selected");
    const imageElement = wrapper.find("img");
    const numberOfItemsElementes = wrapper.find(".numberOfItems");

    expect(container.length).toEqual(0);
    expect(imageElement.length).toEqual(1);
    expect(numberOfItemsElementes.length).toEqual(0);
    expect(imageElement.prop("src")).toEqual(defaultProps.product.image);
  });

  it("and is selected", () => {
    const wrapper = renderMountProductItemStore({ product, isSelected: true });
    const container = wrapper.find(".store-product-selected");
    const imageElement = wrapper.find("img");
    const numberOfItemsElementes = wrapper.find(".numberOfItems");

    expect(container.length).toEqual(1);
    expect(imageElement.length).toEqual(1);
    expect(numberOfItemsElementes.length).toEqual(0);
    expect(imageElement.prop("src")).toEqual(defaultProps.product.image);
  });
});

it("On click should update selected product", () => {
  const updateSelectedProduct = jest.fn();
  const wrapper = renderMountProductItemStore({ updateSelectedProduct });
  wrapper.find(".store-product").simulate("click");
  expect(updateSelectedProduct).toHaveBeenCalled();
});
