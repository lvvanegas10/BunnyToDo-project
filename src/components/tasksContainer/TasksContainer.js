import React from "react";
import { CREATE_TASK } from "../../common/buttonActions";
import CardsContainer from "../../ui/cardsContainer/CardsContainer";
import { TASK } from "../../common/cardsTypes";

function TasksContainer() {
  return (
    <div>
      <CardsContainer type={TASK} buttonAction={CREATE_TASK} items={[]} />
    </div>
  );
}

export default TasksContainer;
