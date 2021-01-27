import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

export default class DataTabs extends React.Component {
  render() {
    return (
      <Container className="data-tabs-cont pt-5">
        <Row>
          <Col>
            <Tabs defaultActiveKey="calculate">
              <Tab eventKey="calculate" title="Calculate">

              </Tab>
              <Tab eventKey="reference-data" title="Reference Data">

              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}
