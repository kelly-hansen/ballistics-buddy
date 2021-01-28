import React from 'react';
import AppContext from '../lib/app-context';
import UnitsModal from '../components/units-modal';
import SafetyModal from '../components/safety-modal';
import DataTabs from '../components/data-tabs';

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
    this.context.setUnits(e.target.textContent);
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
              <a href="#calculate-data">
                <button className={`mr-3 units-button${this.context.units === 'MOA' ? ' selected' : ''}`} onClick={this.setUnits}>MOA</button>
              </a>
              <a href="#calculate-data">
                <button className={`units-button${this.context.units === 'MRAD' ? ' selected' : ''}`} onClick={this.setUnits}>MRAD</button>
              </a>
              <div className="d-flex justify-content-center">
                <div className="units-question mt-3" onClick={this.toggleUnitsModal}>?</div>
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
        {this.context.units && <DataTabs />}
      </>
    );
  }
}
Home.contextType = AppContext;
