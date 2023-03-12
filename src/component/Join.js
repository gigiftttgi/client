import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Axios from "axios";

function Join() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [stID, setStID] = useState("0");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("");
  const [year, setYear] = useState("");
  const [commu, setCommu] = useState("0");
  const [com, setCom] = useState("");
  const [phone, setPhone] = useState("0");
  const [email, setEmail] = useState("");

  function addStudent() {
    console.log("add");
    Axios.post("http://localhost:3001/join", {
      name: name,
      age: age,
      stID: stID,
      gender: gender,
      faculty: faculty,
      year: year,
      commu: commu,
      com: com,
      phone: phone,
      email: email,
    }).then(() => {
      console.log("send complete");
    });
  }

  return (
    <div>
      <Container>Please fill out an application</Container>
      <Container>
        <Form>
          <h5>Information</h5>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    onChange={(event) => setAge(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="ID">
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Student ID"
                    onChange={(event) => setStID(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option>select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="Faculty">
                  <Form.Label>Faculty</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setFaculty(event.target.value)}
                  >
                    <option>select</option>
                    <option value="Faculty of Dentistry">
                      Faculty of Dentistry
                    </option>
                    <option value="Faculty of Nursing">
                      Faculty of Nursing
                    </option>
                    <option value="Faculty of Veterinary Science">
                      Faculty of Veterinary Science
                    </option>
                    <option value="Faculty of Agriculture">
                      Faculty of Agriculture
                    </option>
                    <option value="Faculty of Education">
                      Faculty of Education
                    </option>
                    <option value="Faculty of Science">
                      Faculty of Science
                    </option>
                    <option value="Faculty of Engineering">
                      Faculty of Engineering
                    </option>
                    <option value="Faculty of Architecture">
                      Faculty of Architecture
                    </option>
                    <option value="Else">Else</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Year">
                  <Form.Label>Year</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setYear(event.target.value)}
                  >
                    <option>select</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Super senior">Super senior</option>
                    <option value="Graduate Student">Graduate Student</option>
                    <option value="Master Student">Master Student</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="Commu">
                  <Form.Label>Communication Skill</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Rate your skill (1-5)"
                    onChange={(event) => setCommu(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Com">
                  <Form.Label>Own computer</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setCom(event.target.value)}
                  >
                    <option>select</option>
                    <option value="Have">Have</option>
                    <option value="Don'thave">Don'thave</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <h5>Contact</h5>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="Phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Container>
            <Button variant="primary" type="submit" onClick={addStudent}>
              Submit
            </Button>
          </Container>
        </Form>
      </Container>
    </div>
  );
}

export default Join;
