import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUsers } from "../../redux/actions/userActions";
import { CREATE_USER } from "../../common/buttonActions";
import { USER } from "../../common/cardsTypes";
import CardsContainer from "../../ui/cardsContainer/CardsContainer";

function UsersContainer({ users, loadUsers }) {
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
      <CardsContainer type={USER} buttonAction={CREATE_USER} items={users} />
    </div>
  );
}

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
