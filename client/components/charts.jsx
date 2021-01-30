import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';
import BallisticsTable from './ballistics-table';

export default class Charts extends React.Component {
  render() {
    return (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={8} lg={6} className="d-flex justify-content-center">
            <Form>
              <Form.Group>
                <Form.Label>Caliber</Form.Label>
                <Form.Control as="select" className="dark">
                  <option value=".223 Remington">.223 Remington</option>
                  <option value=".300 Win Mag">.300 Win Mag</option>
                  <option value=".308 Winchester">.308 Winchester</option>
                  <option value="6.5mm Creedmoor">6.5mm Creedmoor</option>
                  <option value=".338 Lapua Magnum">.338 Lapua Magnum</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={9} lg={6} className="mb-5">
            <BallisticsChart />
          </Col>
          <Col md={9} lg={6}>
            <BallisticsTable />
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
