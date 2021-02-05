import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import AppContext from '../lib/app-context';

export default function Calculate() {
  const [distance, setDistance] = useState('');
  const [adjustment, setAdjustment] = useState('');
  const [bulletDrop, setBulletDrop] = useState('');
  const [status, setStatus] = useState('');
  const [calculated, setCalculated] = useState(null);

  function handleChangeDistance(e) {
    setDistance(e.target.value);
    setCalculated(null);
  }

  function handleChangeAdjustment(e) {
    setAdjustment(e.target.value);
    setCalculated(null);
  }

  function handleChangeBulletDrop(e) {
    setBulletDrop(e.target.value);
    setCalculated(null);
  }

  const { units } = useContext(AppContext);

  function calculateAdjustment() {
    const distanceNum = parseFloat(distance, 10);
    const bulletDropNum = parseFloat(bulletDrop, 10);
    if (isNaN(distanceNum) || isNaN(bulletDropNum)) {
      setStatus('Please enter a number in the Distance and Bullet Drop fields.');
      return;
    }
    let adjustmentNum;
    const distanceMultiplier = distanceNum / 100;
    if (units === 'MOA') {
      adjustmentNum = bulletDropNum / distanceMultiplier / 1.047;
    } else if (units === 'MRAD') {
      adjustmentNum = bulletDropNum / distanceMultiplier / 3.6;
    }
    adjustmentNum = adjustmentNum.toFixed(2);
    setAdjustment(adjustmentNum);
    setStatus('');
    setCalculated('Adjustment');
  }

  function calculateBulletDrop() {
    const distanceNum = parseFloat(distance, 10);
    const adjustmentNum = parseFloat(adjustment, 10);
    if (isNaN(distanceNum) || isNaN(adjustmentNum)) {
      setStatus(`Please enter a number in the Distance and ${this.context.units} fields.`);
      return;
    }
    let bulletDropNum;
    const distanceMultiplier = distanceNum / 100;
    if (units === 'MOA') {
      bulletDropNum = adjustmentNum * distanceMultiplier * 1.047;
    } else if (units === 'MRAD') {
      bulletDropNum = adjustmentNum * distanceMultiplier * 3.6;
    }
    bulletDropNum = bulletDropNum.toFixed(2);
    setBulletDrop(bulletDropNum);
    setStatus('');
    setCalculated('Bullet Drop');
  }

  function formSubmit(e) {
    e.preventDefault();
  }

  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <p className="text-center">
            {`Enter Distance and ${units} scope adjustment to calculate Bullet Drop, or enter Distance and Bullet Drop to calculate ${units} scope adjustment.`}
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center my-5">
        <Col md={6} className="d-flex justify-content-center">
          <Form onSubmit={formSubmit}>
            <Form.Group controlId="distance">
              <Form.Label>Distance (yds)</Form.Label>
              <div className="d-flex">
                <Form.Control className="w-50 mr-2 dark" ref={inputRef} value={distance} onChange={handleChangeDistance} />
                <div className="w-50 ml-2"></div>
              </div>
            </Form.Group>
            <Form.Group controlId="adjustment">
              <Form.Label>{units}</Form.Label>
              <div className="d-flex">
                <Form.Control className={`w-50 mr-2 dark${calculated === 'Adjustment' ? ' calculated' : ''}`} value={adjustment} onChange={handleChangeAdjustment} />
                <button className="general-button w-50 ml-2" onClick={calculateAdjustment}>CALCULATE</button>
              </div>
            </Form.Group>
            <Form.Group controlId="distance">
              <Form.Label className="mr-3">Bullet Drop (in)</Form.Label>
              <div className="d-flex">
                <Form.Control className={`w-50 mr-2 dark${calculated === 'Bullet Drop' ? ' calculated' : ''}`} value={bulletDrop} onChange={handleChangeBulletDrop} />
                <button className="general-button w-50 ml-2" onClick={calculateBulletDrop}>CALCULATE</button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">{status}</p>
        </Col>
      </Row>
    </>
  );
}
