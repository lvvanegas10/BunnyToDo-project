import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for loading products*/
export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    /**
     * Reduce loaded products
     */
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
