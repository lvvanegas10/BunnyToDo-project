import selectedProductReducer from "./selectedProductReducer";
import * as actions from "../actions/selectedProductActions";

it("Should load the products", () => {
  const initialProduct = {
    id: 0,
    name: "Milk",
  };
  const newProduct = {
    id: 1,
    name: "Pizza",
  };

  const action = actions.updateSelectedProductSuccess(newProduct);
  const newState = selectedProductReducer(initialProduct, action);

  expect(newState.id).toEqual(1);
  expect(newState.name).toEqual("Pizza");
});
