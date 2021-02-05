import React from 'react';
import { Modal } from 'react-bootstrap';

export default function SafetyModal(props) {
  return (
    <Modal show={props.show} onHide={props.toggle} >
      <Modal.Header closeButton>
        <Modal.Title>Safe Shooting Practices</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            Always keep the muzzle pointed in a safe direction
          </li>
          <li>
            Keep your finger off the trigger until ready to shoot
          </li>
          <li>
            Keep firearms unloaded when not in use
          </li>
          <li>
            Use proper eye and ear protection when shooting
          </li>
          <li>
            Be sure of your target and what&#39;s beyond it
          </li>
          <li>
            Know how to operate the firearm safely
          </li>
          <li>
            Only use the correct ammunition for your firearm
          </li>
          <li>
            Never use alcohol, over-the-counter or prescription drugs when shooting
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
