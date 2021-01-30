import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';
import BallisticsTable from './ballistics-table';

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caliber: '.223 Remington'
    };
    this.handleChangeCaliber = this.handleChangeCaliber.bind(this);
  }

  handleChangeCaliber(e) {
    this.setState({
      caliber: e.target.value
    });
  }

  render() {
    const dummyData = {
      caliber: '.308 Winchester',
      ballisticsData: [
        {
          distance: 0,
          bulletDrop: 1.5
        },
        {
          distance: 100,
          bulletDrop: 0
        },
        {
          distance: 200,
          bulletDrop: 4
        },
        {
          distance: 300,
          bulletDrop: 14
        },
        {
          distance: 400,
          bulletDrop: 32
        },
        {
          distance: 500,
          bulletDrop: 59
        },
        {
          distance: 600,
          bulletDrop: 96
        },
        {
          distance: 700,
          bulletDrop: 145
        },
        {
          distance: 800,
          bulletDrop: 208
        },
        {
          distance: 900,
          bulletDrop: 289
        },
        {
          distance: 1000,
          bulletDrop: 390
        }
      ]
    };

    const dummyData2 = {
      caliber: '.338 Lapua Magnum',
      ballisticsData: [
        {
          distance: 0,
          bulletDrop: 1.5
        },
        {
          distance: 100,
          bulletDrop: 0
        },
        {
          distance: 200,
          bulletDrop: 2
        },
        {
          distance: 300,
          bulletDrop: 8
        },
        {
          distance: 400,
          bulletDrop: 24
        },
        {
          distance: 500,
          bulletDrop: 47
        },
        {
          distance: 600,
          bulletDrop: 79
        },
        {
          distance: 700,
          bulletDrop: 110
        },
        {
          distance: 800,
          bulletDrop: 150
        },
        {
          distance: 900,
          bulletDrop: 195
        },
        {
          distance: 1000,
          bulletDrop: 250
        }
      ]
    };

    return (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={8} lg={6} className="d-flex justify-content-center">
            <Form>
              <Form.Group>
                <Form.Label>Caliber</Form.Label>
                <Form.Control as="select" className="dark" value={this.state.caliber} onChange={this.handleChangeCaliber}>
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
            <BallisticsChart caliber1Data={dummyData} caliber2Data={dummyData2} />
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
