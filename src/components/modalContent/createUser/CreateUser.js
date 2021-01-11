import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./createUser.css";

/**
 * Create user input
 */
function CreateUser({ onInputChange, inputInitialValue }) {
  const [error, setError] = useState(null);
  const [input, setInput] = useState(inputInitialValue || "");

  useEffect(() => {
    onInputChange(inputInitialValue || "");
  }, []);

  /**
   * Input validation
   */
  function onChange(event) {
    let value = event.target.value;
    onInputChange(value);
    setInput(value);
    if (value === "") {
      setError("Name should not be empty");
    } else {
      setError("");
    }
  }

  return (
    <>
      <input
        value={input}
        onChange={onChange}
        className="modal-input"
        placeholder="User name..."
        maxLength="30"
      ></input>
      {error !== "" ? <div className="input-error">{error}</div> : <></>}
    </>
  );
}

CreateUser.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputInitialValue: PropTypes.string,
};

export default CreateUser;
