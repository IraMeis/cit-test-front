import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

const ModalError = (props) => {
  return (
      <Modal show={props.show} onHide={props.handleCloseErr} backdrop="static">
          <Modal.Header>
              <Modal.Title>{props.head != null ? props.head : "Something went wrong..."}</Modal.Title>
              <button type="button" className="close" data-dismiss="modal" onClick={props.handleCloseErr}>
                  <span aria-hidden="true">&times;</span>
              </button>
          </Modal.Header>
          <Modal.Body>{props.err}</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={props.handleCloseErr}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>
  );
}

export default ModalError;
