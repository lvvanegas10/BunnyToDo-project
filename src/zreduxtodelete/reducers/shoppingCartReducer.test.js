import shoppingCartReducer from "./shoppingCartReducer";
import * as actions from "../actions/shoppingCartActions";

it("Should add a product to the shopping cart - First products", () => {
  const initialState = {};
  const newProduct = {
    id: 1,
    name: "Pizza",
  };

  const action = actions.addProductToShoppingCartSuccess(newProduct);
  const newState = shoppingCartReducer(initialState, action);

  expect(newState[newProduct.id].id).toEqual(newProduct.id);
  expect(newState[newProduct.id].name).toEqual(newProduct.name);
  expect(newState[newProduct.id].numberOfItems).toEqual(1);
});

it("Should add a product to the shopping cart - Second item products", () => {
  const initialState = {
    1: {
      id: 1,
      name: "Pizza",
      numberOfItems: 1,
    },
  };
  const newProduct = {
    id: 1,
    name: "Pizza",
  };

  const action = actions.addProductToShoppingCartSuccess(newProduct);
  const newState = shoppingCartReducer(initialState, action);

  expect(newState[newProduct.id].id).toEqual(newProduct.id);
  expect(newState[newProduct.id].name).toEqual(newProduct.name);
  expect(newState[newProduct.id].numberOfItems).toEqual(2);
});

it("Should remove a product to the shopping cart - There are product items left", () => {
  const initialState = {
    1: {
      id: 1,
      name: "Pizza",
      numberOfItems: 4,
    },
  };
  const newProduct = {
    id: 1,
    name: "Pizza",
  };

  const action = actions.deleteProductFromShoppingCartSuccess(newProduct);
  const newState = shoppingCartReducer(initialState, action);

  expect(newState[newProduct.id].id).toEqual(newProduct.id);
  expect(newState[newProduct.id].name).toEqual(newProduct.name);
  expect(newState[newProduct.id].numberOfItems).toEqual(3);
});

it("Should remove a product to the shopping cart - There are NO product items left", () => {
  const initialState = {
    1: {
      id: 1,
      name: "Pizza",
      numberOfItems: 1,
    },
  };
  const newProduct = {
    id: 1,
    name: "Pizza",
  };

  const action = actions.deleteProductFromShoppingCartSuccess(newProduct);
  const newState = shoppingCartReducer(initialState, action);

  expect(newState).toEqual({});
});
