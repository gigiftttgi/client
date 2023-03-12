import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Member() {
  const href = window.location.pathname.split("/");
  const id = href[2];
  const form = href[1];
  let cont = [];
  const [member, setMember] = useState([]);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/member", {
      id: id,
      form: form,
    }).then((res) => {
      console.log(res.data);
      setMember(res.data);
    });
  }, []);

  function printMember() {
    let inform = [];
    let row = [];
    var phone;
    var email;
    member.map((item) => {
      inform.push(
        <Row>
          <Col>
            <p>{item}</p>
          </Col>
        </Row>
      );
    });
    return inform;
  }

  return (
    <div>
      <Container>
        <br />
        <h4>Member</h4>
        <hr />
        {printMember()}
      </Container>
      <Container>
        <Link to={`/${form}/${id}`}>
          <Button variant="outline-secondary ">Go back</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Member;
