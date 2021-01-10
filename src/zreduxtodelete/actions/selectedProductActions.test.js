import * as selectedProductActions from "./selectedProductActions";
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
    it("should UPDATE_SELECTED_PRODUCT", () => {
      const product = products[0];
      const expectedActions = [
        { type: types.UPDATE_SELECTED_PRODUCT, product },
      ];

      const store = mockStore({ products: [] });
      store.dispatch(selectedProductActions.updateSelectedProduct(product));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
