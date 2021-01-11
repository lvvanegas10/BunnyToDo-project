import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { loadUserTasks } from "../../redux/actions/userTasksActions";
import { connect } from "react-redux";
import { CREATE_TASK } from "../../common/buttonActions";
import { TASK } from "../../common/cardsTypes";
import CardsContainer from "../../ui/cardsContainer/CardsContainer";

/**
 * User task container
 */
function TasksContainer({ selectedUser, tasks, loadUserTasks }) {
  /**
   * Load user task
   */
  useEffect(() => {
    if (selectedUser) {
      loadUserTasks(selectedUser).catch((error) => {
        alert("Loading user tasks failed" + error);
      });
    }
  }, [selectedUser]);

  return (
    <div>
      <CardsContainer
        type={TASK}
        buttonAction={CREATE_TASK}
        items={tasks || []}
        textProperty="description"
        showAddButton={selectedUser ? true : false}
        emptyListMessage={
          selectedUser
            ? "The user do not have any task yet."
            : "No user selected."
        }
      />
    </div>
  );
}
TasksContainer.propTypes = {
  tasks: PropTypes.array,
  selectedUser: PropTypes.string,
  loadUserTasks: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser,
    tasks: state.tasks,
  };
}

const mapDispatchToProps = {
  loadUserTasks,
};
export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
