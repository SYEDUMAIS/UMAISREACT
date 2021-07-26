import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Layout/Layoutgrid.css";

export const Gridlayout = () => {
  return (
    <div>
      <Container >
        <Row>
          <Col>
            <input type="text" placeholder="Fisrt Name" />
          </Col>
          <Col>
            <input type="text" placeholder="Middle Name" />
          </Col>
          <Col>
            <input type="text" placeholder="Last Name" />
          </Col>
          <Col>
            <input type="text" placeholder="Full Name" />
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="text" placeholder="Mobile No" />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};
