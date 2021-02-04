import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Charts from './charts';
import Calculate from './calculate';

export default function DataTabs() {
  const [view, setView] = useState('CHARTS');

  const tabsRef = React.createRef();

  function changeTabs(e) {
    e.target.blur();
    setView(e.target.textContent);
  }

  useEffect(() => {
    window.scrollTo(0, tabsRef.current.getBoundingClientRect().y);
  }, []);

  return (
    <Container className="data-tabs-cont pt-5" ref={tabsRef}>
      <Row>
        <Col className="d-flex justify-content-end">
          <button
            className={`general-button tab-button${view === 'CHARTS' ? ' selected' : ''}`}
            onClick={changeTabs}
          >
            CHARTS
          </button>
        </Col>
        <Col className="d-flex justify-content-start">
          <button
            className={`general-button tab-button${view === 'CALCULATE' ? ' selected' : ''}`}
            onClick={changeTabs}
          >
            CALCULATE
          </button>
        </Col>
      </Row>
      {view === 'CHARTS' && <Charts />}
      {view === 'CALCULATE' && <Calculate />}
    </Container>
  );
}
