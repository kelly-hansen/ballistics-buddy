import React from 'react';
import AppContext from './lib/app-context';
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
    const contextValue = {
      units: this.state.units,
      setUnits: this.setUnits
    };

    return (
      <AppContext.Provider value={contextValue}>
        <Home />
      </AppContext.Provider>
    );
  }
}
