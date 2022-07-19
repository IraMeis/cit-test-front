import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

const ModalError = ({handleCloseErr, errorMess, show, head}) => {
  return (
      <Modal show={show} onHide={handleCloseErr} backdrop="static">
          <Modal.Header>
              <Modal.Title>{head != null ? head : "Something went wrong..."}</Modal.Title>
              <button type="button" className="close" data-dismiss="modal" onClick={handleCloseErr}>
                  <span aria-hidden="true">&times;</span>
              </button>
          </Modal.Header>
          <Modal.Body>{errorMess}</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseErr}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>
  );
}

export default ModalError;
