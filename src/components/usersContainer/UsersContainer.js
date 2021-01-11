import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUsers } from "../../redux/actions/userActions";
import { changeSelectedUser } from "../../redux/actions/selectedUser";
import { CREATE_USER } from "../../common/buttonActions";
import { USER } from "../../common/cardsTypes";
import CardsContainer from "../../ui/cardsContainer/CardsContainer";

/**
 * Users container
 */
function UsersContainer({
  users,
  selectedUser,
  changeSelectedUser,
  loadUsers,
}) {
  /** Load the users */
  useEffect(() => {
    if (users.length === 0) {
      loadUsers().catch((error) => {
        alert("Loading users failed" + error);
      });
    }
  }, []);

  return (
    <div>
      <CardsContainer
        type={USER}
        buttonAction={CREATE_USER}
        items={users}
        textProperty="name"
        showAddButton={true}
        emptyListMessage="There are no users yet"
        selectedItem={selectedUser}
        onClickItem={changeSelectedUser}
      />
    </div>
  );
}

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.string,
  changeSelectedUser: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
  };
}

const mapDispatchToProps = {
  loadUsers,
  changeSelectedUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
