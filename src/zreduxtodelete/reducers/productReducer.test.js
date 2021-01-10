import productReducer from "./productReducer";
import * as actions from "../actions/productActions";

it("Should load the products", () => {
  const products = [
    {
      id: 0,
      name: "Milk",
    },
    {
      id: 1,
      name: "Pizza",
    },
  ];

  const action = actions.loadProductsSuccess(products);
  const newState = productReducer([], action);

  expect(newState.length).toEqual(2);
  expect(newState[0].id).toEqual(0);
  expect(newState[1].id).toEqual(1);
});
