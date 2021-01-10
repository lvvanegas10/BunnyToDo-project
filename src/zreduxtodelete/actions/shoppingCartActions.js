import * as types from "./actionTypes";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------

/** Action creator: ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS*/
export function addProductToShoppingCartSuccess(product) {
  return { type: types.ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS, product };
}

/** Action creator: DELETE_PRODUCT_FROM_SHOPPING_CART_SUCCESS*/
export function deleteProductFromShoppingCartSuccess(product) {
  return {
    type: types.DELETE_PRODUCT_FROM_SHOPPING_CART_SUCCESS,
    product,
  };
}

//------------------------------------------------------------------
// Actions
//------------------------------------------------------------------

/** Add product to shopping cart */
export function addProductToShoppingCart(product) {
  return function (dispatch) {
    return dispatch(addProductToShoppingCartSuccess(product));
  };
}

/** Delete product to shopping cart */
export function deleteProductFromShoppingCart(product) {
  return function (dispatch) {
    return dispatch(deleteProductFromShoppingCartSuccess(product));
  };
}
