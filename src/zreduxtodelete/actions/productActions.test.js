import * as productActions from "./productActions";
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
    it("should LOAD_PRODUCTS_SUCCESS when loading products", () => {
      fetchMock.mock("*", {
        body: products,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [{ type: types.LOAD_PRODUCTS_SUCCESS, products }];

      const store = mockStore({ products: [] });
      return store.dispatch(productActions.loadProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
