import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default class Calculate extends React.Component {
  render() {
    return (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={6}>
            <p className="text-center">
              Enter distance and scope adjustment to calculate bullet drop, or enter distance and bullet drop to calculate scope adjustment.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center my-5">
          <Col md={6}>
            <Form inline className="d-flex justify-content-center">
              <Form.Group controlId="distance">
                <Form.Label className="mr-3">Distance (yds)</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group controlId="adjustment">
                <Form.Label className="mr-3">Distance (yds)</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group controlId="distance">
                <Form.Label className="mr-3">Distance (yds)</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}
