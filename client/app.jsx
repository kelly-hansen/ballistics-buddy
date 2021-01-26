import React from 'react';
import Home from './pages/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: null
    };
  }

  render() {
    return <Home />;
  }
}
