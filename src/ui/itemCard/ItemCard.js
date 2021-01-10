import React from "react";
import PropTypes from "prop-types";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import "./itemCard.css";

function ItemCard({ text }) {
  return (
    <div className="item-card-container">
      {text}
      <div className="item-card-icons">
        <HiPencilAlt className="item-card-icon" />
        <HiTrash className="item-card-icon" />
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ItemCard;
