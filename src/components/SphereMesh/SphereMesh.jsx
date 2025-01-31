import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import { SphereGeometry } from "three";
extend({ SphereGeometry });

function Sphere() {
  const myref = useRef();

  //   useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01));

  return (
    <mesh ref={myref}>
      <sphereGeometry attach="geometry" args={[1, 64, 16]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Sphere;
