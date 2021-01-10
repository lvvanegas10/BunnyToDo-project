import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addProductToShoppingCart,
  deleteProductFromShoppingCart,
} from "../../redux/actions/shoppingCartActions";
import { formatPrice } from "../../common/priceCalculator";
import "./productDetail.css";
import ProductImageView from "../common/productImageView/ProductImageView";

/** CONSTANTS */
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

/** Show product detail when user clicks store product */
export function ProductDetail({
  selectedProduct,
  addProductToShoppingCart,
  deleteProductFromShoppingCart,
}) {
  const [product, setProduct] = useState(selectedProduct);

  /** Update product */
  useEffect(() => {
    setProduct(selectedProduct);
  }, [selectedProduct]);

  /** Handle click on add or remove item from cart */
  function handleClickNumberItems(event, action) {
    event.preventDefault();
    action === ADD_ITEM
      ? addProductToShoppingCart(product)
      : deleteProductFromShoppingCart(product);
  }

  return (
    <div>
      {product.id ? (
        <>
          <h1>Product</h1>
          <ProductImageView
            image={product.image}
            numberOfItems={product.numberOfItems}
          />
          <div className="productDetails-generalDetails">
            <span className="productDetails-name">{product.name}</span>
            <span className="productDetails-price">
              $ {formatPrice(parseInt(product.price))}
            </span>

            <button
              className="productDetails-button productDetails-button-add"
              onClick={(event) => handleClickNumberItems(event, ADD_ITEM)}
            >
              +
            </button>
            <button
              className="productDetails-button productDetails-button-remove"
              onClick={(event) => handleClickNumberItems(event, REMOVE_ITEM)}
            >
              -
            </button>
          </div>
          <div className="productDetails-description text-light">
            <div>{product.description}</div>
          </div>
        </>
      ) : (
        <>
          <h1></h1>
          <p className="text-light">Please choose a product on the left</p>
        </>
      )}
    </div>
  );
}

ProductDetail.propTypes = {
  selectedProduct: PropTypes.object,
  addProductToShoppingCart: PropTypes.func.isRequired,
  deleteProductFromShoppingCart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  let selectedProduct = state.selectedProduct;
  let productOnShoppingCart = state.shoppingCart[selectedProduct.id];

  /** Set the current number of items from shopping cart */
  let numberOfItems = productOnShoppingCart
    ? productOnShoppingCart.numberOfItems
    : 0;
  return {
    selectedProduct: { ...selectedProduct, numberOfItems },
    numberOfItems,
  };
}

const mapDispatchToProps = {
  addProductToShoppingCart,
  deleteProductFromShoppingCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
