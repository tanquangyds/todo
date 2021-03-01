import React, { useState } from "react";

import * as CardForm from "./CardForm.styled";

const Card = (props) => {
  const { task, deleteCard } = props;
  const handleDeleteCard = () => {
    deleteCard(task.id);
  };
  return (
    <CardForm.Warp>
        <CardForm.Body>
          <CardForm.Title>{task.title}</CardForm.Title>
          <CardForm.Subtitle>{task.creator}</CardForm.Subtitle>
          <CardForm.Desc>{task.desc}</CardForm.Desc>
        </CardForm.Body>
        <CardForm.Delete onClick={handleDeleteCard}>Delete Card</CardForm.Delete>
      </CardForm.Warp>
  );
};

export default Card;
