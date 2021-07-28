import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Card, Form, FormLabel, Image, } from "react-bootstrap";
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
  const [bulbecondition, setBulbecondition] = useState("on");
  return (
    <div>
      {/* ----------------------User input fields------------------- */}
      <Container className="mainContain" style={{ border: "1px solid black" }}>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            {/* -------------Employee name details------------ */}
            <Row>
              {/* ----------First Name-------- */}
              <FormLabel><b>First Name:</b></FormLabel>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              ></Form.Control>
              {/* --------------Last name-------- */}
              <FormLabel><b>Last Name:</b></FormLabel>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              ></Form.Control>
              {/* --------------Qualification-------- */}
              <FormLabel><b>Qualification:</b></FormLabel>
              <Form.Control
                type="text"
                placeholder="Qualification"
              ></Form.Control>
              {/* --------------Date of birth-------- */}
              <FormLabel><b>DOB:</b></FormLabel>
              <Form.Control
                type="date"
                placeholder="Date Of Birth"
              ></Form.Control>
              {/* ------------Employee address details-------------- */}
              <FormLabel><b>Address:</b></FormLabel>
              {/* -------Line1 Address--------- */}
              <FormLabel><b>Line1:</b></FormLabel>
              <Form.Control
                type="text"
                placeholder="Line 1"
                onChange={(e) => setLine1(e.target.value)}
                value={line1}
              ></Form.Control>
              {/* -------Line2 Address--------- */}
              <FormLabel><b>Line2:</b></FormLabel>
              <Form.Control
                type="text"
                placeholder="Line 2"
                onChange={(e) => setLine2(e.target.value)}
                value={line2}
              ></Form.Control>
              {/* -------City details--------- */}
              <FormLabel><b>City:</b></FormLabel>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              ></Form.Control>
            </Row>
          </Col>
          <Col md={4}>
            {/* ---------Button and Image----------- */}
            <Row>
              <Col>
              <Button style={{ width: "120px" }}>Submit</Button>
              </Col>
              <Col md={1}>
              <img src="dev-ops.jpg" alt="" width="307" height="240" className="FormsImage" />
              </Col>
            </Row>
            {/* -----------Main Card printing automatically------------- */}
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
        {/* ------------Second Container---------- */}
      </Container>
      <Container className="secondarycontain">
        <label>MY IMAGES</label>
        <Row>
          <Col sm={2}>
          <Image src={`Assets/Bulbe${bulbecondition}.png`} alt="" className="BulbeONimage" 
          onClick={()=> bulbecondition === "off" ? setBulbecondition("on") : setBulbecondition("off")} />
        </Col>
        </Row>
      </Container>

      {/* -----------container 3----------------- */}
      <Container className="Navbar2">
        <Row>
          <Col sm={1}>
          <Image src={"BulbeOFF.png"} alt="" className="logoofelearn" />
          </Col>
          <Col sm={1}>
            <a href="/Home" className="navanchor1">Home</a>          
          </Col>
          <Col sm={1}>
            <a href="/Product" className="navanchor2">ProductCatalog</a>          
          </Col>
          <Col sm={1}>
            <a href="/Resources" className="navanchor3">Resources</a>          
          </Col>
          <Col sm={1}>
            <a href="/Contact" className="navanchor4">Contact Us</a>          
          </Col>
          <Col sm={1}>
            <a href="/About" className="navanchor5">About Us</a>          
          </Col>
          <Col sm={1}>
            <a href="/Forum" className="navanchor6">Forum</a>          
          </Col>
        </Row>

      </Container>
      
    </div>
  );
};
