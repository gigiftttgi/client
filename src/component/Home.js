import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

function Home() {
  return (
    <div>
      <br />
      <br />
      <Container className="justify-content-md-center text-center">
        <h3>
          Want to amplify your college experience? Consider joining a student
          club!
        </h3>
      </Container>

      <br />

      {/* <Row className="space justify-content-md-center">
        <Col sm={5}> */}
      <Container>
        <p className="tab fs-5">
          All college students in various colleges have access to
          extracurricular activities. Some college club activities were also
          held by the IIMT Group of colleges. They’re usually held on campus,
          although they’re optional and don’t conflict with your regular
          classes. Social clubs, sports teams, student government, volunteering,
          and even an internship are examples of extracurricular activities.
        </p>
      </Container>
      {/* </Col>
        <Col sm={5}> */}
      <Container>
        <p className="tab fs-5">
          College club activities can give a resume more individuality and
          improve the overall quality of a student’s job application. An
          interview request may be more likely from an employer. If a student
          was extensively involved in their college debate team, for example, it
          may demonstrate their leadership potential. This shows you took
          initiative and went “above and beyond.” It also suggests you have some
          communication experience, which could be useful in this position.
        </p>
      </Container>
      {/* </Col>
      </Row> */}
      <br />
      <Row className="space justify-content-md-center">
        <Col sm={5}>
          <Link to={`/Clubs`} class="text-decoration-none">
            <div class="d-grid gap-2">
              <Button
                variant="outline-primary"
                type="submit"
                className="spacebtw"
              >
                Join Club
              </Button>
            </div>
          </Link>
        </Col>
        <Col sm={5}>
          <Link to={`/Activities`} class="text-decoration-none">
            <div class="d-grid gap-2">
              <Button
                variant="outline-primary"
                type="submit"
                className="spacebtw"
              >
                Join Activities
              </Button>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
