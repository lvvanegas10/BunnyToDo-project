import React from "react";
import { ImUserCheck } from "react-icons/im";
import "./logo.css";

/** Logo Minimarket */
function Logo() {
  return (
    <div id="logo">
      <div id="hexagon" className="hex flex-center">
        <ImUserCheck />
      </div>
    </div>
  );
}

export default Logo;
