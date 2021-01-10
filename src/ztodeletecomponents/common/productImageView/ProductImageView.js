import React from "react";
import PropTypes from "prop-types";
import "./productImageView.css";
import NumberOfItemsView from "../numberOfItemsView/NumberOfItemsView";

/** View of product shared by store and Product detail */
function ProductImageView({ image, numberOfItems, showItemsIfCero }) {
  return (
    <div className="productImageView-container flex-center-item">
      {showItemsIfCero || numberOfItems > 0 ? (
        <NumberOfItemsView numberOfItems={numberOfItems} />
      ) : (
        <></>
      )}
      <img src={image} />
    </div>
  );
}

ProductImageView.propTypes = {
  image: PropTypes.string.isRequired,
  numberOfItems: PropTypes.number.isRequired,
  showItemsIfCero: PropTypes.bool.isRequired,
};

ProductImageView.defaultProps = {
  showItemsIfCero: true,
};

export default ProductImageView;
