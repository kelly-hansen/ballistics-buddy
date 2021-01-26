import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home(props) {
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
              <Button variant="light" className="mt-3">?</Button>
            </div>
          </div>
          <div>
            <p className="m-0 text-center">Remember to always use</p>
            <p className="safe-shooting m-0 text-center">Safe Shooting Practices</p>
          </div>
        </div>
      </header>
    </>
  );
}
