import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

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
    Axios.post("http://localhost:3001/detail", {
      id: id,
      form: form,
    }).then((res) => {
      setDetail(res.data);
    });
  }, []);

  console.log(detail);

  function getDetail() {
    let inform = [];
    detail.map((item) => {
      inform.push(
        <Container>
          <br />
          <h2>{item.Name}</h2>
          <hr />
          <Row>
            <Col>
              <h4>Detail</h4>
              <p>{item.Description}</p>
            </Col>
            <Col>
              <h4>Qualification </h4>
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
