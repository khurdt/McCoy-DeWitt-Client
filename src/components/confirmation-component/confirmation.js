import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Slash, Trash } from "react-feather";

export default function Confirmation(props) {
  const { confirmationInfo, setShowConfirmation, showConfirmation, primaryColor } = props;
  const { title, action, _id } = confirmationInfo;

  const handleClose = () => setShowConfirmation(false);
  const handleShow = () => setShowConfirmation(true);

  return (
    <Modal show={showConfirmation} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
        <Row>
          <Col className="m-3">
            <Button style={{ width: '120px', borderColor: primaryColor, }} variant='light' onClick={handleClose}>
              <span className="m-3">No</span>
              <Slash width={15} height={15} />
            </Button>
          </Col>
          <Col className="m-3">
            <Button style={{ width: '120px' }} variant="danger" onClick={() => { action(_id); handleClose(); }} >
              <span className="m-3">Yes</span>
              <Trash width={15} height={15} />
            </Button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}