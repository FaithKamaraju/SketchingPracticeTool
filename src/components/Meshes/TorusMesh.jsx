import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { TorusGeometry } from "three";
extend({ TorusGeometry });

function Torus() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <torusGeometry attach="geometry" args={[1, 0.5, 16, 32]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Torus;
