import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Point
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Name</Form.Label>
              <Form.Control
              className='mb-2'
                type="text"
                placeholder="Add Your Coordinate Name"
                autoFocus
              />
              <Form.Label>Number</Form.Label>
              <Form.Control
              className='mb-2'
                type="text"
                placeholder="Add Your Coordinate Number"
                autoFocus
              />
              <Form.Label>Latitude</Form.Label>
              <Form.Control
              className='mb-2'
                type="text"
                placeholder="Add Your Latitude"
                autoFocus
              />
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Your Longitude"
                autoFocus
              />
            </Form.Group>
           
          </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button className='bg-black border-0' >Save</Button>
        <Button className='bg-black border-0' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AddPoint = ({ show, onHide }) => {
  return (
    <MyVerticallyCenteredModal
      show={show}
      onHide={onHide}
    />
  );
};

export default AddPoint;
