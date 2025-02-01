import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { IcosahedronGeometry } from "three";
extend({ IcosahedronGeometry });

function Icosahedron() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <icosahedronGeometry attach="geometry" args={[2, 0]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Icosahedron;
