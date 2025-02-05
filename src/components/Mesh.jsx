import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useTweakpane,
  usePaneInput,
  usePaneFolder,
  useListBlade,
} from "react-tweakpane";
import { extend } from "@react-three/fiber";
import {
  BoxGeometry,
  CapsuleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
} from "three";
extend({
  BoxGeometry,
  CapsuleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
});

function GeometrySelector(props) {
  switch (props.selectedForm) {
    case "Box":
      return <boxGeometry {...props} args={[2, 2, 2]} />;
    case "Capsule":
      return <capsuleGeometry {...props} args={[1, 1, 16, 32]} />;
    case "Cone":
      return <coneGeometry {...props} args={[1, 2, 32]} />;
    case "Cylinder":
      return <cylinderGeometry {...props} args={[2, 2, 2]} />;
    case "Dodecahedron":
      return <dodecahedronGeometry {...props} args={[2, 0]} />;
    case "Icosahedron":
      return <icosahedronGeometry {...props} args={[2, 0]} />;
    case "Octahedron":
      return <octahedronGeometry {...props} args={[2, 0]} />;
    case "Sphere":
      return <sphereGeometry {...props} args={[1, 64, 16]} />;
    case "Tetrahedron":
      return <tetrahedronGeometry {...props} args={[2, 0]} />;
    case "Torus":
      return <torusGeometry {...props} args={[1, 0.5, 16, 32]} />;
    default:
      return null;
  }
}

function Mesh(props) {
  const myref = useRef();

  const pane = props.paneRef;
  const MeshFolder = usePaneFolder(pane, { title: "Mesh" });

  const [mesh] = useListBlade(MeshFolder, {
    view: "list",
    label: "Mesh Geometry",
    options: [
      { text: "Box", value: "Box" },
      { text: "Capsule", value: "Capsule" },
      { text: "Cone", value: "Cone" },
      { text: "Cylinder", value: "Cylinder" },
      { text: "Dodecahedron", value: "Dodecahedron" },
      { text: "Icosahedron", value: "Icosahedron" },
      { text: "Octahedron", value: "Octahedron" },
      { text: "Sphere", value: "Sphere" },
      { text: "Tetrahedron", value: "Tetrahedron" },
      { text: "Torus", value: "Torus" },
    ],
    value: "Box",
  });

  return (
    <mesh ref={myref}>
      <GeometrySelector selectedForm={mesh} args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Mesh;

// <boxGeometry attach="geometry" args={[2, 2, 2]} />;
// <capsuleGeometry attach="geometry" args={[1, 1, 16, 32]} />;
// <coneGeometry attach="geometry" args={[1, 2, 32]} />;
// <cylinderGeometry attach="geometry" args={[2, 2, 2]} />;
// <dodecahedronGeometry attach="geometry" args={[2, 0]} />;
// <icosahedronGeometry attach="geometry" args={[2, 0]} />;
// <octahedronGeometry attach="geometry" args={[2, 0]} />;
// <sphereGeometry attach="geometry" args={[1, 64, 16]} />;
// <tetrahedronGeometry attach="geometry" args={[2, 0]} />;
// <torusGeometry attach="geometry" args={[1, 0.5, 16, 32]} />;
