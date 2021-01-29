import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Charts from './charts';
import Calculate from './calculate';

export default class DataTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'CHARTS'
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
              className={`general-button tab-button${this.state.view === 'CHARTS' ? ' selected' : ''}`}
              onClick={this.changeTabs}
            >
              CHARTS
            </button>
          </Col>
          <Col className="d-flex justify-content-start">
            <button
              className={`general-button tab-button${this.state.view === 'CALCULATE' ? ' selected' : ''}`}
              onClick={this.changeTabs}
            >
              CALCULATE
            </button>
          </Col>
        </Row>
        {this.state.view === 'CHARTS' && <Charts />}
        {this.state.view === 'CALCULATE' && <Calculate />}
      </Container>
    );
  }
}
