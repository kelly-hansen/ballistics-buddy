import React from 'react';
import { Button } from 'react-bootstrap';
import UnitsModal from '../components/units-modal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUnitsModal: false
    };
    this.toggleUnitsModal = this.toggleUnitsModal.bind(this);
  }

  toggleUnitsModal() {
    this.setState({
      showUnitsModal: !this.state.showUnitsModal
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
              <Button variant="light" className="mr-3">MOA</Button>
              <Button variant="light">MRAD</Button>
              <div>
                <Button variant="light" className="mt-3" onClick={this.toggleUnitsModal}>?</Button>
              </div>
            </div>
            <div>
              <p className="m-0 text-center">Remember to always use</p>
              <p className="safe-shooting m-0 text-center">Safe Shooting Practices</p>
            </div>
          </div>
        </header>
        <UnitsModal show={this.state.showUnitsModal} toggle={this.toggleUnitsModal} />
      </>
    );
  }
}
