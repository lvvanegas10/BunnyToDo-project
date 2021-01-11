import React from "react";
import AddButton from "../addButton/AddButton";
import ItemCard from "../itemCard/ItemCard";
import PropTypes from "prop-types";

function CardsContainer({
  type,
  buttonAction,
  items,
  textProperty,
  showAddButton,
  emptyListMessage,
  selectedItem,
  onClickItem,
}) {
  return (
    <div>
      <div className="title-container">
        <h1 className="upper-case">{type}</h1>
        {showAddButton ? <AddButton action={buttonAction} /> : <></>}
      </div>
      <div className="cards-container">
        {items.length ? (
          items.map((item) => {
            return (
              <ItemCard
                key={item.id}
                type={type}
                text={item[textProperty]}
                isSelected={item.id === selectedItem}
                onClickItem={onClickItem}
                item={item}
              />
            );
          })
        ) : (
          <div className="text-light">{emptyListMessage}</div>
        )}
      </div>
    </div>
  );
}

CardsContainer.propTypes = {
  type: PropTypes.string.isRequired,
  buttonAction: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  textProperty: PropTypes.string.isRequired,
  emptyListMessage: PropTypes.string,
  showAddButton: PropTypes.bool.isRequired,
  selectedItem: PropTypes.string,
  onClickItem: PropTypes.func,
};

export default CardsContainer;
