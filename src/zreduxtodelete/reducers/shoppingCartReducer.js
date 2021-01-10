import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {
  addLocalStorageProp,
  getLocalStorageProp,
} from "../../common/localStorageManager";

/** Shopping cart key for local storage */
const SHOPPING_CART = "SHOPPING_CART";

/** Reducer for shopping cart*/
export default function shoppingCartReducer(
  state = getLocalStorageProp(SHOPPING_CART) || initialState.shoppingCart,
  action
) {
  /** Copies for state and product  */
  let product = { ...action.product };
  let newState = { ...state };

  switch (action.type) {
    /**
     * Add a product to the shopping cart
     * If the product exists already on the cart, add an item
     **/
    case types.ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS:
      if (!state[product.id]) {
        product.numberOfItems = 1;
      } else {
        product.numberOfItems = state[product.id].numberOfItems + 1;
      }
      newState = { ...state, [product.id]: product };
      addLocalStorageProp(SHOPPING_CART, newState);
      return newState;

    /**
     * Remove a product to the shopping cart
     * If it is only one item left, remove the product from the cart*/
    case types.DELETE_PRODUCT_FROM_SHOPPING_CART_SUCCESS:
      if (state[product.id] && state[product.id].numberOfItems === 1) {
        delete newState[product.id];
      } else if (state[product.id] && state[product.id].numberOfItems !== 0) {
        product.numberOfItems = state[product.id].numberOfItems - 1;
        newState = { ...state, [product.id]: product };
      }
      addLocalStorageProp(SHOPPING_CART, newState);
      return newState;
    default:
      return state;
  }
}
