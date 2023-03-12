import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./style.css";

function Complete() {
  return (
    <div class="align-self-center">
      <Container>
        <br />
        <br />
        <h3 class="text-center">Congratulations</h3>
        <h5 class="text-center">
          You have successfully joined this club/activities
        </h5>
      </Container>
      <br />
      <div class="d-flex justify-content-center">
        {/* <Container> */}
        <Link to={`/Clubs`}>
          <Button variant="outline-primary" type="submit" className="spacebtw">
            Join another club
          </Button>
        </Link>
        <Link to={`/Activities`}>
          <Button variant="outline-primary" type="submit" className="spacebtw">
            Join another activities
          </Button>
        </Link>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default Complete;
