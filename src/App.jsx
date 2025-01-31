import React, { useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber";

import Menu from "react-burger-menu/lib/menus/stack";

import Cylinder from "./components/CylinderMesh/CylinderMesh.jsx";
import Sphere from "./components/SphereMesh/SphereMesh.jsx";

import "./App.css";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";

class App extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Menu width={"25%"} noOverlay noTransition itemListElement="div">
          <h1>Random Shape and Form Generator</h1>
          <ControlPanel />
        </Menu>
        <Canvas>
          <pointLight position={[1, 1, 1]} />
          <Sphere />
        </Canvas>
      </>
    );
  }
}
export default App;
