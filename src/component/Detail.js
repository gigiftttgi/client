import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

function Detail() {
  const href = window.location.pathname.split("/");
  const id = href[2];
  const form = href[1];
  const [detail, setDetail] = useState([]);
  const d = [];

  //   function getDetail() {
  //     Axios.post("http://localhost:3001/detail", {
  //       id: id,
  //       form: form,
  //     }).then((res) => {
  //       d.push(res.data[0].Name);
  //       console.log(res.data[0]);
  //       console.log(typeof res.data[0].Name);
  //       setDetail(res.data[0]);
  //     });
  //     //.then((d) => detail.push(d[0]));
  //   }

  //   getDetail();

  //   console.log(d);

  useEffect(() => {
    Axios.post("https://uptight-wasp-bell-bottoms.cyclic.app/detail", {
      id: id,
      form: form,
    }).then((res) => {
      setDetail(res.data);
    });
  }, []);

  function getDetail() {
    let inform = [];
    let age;
    var m = 0;
    var url = "";
    var url2 = "";
    var urlmem = "";
    var text = "Full";
    detail.map((item) => {
      if (item.Age == 0) {
        age = "All";
      } else {
        age = item.Age + " UP";
      }
      console.log(item.Member);
      if (item.Member != "") {
        let mm = item.Member.split(",");
        m = mm.length;
      }

      if (m != item.Max) {
        if (form == "Clubs") url = `/Clubs/${item.ID}/Join`;
        else url = `/Activities/${item.ID}/Join`;
        text = "Join us now";
      }

      if (form == "Clubs") {
        url2 = `/Clubs/${item.ID}/Member`;
      } else {
        url2 = `/Clubs/${item.ID}/Member`;
      }

      inform.push(
        <Container>
          <br />
          <h2>{item.Name}</h2>
          <hr />
          <Row>
            <Col>
              <h4>Detail</h4>
              <p class="fs-5">{item.Description}</p>
              <br />
              <h4>Qualification</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p class="fs-6">Age</p>
                    </Col>
                    <Col>
                      <p class="fs-6"> {age}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p class="fs-6">Gender</p>
                    </Col>
                    <Col>
                      <p class="fs-6">{item.Gender}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p class="fs-6">Faculty</p>
                    </Col>
                    <Col>
                      <p class="fs-6">{item.Faculty}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p class="fs-6">Year</p>
                    </Col>
                    <Col>
                      <p class="fs-6">{item.Year}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p class="fs-6">Own Computer</p>
                    </Col>
                    <Col>
                      <p class="fs-6">{item.Computer}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p class="fs-6">Communication Skill</p>
                    </Col>
                    <Col>
                      <p class="fs-6">{item.CommunicationSkill}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h4>Member</h4>
              <Row>
                <Col>
                  <p class="fs-5">
                    {m}/{item.Max}
                  </p>
                </Col>

                <Col>
                  <Link to={url2} class="text-decoration-none">
                    <div class="d-grid gap-2">See members</div>
                  </Link>
                </Col>
              </Row>

              <br />
              <Row>
                <Col>
                  <Link to={`/${form}`} class="text-decoration-none">
                    <div class="d-grid gap-2">
                      <Button variant="outline-secondary">Go back</Button>
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to={url} class="text-decoration-none">
                    <div class="d-grid gap-2">
                      <Button variant="outline-primary">{text}</Button>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    });
    return inform;
  }

  return <div>{getDetail()}</div>;
}

export default Detail;
