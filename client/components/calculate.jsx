import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import AppContext from '../lib/app-context';

export default class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      adjustment: '',
      bulletDrop: '',
      status: '',
      calculated: null
    };
    this.handleChangeDistance = this.handleChangeDistance.bind(this);
    this.handleChangeAdjustment = this.handleChangeAdjustment.bind(this);
    this.handleChangeBulletDrop = this.handleChangeBulletDrop.bind(this);
    this.calculateAdjustment = this.calculateAdjustment.bind(this);
    this.calculateBulletDrop = this.calculateBulletDrop.bind(this);
  }

  handleChangeDistance(e) {
    this.setState({
      distance: e.target.value,
      calculated: null
    });
  }

  handleChangeAdjustment(e) {
    this.setState({
      adjustment: e.target.value,
      calculated: null
    });
  }

  handleChangeBulletDrop(e) {
    this.setState({
      bulletDrop: e.target.value,
      calculated: null
    });
  }

  calculateAdjustment() {
    const distance = parseFloat(this.state.distance, 10);
    const bulletDrop = parseFloat(this.state.bulletDrop, 10);
    if (isNaN(distance) || isNaN(bulletDrop)) {
      this.setState({
        status: 'Please enter a number in the Distance and Bullet Drop fields.'
      });
      return;
    }
    let adjustment;
    const distanceMultiplier = distance / 100;
    if (this.context.units === 'MOA') {
      adjustment = bulletDrop / distanceMultiplier / 1.047;
    } else if (this.context.units === 'MRAD') {
      adjustment = bulletDrop / distanceMultiplier / 3.6;
    }
    adjustment = adjustment.toFixed(2);
    this.setState({
      adjustment,
      status: '',
      calculated: 'Adjustment'
    });
  }

  calculateBulletDrop() {
    const distance = parseFloat(this.state.distance, 10);
    const adjustment = parseFloat(this.state.adjustment, 10);
    if (isNaN(distance) || isNaN(adjustment)) {
      this.setState({
        status: `Please enter a number in the Distance and ${this.context.units} fields.`
      });
      return;
    }
    let bulletDrop;
    const distanceMultiplier = distance / 100;
    if (this.context.units === 'MOA') {
      bulletDrop = adjustment / distanceMultiplier * 1.047;
    } else if (this.context.units === 'MRAD') {
      bulletDrop = adjustment / distanceMultiplier * 3.6;
    }
    bulletDrop = bulletDrop.toFixed(2);
    this.setState({
      bulletDrop,
      status: '',
      calculated: 'Bullet Drop'
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
                  <Form.Control className={`w-50 mr-2 dark${this.state.calculated === 'Adjustment' ? ' calculated' : ''}`} value={this.state.adjustment} onChange={this.handleChangeAdjustment} />
                  <button className="general-button w-50 ml-2" onClick={this.calculateAdjustment}>CALCULATE</button>
                </div>
              </Form.Group>
              <Form.Group controlId="distance">
                <Form.Label className="mr-3">Bullet Drop (in)</Form.Label>
                <div className="d-flex">
                  <Form.Control className={`w-50 mr-2 dark${this.state.calculated === 'Bullet Drop' ? ' calculated' : ''}`} value={this.state.bulletDrop} onChange={this.handleChangeBulletDrop} />
                  <button className="general-button w-50 ml-2" onClick={this.calculateBulletDrop}>CALCULATE</button>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">{this.state.status}</p>
          </Col>
        </Row>
      </>
    );
  }
}

Calculate.contextType = AppContext;
