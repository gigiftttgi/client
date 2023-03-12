import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Act() {
  const [acts, setActs] = useState([]);
  useEffect(() => {
    fetch("https://uptight-wasp-bell-bottoms.cyclic.app/act")
      .then((res) => res.json())
      .then((result) => {
        setActs(result);
      });
  }, []);

  function printCard() {
    let inform = [];
    let row = [];

    acts.forEach((item, idx) => {
      if (row.length === 3) {
        row = [];
      }
      // push column
      row.push(
        <Col sm={4} key={item.id}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text className="text-truncate">
                {item.Description}
              </Card.Text>
              <Link to={`/Activities/${item.ID}`} class="float-end">
                <Button variant="outline-primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );

      // force wrap to next row every 4 columns
      if ((idx + 1) % 3 === 0) {
        inform.push(<Row className="space">{row}</Row>);
      }
      if (idx + 1 === acts.length) {
        inform.push(<Row className="space">{row}</Row>);
      }
    });

    return inform;
  }

  return (
    <div>
      <Container>
        <h1>Activities</h1>
      </Container>
      <Container>{printCard()}</Container>
    </div>
  );
}

export default Act;
