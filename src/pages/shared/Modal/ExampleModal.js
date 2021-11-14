import React from "react";
import { Button, Modal } from "react-bootstrap";

function ExampleModal({ show, setShow }) {

    const handleClose = () => setShow(false);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are login successFully. Now you are redirect to your previous page</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ExampleModal;