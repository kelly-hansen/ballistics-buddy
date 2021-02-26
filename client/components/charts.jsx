import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import BallisticsChart from './ballistics-chart';
import BallisticsTable from './ballistics-table';

export default function Charts() {
  const [status, setStatus] = useState(null);
  const [caliber1, setCaliber1] = useState('.223 Remington');
  const [caliber1Data, setCaliber1Data] = useState(null);
  const [compare, setCompare] = useState(false);
  const [caliber2, setCaliber2] = useState('compare');
  const [caliber2Data, setCaliber2Data] = useState(null);

  function handleChangeCaliber1(e) {
    getBallisticsData(e.target.value, 'caliber1');
    setCaliber1(e.target.value);
  }

  function handleChangeCaliber2(e) {
    getBallisticsData(e.target.value, 'caliber2');
    setCaliber2(e.target.value);
  }

  function handleChangeCompareSwitch() {
    setCompare(prev => !prev);
  }

  async function getBallisticsData(caliber, designation) {
    const response = await fetch('/api/ballistics-data', {
      headers: {
        'Content-Type': 'application/json',
        caliber: caliber
      }
    });
    if (!response.ok) {
      console.error(response.status);
      setStatus('error');
    } else {
      const result = await response.json();
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
        setCaliber1Data(caliberData);
        setStatus('loaded');
      } else if (designation === 'caliber2') {
        setCaliber2Data(caliberData);
      }
    }
  }

  useEffect(() => {
    getBallisticsData('.223 Remington', 'caliber1');
  }, []);

  let content;
  if (!status) {
    content = (
      <Row className="mt-5">
        <Col className="mt-5 d-flex justify-content-center">
          <Spinner animation="grow" variant="light" />
        </Col>
      </Row>
    );
  } else if (status === 'error') {
    content = (
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <p className="text-center">
            Unable to retrieve ballistics data at this time
          </p>
        </Col>
      </Row>
    );
  } else if (status === 'loaded') {
    content = (
      <>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={8} lg={6} className="d-flex justify-content-center">
            <Form>
              <Form.Group>
                <Form.Label>Caliber</Form.Label>
                <Form.Control as="select" className="dark" value={caliber1} onChange={handleChangeCaliber1}>
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
                  onChange={handleChangeCompareSwitch}
                />
              </Form.Group>
              {compare && (
                <Form.Group>
                  <Form.Control
                    as="select"
                    className="dark"
                    value={caliber2}
                    onChange={handleChangeCaliber2}
                  >
                    <option value="compare" disabled>Select to compare</option>
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
            <BallisticsChart caliber1Data={caliber1Data} caliber2Data={compare ? caliber2Data : false} />
          </Col>
          {!compare && (
            <Col md={9} lg={6}>
            <BallisticsTable caliber1Data={caliber1Data} />
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
