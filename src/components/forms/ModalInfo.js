import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

const ModalInfo = ({handleClose, message, show, head}) => {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>{head != null ? head : "Something happened..."}</Modal.Title>
                <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                {message != null ? message : "No description found"}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalInfo;