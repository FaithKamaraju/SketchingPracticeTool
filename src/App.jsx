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
  const pane = useTweakpane();
  const paneRef = useRef(pane);
  const LightFolder = usePaneFolder(pane, { title: "Lights" });

  const [ambientLight] = useSliderBlade(LightFolder, {
    label: "Ambient Light",
    value: 1,
    min: 0,
    max: 2,
    step: 0.01,
    format: (value) => value.toFixed(2),
  });

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

        {true && <gridHelper args={[100, 100]} />}
        {true && <axesHelper args={[100]} />}

        <OrbitControls minRadialAngle={Math.PI} maxRadialAngle={Math.PI} />
        <ambientLight intensity={ambientLight} />
        {/* <DirLight directionalLight={true} /> */}
        <Mesh paneRef={paneRef.current} />
      </Canvas>
    </>
  );
}
export default App;
