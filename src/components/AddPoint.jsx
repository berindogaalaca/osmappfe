// AddPoint.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddPoint = ({ show, onHide }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSave = () => {
    // Save logic
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);

    // Close modal
    onHide && onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
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
            <Form.Label>Name</Form.Label>
            <Form.Control
              className='mb-2'
              type="text"
              placeholder="Add Your Coordinate Name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Number</Form.Label>
            <Form.Control
              className='mb-2'
              type="text"
              placeholder="Add Your Coordinate Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              className='mb-2'
              type="text"
              placeholder="Add Your Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Your Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-black border-0' onClick={handleSave}>Save</Button>
        <Button className='bg-black border-0' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPoint;
