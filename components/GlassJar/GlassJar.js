/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import CrumpledPaper from "../CrumbledPaper/CrumbledPaper.js"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, EnvironmentMap, OrbitControls } from '@react-three/drei'
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export default function GlassJar(props) {
    const { nodes, materials } = useGLTF("/assets/jar2final.gltf");
    const scale = [2, 2, 2];

    return (
        <>

            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={1.6} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={4.9} />
                    <directionalLight position={[3.3, 1.0, 4.4]} />
                    <OrbitControls target={[1, 1, 1]} autoRotate />
                    <EnvironmentMap scene="sunset" background />

                    <group {...props}
                        dispose={null}
                        scale={scale}>

                        <mesh
                            name="defaultMaterial"
                            geometry={nodes.defaultMaterial.geometry}
                            material={materials.material_1}
                            userData={{ name: "defaultMaterial" }}
                        />
                        <mesh
                            name="defaultMaterial_1"
                            geometry={nodes.defaultMaterial_1.geometry}
                            material={materials.material}
                            userData={{ name: "defaultMaterial" }}
                        />
                    </group>

                    <OrbitControls />
                </Suspense>
            </Canvas>


            <CrumpledPaper />
        </>
    );
}

useGLTF.preload("/assets/jar2final.gltf");





// const baseMaterial = useRef(new MeshStandardMaterial({
//     transparent: true,
//     opacity: 0.5,
//     depthTest: false,
//     side: DoubleSide,
//     color: new Color(244, 247, 247),
//     roughness: 0.3,
//     metalness: 0.7,
// }))
// const lidMaterial = useRef(new MeshPhysicalMaterial({
//     // transparent: false,
//     // depthTest: true,
//     // depthWrite: true,
//     // side: BackSide,
//     // // color: new Color(68, 68, 68),
//     // color: new Color(1, 0, 0),
//     // emissive: new Color(35, 35, 35),
//     // roughness: 0.3,
//     color: "red",
//     metalness: 0.2,
//     roughness: 0,
//     clearcoat: 0.8,

// }))