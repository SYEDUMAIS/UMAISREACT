import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "../../Reducer/EmployeeReducer";
import "../../components/Layout/Layoutgrid.css";
import { EmployeeReducer } from "../../Reducer/EmployeeReducer";

export const Layoutgrid = () => {
  const { firstname, lastname, LineNo1, LineNo2, CityName } =
    EmployeeReducer.Data[0];
  const [fname, setFname] = useState(firstname);
  const [lname, setLname] = useState(lastname);
  const [line1, setLine1] = useState(LineNo1);
  const [line2, setLine2] = useState(LineNo2);
  const [city, setCity] = useState(CityName);
  return (
    <div>
      <Container style={{ border: "1px solid black" }}>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <Row>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              ></Form.Control>
            </Row>
            <Row>
              <p>Address:</p>
              <Form.Control
                type="text"
                placeholder="Line 1"
                onChange={(e) => setLine1(e.target.value)}
                value={line1}
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Line 2"
                onChange={(e) => setLine2(e.target.value)}
                value={line2}
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              ></Form.Control>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Button style={{ width: "120px" }}>Submit</Button>
            </Row>
            <Card>
              <Row>
                <Col>{`${fname} ${lname}`}</Col>
              </Row>
              <Row>
                <Col> {`${line1}`} </Col>
              </Row>
              <Row>
                <Col> {`${line2}`} </Col>
              </Row>
              <Row>
                <Col> {`${city}`} </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
