import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for the product selected to show in productDetail*/
export default function selectedProductReducer(
  state = initialState.selectedProduct,
  action
) {
  switch (action.type) {
    /**
     * Update the selected product for productDetail
     */
    case types.UPDATE_SELECTED_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
