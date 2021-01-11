import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  CREATE_TASK,
  CREATE_USER,
  UPDATE_TASK,
  UPDATE_USER,
  DELETE_TASK,
  DELETE_USER,
} from "../../common/buttonActions";
import { TO_DO, DONE } from "../../common/tasksStates";
import CreateUser from "../../components/modalContent/createUser/CreateUser";
import CreateTask from "../../components/modalContent/createTask/CreateTask";
import DeleteItem from "../../components/modalContent/deleteItem/DeleteItem";

import {
  createUser,
  updateUser,
  deleteUser,
} from "../../redux/actions/userActions";
import { changeSelectedUser } from "../../redux/actions/selectedUser";
import {
  createUserTask,
  updateUserTask,
  emptyTaksStore,
  deleteUserTask,
} from "../../redux/actions/userTasksActions";

import "./customModal.css";

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

function CustomModal({
  item,
  selectedUser,
  modalIsOpen,
  action,
  closeModal,
  createUser,
  updateUser,
  deleteUser,
  changeSelectedUser,
  createUserTask,
  updateUserTask,
  deleteUserTask,
  emptyTaksStore,
}) {
  let primaryButtonClass = "button-primary";
  const [inputValue, setInputValue] = useState("");
  const [checked, setCheckedValue] = useState(false);

  function onInputChange(value) {
    setInputValue(value);
  }

  function onCheckedChange(value) {
    setCheckedValue(value);
  }

  function getContent(action) {
    switch (action) {
      case CREATE_USER:
        return <CreateUser onInputChange={onInputChange} />;
      case UPDATE_USER:
        return (
          <CreateUser
            inputInitialValue={item.name}
            onInputChange={onInputChange}
          />
        );
      case CREATE_TASK:
        return (
          <CreateTask
            onInputChange={onInputChange}
            onCheckedChange={onCheckedChange}
          />
        );
      case UPDATE_TASK:
        return (
          <CreateTask
            inputInitialValue={item.description}
            checkedInitialValue={item.state === DONE}
            onInputChange={onInputChange}
            onCheckedChange={onCheckedChange}
          />
        );
      case DELETE_USER:
        primaryButtonClass = "button-danger";
        return <DeleteItem action={action} />;
      case DELETE_TASK:
        primaryButtonClass = "button-danger";
        return <DeleteItem action={action} />;
      default:
        break;
    }
  }

  function validateInput() {
    return inputValue !== "";
  }

  function getState(checked) {
    if (checked) {
      return DONE;
    }
    return TO_DO;
  }

  function handleSubmit(event) {
    event.preventDefault();
    switch (action) {
      case CREATE_USER:
        if (validateInput()) {
          createUser(inputValue);
          closeModal();
        }
        break;
      case UPDATE_USER:
        if (validateInput(item.name)) {
          updateUser(item.id, inputValue);
          closeModal();
        }
        break;
      case DELETE_USER:
        deleteUser(item.id);
        changeSelectedUser(null);
        emptyTaksStore();
        closeModal();
        break;
      case CREATE_TASK:
        if (validateInput()) {
          createUserTask(selectedUser, inputValue, getState(checked));
          closeModal();
        }
        break;
      case UPDATE_TASK:
        if (validateInput()) {
          updateUserTask(item.id, selectedUser, inputValue, getState(checked));
          closeModal();
        }
        break;
      case DELETE_TASK:
        deleteUserTask(selectedUser, item.id);
        closeModal();
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={"Modal " + action}
        ariaHideApp={false}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="title-container">
          <h1>{action}</h1>
        </div>

        <div className="modal-content-container">{getContent(action)}</div>
        <div className="buttons-container">
          <button className="button-seconday" onClick={closeModal}>
            CANCEL
          </button>
          <button className={primaryButtonClass} onClick={handleSubmit}>
            {action}
          </button>
        </div>
      </Modal>
    </>
  );
}

CustomModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  item: PropTypes.object,
  changeSelectedUser: PropTypes.func.isRequired,
  emptyTaksStore: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  createUserTask: PropTypes.func.isRequired,
  updateUserTask: PropTypes.func.isRequired,
  deleteUserTask: PropTypes.func.isRequired,
  selectedUser: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
  };
}

const mapDispatchToProps = {
  createUser,
  updateUser,
  deleteUser,
  createUserTask,
  updateUserTask,
  deleteUserTask,
  emptyTaksStore,
  changeSelectedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
