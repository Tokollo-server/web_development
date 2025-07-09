import React from "react";
import { Modal, Button } from "react-bootstrap";

const HelpModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shipping Help</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Intercity Auto Movers</strong> Delivered in 5-7 business days.
          Suitable for routine purchases.
        </p>
        <p>
          <strong>Wise Move:</strong> Delivered in 1-2 business days. Ideal for
          urgent needs.
        </p>
        <p>For further assistance, contact our support at help@autohaus.com.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HelpModal;
