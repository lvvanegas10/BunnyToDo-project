import React from "react";
import PropTypes from "prop-types";
import "./productItemStore.css";
import ProductImageView from "../../common/productImageView/ProductImageView";

/** Represent a product show in the Store */
function ProductItemStore({ product, isSelected, updateSelectedProduct }) {
  /** Handle click on product */
  function handleClick(event) {
    event.preventDefault();
    updateSelectedProduct(product);
  }

  return (
    <>
      <div
        className={
          "store-product" + (isSelected ? " store-product-selected" : "")
        }
        onClick={handleClick}
      >
        <ProductImageView
          image={product.image}
          numberOfItems={product.numberOfItems}
          showItemsIfCero={false}
        />
      </div>
    </>
  );
}

ProductItemStore.propTypes = {
  product: PropTypes.object.isRequired,
  updateSelectedProduct: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

ProductItemStore.defaultProps = {
  isSelected: false,
};

export default ProductItemStore;
