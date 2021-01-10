import React from "react";
import PropTypes from "prop-types";
import "./numberOfItemsView.css";

/** View of number of items */
function NumberOfItemsView({ numberOfItems }) {
  return <div className="numberOfItems flex-center-item">{numberOfItems}</div>;
}

NumberOfItemsView.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
};

export default NumberOfItemsView;
