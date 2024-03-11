import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

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
          Query Point{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="exampleForm.ControlInput1"
          >
            <div className="mx-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="mx-2"
                type="text"
                placeholder="Filter Your Coordinate Name"
                autoFocus
              />
            </div>
            <div className="mx-2">
              <Form.Label>Number</Form.Label>
              <Form.Control
                className="mx-2"
                type="text"
                placeholder="Filter Your Coordinate Number"
                autoFocus
              />
            </div>
            <div className="mx-2">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Filter Your Latitude"
                autoFocus
              />
            </div>
            <div className="mx-2">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="text"
                placeholder="Filter Your Longitude"
                autoFocus
              />
            </div>
          </Form.Group>
          <div className="mb-3 d-flex justify-content-end">
            <Button className="mx-3 border-0 bg-black">Filter</Button>
            <Button className="bg-black border-0">Delete</Button>
          </div>
        </Form>
        <div style={{overflowY:"auto",maxHeight:"280px"}}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Number</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
             
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mx-3 bg-black border-0" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const QueryPoint = ({ show, onHide }) => {
  return <MyVerticallyCenteredModal show={show} onHide={onHide} />;
};

export default QueryPoint;
