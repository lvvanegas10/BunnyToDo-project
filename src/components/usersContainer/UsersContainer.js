import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUsers } from "../../redux/actions/userActions";
import { changeSelectedUser } from "../../redux/actions/selectedUser";
import { CREATE_USER } from "../../common/buttonActions";
import { USER } from "../../common/cardsTypes";
import CardsContainer from "../../ui/cardsContainer/CardsContainer";

function UsersContainer({ users, loadUsers, changeSelectedUser }) {
  /** Load the products */
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
        onClickItem={changeSelectedUser}
        textProperty="name"
        emptyListMessage="There are no users yet"
      />
    </div>
  );
}

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  changeSelectedUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadUsers,
  changeSelectedUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
