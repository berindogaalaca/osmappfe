import React, { useState } from "react";
import Button from "./Button"; 
import AddPoint from "./AddPoint";
import QueryPoint from "./QueryPoint";


function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowQuery, setModalShowQuery] = useState(false);
  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg " style={{ height: "9vh" }}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Button
                  buttontext="Add Point"
                  buttonclick={() => setModalShow(true)}
                />
                <AddPoint show={modalShow} onHide={() => setModalShow(false)} />
              </li>
              <li className="nav-item">
                <Button buttontext="Query Point" buttonclick={() => setModalShowQuery(true)} />
                <QueryPoint show={modalShowQuery} onHide={() => setModalShowQuery(false)} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
