import React from "react";
import Logo from "../../ui/logo/Logo";
import "./header.css";
/** Header container */
function Header() {
  return (
    <div id="header" className="flex-center">
      <Logo />
      BunnyToDo
    </div>
  );
}

export default Header;
