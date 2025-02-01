import React, { useEffect, useRef } from "react";

import { Canvas, extend } from "@react-three/fiber";

import Menu from "react-burger-menu/lib/menus/slide";

import Cylinder from "./components/Meshes/CylinderMesh.jsx";
import Sphere from "./components/Meshes/SphereMesh.jsx";
import Cube from "./components/Meshes/CubeMesh.jsx";
import Capsule from "./components/Meshes/CapsuleMesh.jsx";
import Cone from "./components/Meshes/ConeMesh.jsx";
import Dodecahedron from "./components/Meshes/DodecahedronMesh.jsx";
import Icosahedron from "./components/Meshes/IcosahedronMesh.jsx";
import Octahedron from "./components/Meshes/OctahedronMesh.jsx";
import Tetrahedron from "./components/Meshes/TetrahedronMesh.jsx";
import Torus from "./components/Meshes/TorusMesh.jsx";

import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";

import "./App.css";

class App extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Menu width={"25%"} noOverlay>
          <h1>Random Shape and Form Generator</h1>
          <ControlPanel />
        </Menu>
        <Canvas>
          <directionalLight args={[0xfffff0, 1]} position={[1, 1, 1]} />
          <Torus />
        </Canvas>
      </>
    );
  }
}
export default App;
