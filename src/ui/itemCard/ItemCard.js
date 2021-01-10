import React from "react";
import PropTypes from "prop-types";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import "./itemCard.css";

function ItemCard({ id, text, onClickItem }) {
  function handleOnClickItem(event, id) {
    event.preventDefault();
    if (onClickItem && id) {
      onClickItem(id);
    }
  }

  return (
    <div
      className="item-card-container"
      onClick={(event) => handleOnClickItem(event, id)}
    >
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
  id: PropTypes.string.isRequired,
  onClickItem: PropTypes.func,
};

export default ItemCard;
