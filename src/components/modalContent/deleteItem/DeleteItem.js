import React from "react";
import PropTypes from "prop-types";
import "./deleteItem.css";

/**
 * Delete user or task modal
 */
function DeleteItem({ action }) {
  return (
    <div className="modal-content-delete">{`Are you sure you want to ${action}?`}</div>
  );
}

DeleteItem.propTypes = {
  action: PropTypes.string.isRequired,
};

export default DeleteItem;
