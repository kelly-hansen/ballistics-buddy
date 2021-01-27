import React from 'react';
import { Button } from 'react-bootstrap';
import UnitsModal from '../components/units-modal';
import SafetyModal from '../components/safety-modal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUnitsModal: false,
      showSafetyModal: false
    };
    this.setUnits = this.setUnits.bind(this);
    this.toggleUnitsModal = this.toggleUnitsModal.bind(this);
    this.toggleSafetyModal = this.toggleSafetyModal.bind(this);
  }

  setUnits(e) {
    this.props.setUnits(e.target.textContent);
  }

  toggleUnitsModal() {
    this.setState({
      showUnitsModal: !this.state.showUnitsModal
    });
  }

  toggleSafetyModal() {
    this.setState({
      showSafetyModal: !this.state.showSafetyModal
    });
  }

  render() {
    return (
      <>
        <header>
          <div className="overlay d-flex flex-column align-items-center justify-content-around">
            <img src="./bblogo.png" alt="Ballistics Buddy logo" />
            <div className="text-center">
              <p>Select Units:</p>
              <Button variant="light" className="mr-3 units-btn" onClick={this.setUnits}>MOA</Button>
              <Button variant="light" className="units-btn" onClick={this.setUnits}>MRAD</Button>
              <div>
                <Button variant="light" className="mt-3" onClick={this.toggleUnitsModal}>?</Button>
              </div>
            </div>
            <div>
              <p className="m-0 text-center">Remember to always use</p>
              <p className="safe-shooting m-0 text-center" onClick={this.toggleSafetyModal}>Safe Shooting Practices</p>
            </div>
          </div>
        </header>
        <UnitsModal show={this.state.showUnitsModal} toggle={this.toggleUnitsModal} />
        <SafetyModal show={this.state.showSafetyModal} toggle={this.toggleSafetyModal} />
      </>
    );
  }
}
