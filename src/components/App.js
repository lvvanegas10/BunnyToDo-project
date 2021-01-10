import React from "react";
import Header from "./header/Header";
import "./App.css";
import UsersContainer from "./usersContainer/UsersContainer";
import TasksContainer from "./tasksContainer/TasksContainer";

/** Entry point component */
function App() {
  return (
    <>
      <Header />
      <div id="content-container">
        <UsersContainer />
        <TasksContainer />
      </div>
    </>
  );
}

export default App;
