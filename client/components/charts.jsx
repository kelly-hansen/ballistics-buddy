import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';

export default class Charts extends React.Component {
  render() {
    return (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <p className="text-center">
              Charts
            </p>
            <BallisticsChart />
          </Col>
        </Row>
      </>
    );
  }
}
