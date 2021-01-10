import * as shoppingCartActions from "./shoppingCartActions";
import * as types from "./actionTypes";
import { products } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load products Thunk", () => {
    it("should ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS", () => {
      const product = products[0];
      const expectedActions = [
        { type: types.ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS, product },
      ];

      const store = mockStore({ products: [] });
      store.dispatch(shoppingCartActions.addProductToShoppingCart(product));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("Load products Thunk", () => {
    it("should DELETE_PRODUCT_FROM_SHOPPING_CART_SUCCESS", () => {
      const product = products[0];
      const expectedActions = [
        { type: types.DELETE_PRODUCT_FROM_SHOPPING_CART_SUCCESS, product },
      ];

      const store = mockStore({ products: [] });
      store.dispatch(
        shoppingCartActions.deleteProductFromShoppingCart(product)
      );
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
