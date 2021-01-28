import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import AppContext from '../lib/app-context';

export default class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      adjustment: '',
      bulletDrop: ''
    };
    this.handleChangeDistance = this.handleChangeDistance.bind(this);
    this.handleChangeAdjustment = this.handleChangeAdjustment.bind(this);
  }

  handleChangeDistance(e) {
    this.setState({
      distance: e.target.value
    });
  }

  handleChangeAdjustment(e) {
    this.setState({
      adjustment: e.target.value
    });
  }

  render() {
    return (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={8} lg={6}>
            <p className="text-center">
              {`Enter distance and ${this.context.units} scope adjustment to calculate bullet drop, or enter distance and bullet drop to calculate ${this.context.units} scope adjustment.`}
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center my-5">
          <Col md={6} className="d-flex justify-content-center">
            <Form>
              <Form.Group controlId="distance">
                <Form.Label>Distance (yds)</Form.Label>
                <div className="d-flex">
                  <Form.Control className="w-50 mr-2 dark" value={this.state.distance} onChange={this.handleChangeDistance} />
                  <div className="w-50 ml-2"></div>
                </div>
              </Form.Group>
              <Form.Group controlId="adjustment">
                <Form.Label>{this.context.units}</Form.Label>
                <div className="d-flex">
                  <Form.Control className="w-50 mr-2 dark" value={this.state.adjustment} onChange={this.handleChangeAdjustment} />
                  <button className="general-button w-50 ml-2">CALCULATE</button>
                </div>
              </Form.Group>
              <Form.Group controlId="distance">
                <Form.Label className="mr-3">Bullet Drop (in)</Form.Label>
                <div className="d-flex">
                  <Form.Control className="w-50 mr-2 dark" />
                  <button className="general-button w-50 ml-2">CALCULATE</button>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

Calculate.contextType = AppContext;
