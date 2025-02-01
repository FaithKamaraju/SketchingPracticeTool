import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { BoxGeometry } from "three";
extend({ BoxGeometry });

function Cube() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Cube;
