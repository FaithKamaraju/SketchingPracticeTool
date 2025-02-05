import { useState } from "react";

import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

import "./ControlPanel.css";

function ControlPanel({ selectedForm, setSelectedForm }) {
  return (
    <Stack gap={3}>
      <div className="form-selector-div-top">
        <span className="form-selector-label">Select a form to render:</span>
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={selectedForm}
            menuVariant="dark"
          >
            <NavDropdown.Item onClick={() => setSelectedForm("Cylinder")}>
              Cylinder
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Sphere")}>
              Sphere
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Box")}>
              Box
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Capsule")}>
              Capsule
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Cone")}>
              Cone
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Dodecahedron")}>
              Dodecahedron
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Icosahedron")}>
              Icosahedron
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Octahedron")}>
              Octahedron
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Tetrahedron")}>
              Tetrahedron
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSelectedForm("Torus")}>
              Torus
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Stack>
  );
}

export default ControlPanel;
