/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { BackSide, DoubleSide, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial } from "three";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";


export default function Model(props) {
    const { nodes, materials } = useGLTF("/2glassjar/jar.gltf");
    const baseMaterial = useRef(new MeshStandardMaterial({
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        side: DoubleSide,
        color: new Color(244, 247, 247),
        roughness: 0.3,
        metalness: 0.7,
    }))
    const lidMaterial = useRef(new MeshPhysicalMaterial({
        // transparent: false,
        // depthTest: true,
        // depthWrite: true,
        // side: BackSide,
        // // color: new Color(68, 68, 68),
        // color: new Color(1, 0, 0),
        // emissive: new Color(35, 35, 35),
        // roughness: 0.3,
        color: "red",
        metalness: 0.2,
        roughness: 0,
        clearcoat: 0.8,

    }))

    const groupRef = useRef();
    // Update rotation in the animation loop
    useFrame((state, delta) => {
        groupRef.current.rotation.x += 0.0 * delta; // Adjust speed as needed
        groupRef.current.rotation.y += 0.01 * delta;
        groupRef.current.rotation.z += 0.02 * delta;
    });

    const scale = [17, 17, 17];

    return (
        <group {...props} dispose={null} ref={groupRef} scale={scale}>
            <mesh
                castShadow
                receiveShadow
                name="Base_Cylinder"
                geometry={nodes.Base_Cylinder.geometry}
                // material={nodes.Base_Cylinder.material}
                // material={materials.MeshLambertMaterial}
                userData={{ name: "Base_Cylinder" }}
                material={baseMaterial.current}
            />

            {/* <mesh
                castShadow
                receiveShadow
                name="Glass_Plug_Cylinder002"
                geometry={nodes.Glass_Plug_Cylinder002.geometry}
            // material={nodes.Glass_Plug_Cylinder002.material}
            // material={lidMaterial.current}
            /> */}
        </group>
    );
}

useGLTF.preload("/2glassjar/jar.gltf");




