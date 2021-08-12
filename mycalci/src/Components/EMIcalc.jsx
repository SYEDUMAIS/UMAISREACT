import react, { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import "../Components/EMIcalc.css";

export const EMIcalc = () => {
  // -----------Use State Declaration------------//
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi, setEmi] = useState(0);
  const handleCalEMI = () => {
    const Si = (p * n * r) / 100;
    const repayamount = Number(p) + Number(Si);
    const emilocal = repayamount / (n * 12);
    setEmi(emilocal);
  };

  // Componentdidupdate or componentwillupdate
  useEffect(()=>{
    handleCalEMI();
  },[p,n,r])

  return (
    <div className="mainClass">
      <Container className="inputfileds">
        <h1>EMI CALCULATOR</h1>
        <Row>
          <Col sm={2}>
            <label>
              <b>Principle Amount:</b>
            </label>
            <Form.Control
              type="number"
              onChange={(e) => setP(e.target.value)}
            />
            <label>
              <b>Number of days (N):</b>
            </label>
            <Form.Control
              type="number"
              onChange={(e) => setN(e.target.value)}
            />
            <label>
              <b>Rate of Intrest (R):</b>
            </label>
            <Form.Control
              type="number"
              onChange={(e) => setR(e.target.value)}
            />
            <br />
            <Button Variant="Primary" onClick={handleCalEMI}>
              <b>Calculate EMI</b>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="inputfileds">
        <Row>
          <Col sm={2}>
            <label>
              <b>EMI Amount:</b>
            </label>
            <h5>{emi}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
