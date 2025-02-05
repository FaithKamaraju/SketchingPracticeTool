import React, { useState, useCallback, useRef } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import Menu from "react-burger-menu/lib/menus/slide";
import {
  useTweakpane,
  usePaneInput,
  usePaneFolder,
  useListBlade,
  useSliderBlade,
} from "react-tweakpane";

import Mesh from "./components/Mesh.jsx";

import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";

import "./App.css";

function App() {
  const dirLightRef = useRef();

  const pane = useTweakpane(
    {
      Grid: true,
      Axes: true,
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      title: "Scene Settings",
    }
  );
  const [ambientLight] = useSliderBlade(pane, {
    label: "Ambient Light",
    value: 1,
    min: 0,
    max: 2,
    step: 0.01,
    format: (value) => value.toFixed(2),
  });

  const [gridCheck, setGridCheck] = usePaneInput(pane, "Grid");
  const [axesCheck, setAxesCheck] = usePaneInput(pane, "Axes");

  const paneRef = useRef(pane);
  const DirLightFolder = usePaneFolder(pane, { title: "Directional Light" });

  const [directionalLight] = useSliderBlade(
    DirLightFolder,
    {
      label: "Directional Light",
      value: 1,
      min: 0,
      max: 2,
      step: 0.01,
      format: (value) => value.toFixed(2),
    },
    (event) => {
      const dirLight = dirLightRef.current;
      dirLight.intensity = event.value;
    }
  );
  const [dirLightPos] = usePaneInput(
    DirLightFolder,
    "position",
    {
      label: "Position",
      x: { value: 1 },
      y: { value: 1 },
      z: { value: 1 },
    },
    (event) => {
      const { x, y, z } = event.value;
      const dirLight = dirLightRef.current;
      dirLight.position.set(x, y, z);
    }
  );

  return (
    <>
      <Menu width={"25%"}>
        <h2>Random Shape and Form Generator</h2>
      </Menu>
      <Canvas camera={{ position: [4, 2, 4] }}>
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>

        {gridCheck && <gridHelper args={[100, 100]} />}
        {axesCheck && <axesHelper args={[100]} />}

        <OrbitControls minRadialAngle={Math.PI} maxRadialAngle={Math.PI} />
        <ambientLight intensity={ambientLight} />
        <directionalLight position={[1, 1, 1]} ref={dirLightRef} />
        {/* <DirLight directionalLight={true} /> */}
        <Mesh paneRef={paneRef.current} />
      </Canvas>
    </>
  );
}
export default App;
