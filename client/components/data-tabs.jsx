import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class DataTabs extends React.Component {
  render() {
    return (
      <Container className="data-tabs-cont pt-5" id="calculate-data">
        <Row>
          <Col className="d-flex justify-content-center">
            <button className="tab-button">CALCULATE</button>
          </Col>
          <Col className="d-flex justify-content-center">
            <button className="tab-button">REFERENCE DATA</button>
          </Col>
        </Row>
      </Container>
    );
  }
}
