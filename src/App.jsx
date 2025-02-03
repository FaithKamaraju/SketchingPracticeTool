import React, { useState, lazy, useCallback } from "react";

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

function MeshSelector({ selectedForm }) {
  if (selectedForm === "Cylinder") {
    return <Cylinder />;
  } else if (selectedForm === "Sphere") {
    return <Sphere />;
  } else if (selectedForm === "Cube") {
    return <Cube />;
  } else if (selectedForm === "Capsule") {
    return <Capsule />;
  } else if (selectedForm === "Cone") {
    return <Cone />;
  } else if (selectedForm === "Dodecahedron") {
    return <Dodecahedron />;
  } else if (selectedForm === "Icosahedron") {
    return <Icosahedron />;
  } else if (selectedForm === "Octahedron") {
    return <Octahedron />;
  } else if (selectedForm === "Tetrahedron") {
    return <Tetrahedron />;
  } else if (selectedForm === "Torus") {
    return <Torus />;
  }
}

function App() {
  const [selectedForm, setSelectedForm] = useState("Torus");
  const [ambientLight, setAmbientLight] = useState(true);

  const handleFormSelection = useCallback(
    (form) => {
      setSelectedForm(form);
    },
    [selectedForm]
  );

  const handleAmbientLight = useCallback(() => {
    setAmbientLight(!ambientLight);
  }, [ambientLight]);

  return (
    <>
      <Menu width={"25%"}>
        <h2>Random Shape and Form Generator</h2>
        <ControlPanel
          selectedForm={selectedForm}
          setSelectedForm={handleFormSelection}
          ambientLight={ambientLight}
          setAmbientLight={handleAmbientLight}
        />
      </Menu>
      <Canvas camera={{ position: [4, 2, 4] }}>
        <GizmoHelper alignment="top-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>
        <gridHelper args={[100, 100]} />
        <axesHelper args={[100]} />
        <OrbitControls minRadialAngle={Math.PI} maxRadialAngle={Math.PI} />
        {ambientLight && <ambientLight />}

        <MeshSelector selectedForm={selectedForm} />
      </Canvas>
    </>
  );
}
export default App;
