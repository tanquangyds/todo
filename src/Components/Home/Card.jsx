import React from "react";
import* as Bs from 'react-bootstrap';

const Card = (props) => {
  const {task} = props
  return (
    <Bs.Card style={{ width: '18rem' }}>
    <Bs.Card.Body>
      <Bs.Card.Title>{task.title}</Bs.Card.Title>
      <Bs.Card.Subtitle className="mb-2 text-muted">{task.creator}</Bs.Card.Subtitle>
      <Bs.Card.Text>
        {task.desc}
      </Bs.Card.Text>
      <Bs.Card.Link href="#">Card Link</Bs.Card.Link>
      <Bs.Card.Link href="#">Another Link</Bs.Card.Link>
    </Bs.Card.Body>
  </Bs.Card>
  );
};

export default Card;
