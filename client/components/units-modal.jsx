import React from 'react';
import { Modal } from 'react-bootstrap';

export default function UnitsModal(props) {
  return (
    <Modal show={props.show} onHide={props.toggle} >
      <Modal.Header closeButton>
        <Modal.Title>MOA vs MRAD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Modern scopes use one of two types of measurement units: MOA or MRAD.
        </p>
        <p>
          MOA (minute-of-angle) is an angular measurement based off the number of degrees in a circle (360), and the number of minutes in a degree (60). At a distance of 100 yards, one minute-of-angle equals 1.047 inches.
        </p>
        <p>
          MRAD (milliradians) is an angular measurement based off  the number of radians in a circle (6.2832), and the number of milliradians in a radian (1000). At a distance of 100 yards, one milliradian equals 3.6 inches.
        </p>
      </Modal.Body>
    </Modal>
  );
}
