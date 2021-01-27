import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class DataTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'CALCULATE'
    };
    this.changeTabs = this.changeTabs.bind(this);
  }

  changeTabs(e) {
    this.setState({
      view: e.target.textContent
    });
  }

  render() {
    return (
      <Container className="data-tabs-cont pt-5" id="calculate-data">
        <Row>
          <Col className="d-flex justify-content-end">
            <button
              className={`tab-button${this.state.view === 'CALCULATE' ? ' selected' : ''}`}
              onClick={this.changeTabs}
            >
              CALCULATE
            </button>
          </Col>
          <Col className="d-flex justify-content-start">
            <button
              className={`tab-button${this.state.view === 'REFERENCE DATA' ? ' selected' : ''}`}
              onClick={this.changeTabs}
            >
              REFERENCE DATA
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
