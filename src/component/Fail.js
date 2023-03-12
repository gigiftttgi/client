import { Container, Button, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Fail() {
  return (
    <div>
      {" "}
      <Container>
        <br />
        <br />
        <h3 class="text-center">
          Sorry, you are not qualified for this club/activities
        </h3>

        <h5 class="text-center">Please join another Club/Activities</h5>
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

export default Fail;
