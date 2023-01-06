import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = ({ person }) => {
  const [followers, setFollowers] = useState("0");
  const [repos, setRepos] = useState("0");
  const [organisation, setOrganisation] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(person.followers_url).then((response) => {
      console.log(response.data);
      setFollowers(response.data.length);
    });

    axios.get(person.organizations_url).then((response) => {
      console.log(response.data);
      setRepos(response.data.length);
    });

    axios.get(person.followers_url).then((response) => {
      console.log(response.data);
      setOrganisation(response.data.length);
    });
  };
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
          <ListGroup.Item>Organisation: {organisation}</ListGroup.Item>
          <ListGroup.Item>followers: {followers}</ListGroup.Item>
          <ListGroup.Item>Repos: {repos}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Cards;
