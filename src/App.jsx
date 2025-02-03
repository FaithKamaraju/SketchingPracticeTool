import React, { useEffect, useRef, lazy } from "react";

import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";

import Menu from "react-burger-menu/lib/menus/slide";

const Cylinder = lazy(() => import("./components/Meshes/CylinderMesh.jsx"));
const Sphere = lazy(() => import("./components/Meshes/SphereMesh.jsx"));
const Cube = lazy(() => import("./components/Meshes/CubeMesh.jsx"));
const Capsule = lazy(() => import("./components/Meshes/CapsuleMesh.jsx"));
const Cone = lazy(() => import("./components/Meshes/ConeMesh.jsx"));
const Dodecahedron = lazy(() =>
  import("./components/Meshes/DodecahedronMesh.jsx")
);
const Icosahedron = lazy(() =>
  import("./components/Meshes/IcosahedronMesh.jsx")
);
const Octahedron = lazy(() => import("./components/Meshes/OctahedronMesh.jsx"));
const Tetrahedron = lazy(() =>
  import("./components/Meshes/TetrahedronMesh.jsx")
);
const Torus = lazy(() => import("./components/Meshes/TorusMesh.jsx"));

import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Menu width={"25%"}>
          <h2>Random Shape and Form Generator</h2>
          <ControlPanel />
        </Menu>
        <Canvas>
          <GizmoHelper alignment="top-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={["red", "green", "blue"]}
              labelColor="black"
            />
          </GizmoHelper>
          <gridHelper args={[100, 100]} />
          <axesHelper args={[100]} />
          <OrbitControls minRadialAngle={Math.PI} maxRadialAngle={Math.PI} />
          <directionalLight args={[0xfffff0, 1]} position={[1, 1, 1]} />
          <Torus />
        </Canvas>
      </>
    );
  }
}
export default App;
