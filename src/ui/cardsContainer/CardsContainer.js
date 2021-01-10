import React from "react";
import AddButton from "../addButton/AddButton";
import ItemCard from "../itemCard/ItemCard";
import PropTypes from "prop-types";

function CardsContainer({ type, buttonAction, items }) {
  return (
    <div>
      <div className="title-container">
        <h1 className="upper-case">{type}</h1>
        <AddButton action={buttonAction} />
      </div>
      <div className="cards-container">
        {items.length ? (
          items.map((user) => {
            return <ItemCard key={user.id} text={user.name} />;
          })
        ) : (
          <div className="text-light">{`There are no ${type}  yet`}</div>
        )}
      </div>
    </div>
  );
}

CardsContainer.propTypes = {
  type: PropTypes.string.isRequired,
  buttonAction: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CardsContainer;
