import React from 'react';
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';
import BallisticsTable from './ballistics-table';

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      caliber1: '.223 Remington',
      caliber1Data: null
    };
    this.handleChangeCaliber = this.handleChangeCaliber.bind(this);
  }

  handleChangeCaliber(e) {
    this.getBallisticsData(e.target.value, 'caliber1');
    this.setState({
      caliber1: e.target.value
    });
  }

  getBallisticsData(caliber, designation) {
    fetch('/api/ballistics-data', {
      headers: {
        'Content-Type': 'application/json',
        caliber: caliber
      }
    })
      .then(res => res.json())
      .then(result => {
        const ballisticsData = result.map(dataItem => {
          return {
            distance: dataItem.distance,
            bulletDrop: parseFloat(dataItem.bulletDrop, 10)
          };
        });
        const caliberData = {
          caliber,
          ballisticsData
        };
        if (designation === 'caliber1') {
          this.setState({
            caliber1Data: caliberData,
            status: 'loaded'
          });
        } else if (designation === 'caliber2') {
          this.setState({
            caliber2Data: caliberData
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          status: 'error'
        });
      });
  }

  componentDidMount() {
    this.getBallisticsData('.223 Remington', 'caliber1');
  }

  render() {
    const dummyData2 = {
      caliber: '.338 Lapua Magnum',
      ballisticsData: [
        {
          distance: 0,
          bulletDrop: -1.5
        },
        {
          distance: 100,
          bulletDrop: 0
        },
        {
          distance: 200,
          bulletDrop: -2
        },
        {
          distance: 300,
          bulletDrop: -8
        },
        {
          distance: 400,
          bulletDrop: -24
        },
        {
          distance: 500,
          bulletDrop: -47
        },
        {
          distance: 600,
          bulletDrop: -79
        },
        {
          distance: 700,
          bulletDrop: -110
        },
        {
          distance: 800,
          bulletDrop: -150
        },
        {
          distance: 900,
          bulletDrop: -195
        },
        {
          distance: 1000,
          bulletDrop: -250
        }
      ]
    };

    let content;
    if (!this.state.status) {
      content = (
        <Row className="mt-5">
          <Col className="mt-5 d-flex justify-content-center">
            <Spinner animation="grow" variant="light" />
          </Col>
        </Row>
      );
    } else if (this.state.status === 'error') {
      content = (
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={8} lg={6}>
            <p className="text-center">
              Unable to retrieve ballistics data at this time
            </p>
          </Col>
        </Row>
      );
    } else if (this.state.status === 'loaded') {
      content = (
        <>
          <Row className="mt-5 d-flex justify-content-center">
            <Col md={8} lg={6} className="d-flex justify-content-center">
              <Form>
                <Form.Group>
                  <Form.Label>Caliber</Form.Label>
                  <Form.Control as="select" className="dark" value={this.state.caliber1} onChange={this.handleChangeCaliber}>
                    <option value=".223 Remington">.223 Remington</option>
                    <option value=".300 Win Mag">.300 Win Mag</option>
                    <option value=".308 Winchester">.308 Winchester</option>
                    <option value="6.5mm Creedmoor">6.5mm Creedmoor</option>
                    <option value=".50 BMG">.50 BMG</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5 d-flex justify-content-center">
            <Col md={9} lg={6} className="mb-5">
              <BallisticsChart caliber1Data={this.state.caliber1Data} caliber2Data={dummyData2} />
            </Col>
            <Col md={9} lg={6}>
              <BallisticsTable caliber1Data={this.state.caliber1Data} />
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

    return content;
  }
}
