import React, { useRef } from "react";
import PropTypes from "prop-types";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import "./itemCard.css";
import CustomModal from "../customModal/CustomModal";
import { DELETE_USER } from "../../common/buttonActions";
import { DONE, TO_DO } from "../../common/tasksStates";

const DELETE = "DELETE";
const UPDATE = "UPDATE";

/**
 * Card item
 */
function ItemCard({ type, item, text, onClickItem, isSelected = false }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [actionModal, setActionModal] = React.useState(DELETE_USER);
  const itemCardRef = useRef(null);

  /**
   * Open modal for delete and edit card
   */
  function openModal(event, action, id) {
    event.preventDefault();
    setIsOpen(true);
    setActionModal(action);
    if (onClickItem && id) {
      onClickItem(id);
    }
  }

  /**
   * Close modal
   */
  function closeModal() {
    setIsOpen(false);
  }

  /**
   * Get action name
   */
  function getAction(modalType) {
    return modalType + " " + type.toUpperCase();
  }

  /**
   * On click item
   */
  function handleOnClickItem(event, id) {
    if (event.target === itemCardRef.current && onClickItem && id) {
      onClickItem(id);
    }
  }

  /**
   * Get the color of the card border
   */
  function getColorCard() {
    if (item && item.state === TO_DO) {
      return "item-card-to-do";
    } else if (item && item.state === DONE) {
      return "item-card-done";
    } else if (isSelected) {
      return "item-card-selected";
    }
  }

  return (
    <div
      className={"item-card-container " + getColorCard()}
      onClick={(event) => handleOnClickItem(event, item.id)}
      ref={itemCardRef}
    >
      {text}
      <div className="item-card-icons">
        <HiPencilAlt
          className="item-card-icon"
          onClick={(event) => {
            openModal(event, getAction(UPDATE), item.id);
          }}
        />
        <HiTrash
          className="item-card-icon"
          onClick={(event) => {
            openModal(event, getAction(DELETE), item.id);
          }}
        />
      </div>

      <CustomModal
        item={item}
        action={actionModal}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

ItemCard.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickItem: PropTypes.func,
};

export default ItemCard;
