import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";

const cards = ({ person }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/person/${person.id}`}>
        <Card.Img src={person.avatar_url} variant="top" />
      </a>

      <Card.Body>
        <a href={`/person/${person.id}`}>
          <Card.Title as="div">
            <strong>{person.login}</strong>
          </Card.Title>
        </a>
        <ListGroup variant="flush">
          <ListGroup.Item>{person.followers_url}</ListGroup.Item>
          <ListGroup.Item>{person.repos_url}</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default cards;
