import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';
import BallisticsTable from './ballistics-table';

export default class Charts extends React.Component {
  render() {
    return (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <BallisticsChart />
            <div className="mt-5">
              <BallisticsTable />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={8} lg={6}>
            <p className="text-center">
              Note: These are baseline figures for reference using a 100-yard zero. Actual performance will vary based on type of ammunition, rifle, and weather conditions.
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
