import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';

export default class Charts extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <p>Charts</p>
            <BallisticsChart />
          </Col>
        </Row>
      </>
    );
  }
}
