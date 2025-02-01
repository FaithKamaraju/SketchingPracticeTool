import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { OctahedronGeometry } from "three";
extend({ OctahedronGeometry });

function Octahedron() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <octahedronGeometry attach="geometry" args={[2, 0]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Octahedron;
