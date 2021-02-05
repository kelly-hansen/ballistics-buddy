import React, { useState } from 'react';
import AppContext from './lib/app-context';
import Home from './pages/home';

export default function App() {
  const [units, setUnits] = useState(null);

  function changeUnits(units) {
    setUnits(units);
  }

  const contextValue = {
    units,
    changeUnits
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Home />
    </AppContext.Provider>
  );
}
