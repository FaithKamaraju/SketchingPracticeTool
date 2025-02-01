import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { CylinderGeometry } from "three";
extend({ CylinderGeometry });

function Cylinder() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <cylinderGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  );
}

export default Cylinder;
