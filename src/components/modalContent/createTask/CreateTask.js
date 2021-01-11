import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Switch from "react-switch";

import "./createTask.css";

function CreateTask({
  onInputChange,
  onCheckedChange,
  inputInitialValue,
  checkedInitialValue,
}) {
  const [input, setInput] = useState(inputInitialValue || "");
  const [checked, setChecked] = useState(checkedInitialValue || false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onInputChange(inputInitialValue || "");
    onCheckedChange(checkedInitialValue || false);
  }, []);

  function onChange(event) {
    let value = event.target.value;
    onInputChange(value);
    setInput(value);
    if (value === "") {
      setError("Description should not be empty");
    } else {
      setError("");
    }
  }

  function onSwitchChange(val) {
    setChecked(val);
    onCheckedChange(val);
  }

  return (
    <>
      <input
        value={input}
        onChange={onChange}
        className="modal-input"
        placeholder="Task description..."
        maxLength="40"
      ></input>
      {error !== "" ? <div className="input-error">{error}</div> : <></>}
      <div className="modal-switch">
        State:
        <Switch onChange={onSwitchChange} checked={checked} />
      </div>
    </>
  );
}

CreateTask.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onCheckedChange: PropTypes.func,
  inputInitialValue: PropTypes.string,
  checkedInitialValue: PropTypes.bool,
};

export default CreateTask;
