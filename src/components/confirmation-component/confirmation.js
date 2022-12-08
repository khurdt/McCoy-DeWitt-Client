import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Slash, Trash } from "react-feather";

export default function Confirmation(props) {
  const { confirmationInfo, setShowConfirmation, showConfirmation, handleRemove, primaryColor } = props;
  const { title, _id } = confirmationInfo;

  const handleClose = () => setShowConfirmation(false);
  const handleShow = () => setShowConfirmation(true);
  return (
    <Modal show={showConfirmation} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
        <Row>
          <Col className="m-4">
            <Button style={{ width: '150px', borderColor: primaryColor, }} variant='light' onClick={handleClose}>
              <span className="m-3">No</span>
              <Slash width={15} height={15} />
            </Button>
          </Col>
          <Col className="m-4">
            <Button style={{ width: '150px' }} variant="danger" onClick={() => { handleRemove(_id); handleClose(); }} >
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