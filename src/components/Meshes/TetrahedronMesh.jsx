import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { TetrahedronGeometry } from "three";
extend({ TetrahedronGeometry });

function Tetrahedron() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <tetrahedronGeometry attach="geometry" args={[2, 0]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Tetrahedron;
