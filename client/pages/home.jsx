import React, { useState, useContext } from 'react';
import AppContext from '../lib/app-context';
import UnitsModal from '../components/units-modal';
import SafetyModal from '../components/safety-modal';
import DataTabs from '../components/data-tabs';

export default function Home() {
  const [showUnitsModal, setShowUnitsModal] = useState(false);
  const [showSafetyModal, setShowSafetyModal] = useState(false);

  const { units, changeUnits } = useContext(AppContext);

  function handleChangeUnits(e) {
    changeUnits(e.target.textContent);
    e.target.blur();
  }

  function toggleUnitsModal() {
    setShowUnitsModal(prev => !prev);
  }

  function toggleSafetyModal() {
    setShowSafetyModal(prev => !prev);
  }

  return (
    <>
      <header>
        <div className="overlay d-flex flex-column align-items-center justify-content-around">
          <img src="./bblogo.png" alt="Ballistics Buddy logo" />
          <div className="text-center">
            <p>Select Units:</p>
            <button className={`mr-3 general-button units-button${units === 'MOA' ? ' selected' : ''}`} onClick={handleChangeUnits}>MOA</button>
            <button className={`general-button units-button${units === 'MRAD' ? ' selected' : ''}`} onClick={handleChangeUnits}>MRAD</button>
            <div className="d-flex justify-content-center">
              <div className="units-question mt-3" onClick={toggleUnitsModal}>?</div>
            </div>
          </div>
          <div>
            <p className="m-0 text-center">Remember to always use</p>
            <p className="safe-shooting m-0 text-center" onClick={toggleSafetyModal}>Safe Shooting Practices</p>
          </div>
        </div>
      </header>
      <UnitsModal show={showUnitsModal} toggle={toggleUnitsModal} />
      <SafetyModal show={showSafetyModal} toggle={toggleSafetyModal} />
      {units && <DataTabs />}
    </>
  );
}
