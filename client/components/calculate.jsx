import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
      </>
    );
  }
}
