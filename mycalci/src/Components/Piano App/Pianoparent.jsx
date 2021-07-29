import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Piano } from './Piano';
import { Audioplayer } from '../AudioPlayer/Audioplayer';

export const Pianoparent = () =>{
    return (
        <div>
            <Audioplayer />
            <Container className="Pianocontainer">
            <Card>
                <Row>
                    <Col lg={4}>
                        <label><h1>Low Tunes</h1></label>
                        <Piano />
                    </Col>
                    <Col lg={4}>
                    <label><h1>Medium Tunes</h1></label>
                        <Piano />
                    </Col>
                    <Col lg={4}>
                    <label><h1>High Tunes</h1></label>
                        <Piano />
                    </Col>
                </Row>
            </Card>
            </Container>
        </div>
    )
}