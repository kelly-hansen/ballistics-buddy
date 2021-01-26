import React from 'react';
import Home from './pages/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: null
    };
    this.setUnits = this.setUnits.bind(this);
  }

  setUnits(units) {
    this.setState({
      units
    });
  }

  render() {
    return <Home setUnits={this.setUnits} />;
  }
}
