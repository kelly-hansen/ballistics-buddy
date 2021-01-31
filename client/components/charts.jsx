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
      caliber1Data: null,
      compare: false,
      caliber2: null,
      caliber2Data: null
    };
    this.handleChangeCaliber1 = this.handleChangeCaliber1.bind(this);
    this.handleChangeCaliber2 = this.handleChangeCaliber2.bind(this);
    this.handleChangeCompareSwitch = this.handleChangeCompareSwitch.bind(this);
  }

  handleChangeCaliber1(e) {
    this.getBallisticsData(e.target.value, 'caliber1');
    this.setState({
      caliber1: e.target.value
    });
  }

  handleChangeCaliber2(e) {
    this.getBallisticsData(e.target.value, 'caliber2');
    this.setState({
      caliber2: e.target.value
    });
  }

  handleChangeCompareSwitch(e) {
    this.setState({
      compare: !this.state.compare
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
                  <Form.Control as="select" className="dark" value={this.state.caliber1} onChange={this.handleChangeCaliber1}>
                    <option value=".223 Remington">.223 Remington</option>
                    <option value=".300 Win Mag">.300 Win Mag</option>
                    <option value=".308 Winchester">.308 Winchester</option>
                    <option value="6.5mm Creedmoor">6.5mm Creedmoor</option>
                    <option value=".50 BMG">.50 BMG</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="switch"
                    id="compare-switch"
                    label="Compare"
                    onChange={this.handleChangeCompareSwitch}
                  />
                </Form.Group>
                {this.state.compare && (
                  <Form.Group>
                    <Form.Control as="select" className="dark" value={this.state.caliber2} onChange={this.handleChangeCaliber2}>
                      <option value="" disabled selected>Select to compare</option>
                      <option value=".223 Remington">.223 Remington</option>
                      <option value=".300 Win Mag">.300 Win Mag</option>
                      <option value=".308 Winchester">.308 Winchester</option>
                      <option value="6.5mm Creedmoor">6.5mm Creedmoor</option>
                      <option value=".50 BMG">.50 BMG</option>
                    </Form.Control>
                  </Form.Group>
                )}
              </Form>
            </Col>
          </Row>
          <Row className="mt-5 d-flex justify-content-center">
            <Col md={9} lg={6} className="mb-5">
              <BallisticsChart caliber1Data={this.state.caliber1Data} caliber2Data={this.state.compare ? this.state.caliber2Data : null} />
            </Col>
            {!this.state.compare && (
              <Col md={9} lg={6}>
              <BallisticsTable caliber1Data={this.state.caliber1Data} />
            </Col>
            )}
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
