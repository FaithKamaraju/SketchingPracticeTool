import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { CapsuleGeometry } from "three";
extend({ CapsuleGeometry });

function Capsule() {
  const myref = useRef();

  useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <capsuleGeometry attach="geometry" args={[1, 1, 16, 32]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Capsule;
