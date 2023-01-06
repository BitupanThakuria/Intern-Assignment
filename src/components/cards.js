import React from "react";
import { Card } from "react-bootstrap";

const cards = ({ person }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/person/${person.id}`}>
        <Card.Img src={person.avatar_url} />
      </a>
    </Card>
  );
};

export default cards;
