import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { ConeGeometry } from "three";
extend({ ConeGeometry });

function Cone() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <coneGeometry attach="geometry" args={[1, 2, 32]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Cone;
