import React from "react";
import PropTypes from "prop-types";
import { CREATE_USER } from "../../common/buttonActions";
import { BiPlus } from "react-icons/bi";
import "./addButton.css";
import Modal from "react-modal";
import CreateUser from "../../components/modalOptions/createUser/CreateUser";
import CreateTask from "../../components/modalOptions/createTask/CreateTask";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function AddButton({ action }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal} className="add-button flex-center">
        <BiPlus />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="title-container">
          <h1>{action}</h1>
        </div>

        <form>
          <div className="modal-content-container">
            {action === CREATE_USER ? <CreateUser /> : <CreateTask />}
          </div>
          <div className="buttons-container">
            <button className="button-seconday" onClick={closeModal}>
              CANCEL
            </button>
            <button className="button-primary">{action}</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

AddButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default AddButton;
