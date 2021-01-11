import React from "react";
import PropTypes from "prop-types";
import { BiPlus } from "react-icons/bi";
import "./addButton.css";
import CustomModal from "../customModal/CustomModal";

function AddButton({ action }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal} className="add-button flex-center">
        <BiPlus />
      </div>

      <CustomModal
        action={action}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

AddButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default AddButton;
