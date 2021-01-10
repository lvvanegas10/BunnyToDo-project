import * as types from "./actionTypes";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------
/** Action creator: UPDATE_SELECTED_PRODUCT*/
export function updateSelectedProductSuccess(product) {
  return { type: types.UPDATE_SELECTED_PRODUCT, product };
}

//------------------------------------------------------------------
// Actions
//------------------------------------------------------------------

/** Update the product that is selected to show in ProductDetail */
export function updateSelectedProduct(product) {
  return function (dispatch) {
    return dispatch(updateSelectedProductSuccess(product));
  };
}
