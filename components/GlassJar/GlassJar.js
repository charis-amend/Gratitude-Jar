/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
// import CrumpledPaper from "../CrumbledPaper/CrumbledPaper.js"

import { Suspense } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from '@react-three/drei'
import React from "react";
import { Html, useProgress } from "@react-three/drei";
import Image from 'next/image';


// export default function GlassJar(props) {

//     const { nodes, materials } = useGLTF("/assets/jar2final.gltf");
//     // async function loadObject() {
//     // }
//     const scale = [2, 2, 2];

//     return (
//         <>
//             <Canvas>
//                 <Suspense fallback={<Loader />}>
//                     <ambientLight intensity={0.6} />
//                     <directionalLight color="white" position={[0, 0, 5]} />
//                     <pointLight position={[-10, -10, -10]} decay={0} intensity={0.9} />
//                     <directionalLight position={[3.3, 1.0, 4.4]} />
//                     <OrbitControls target={[1, 1, 1]} autoRotate />
//                     <group {...props}
//                         dispose={null}
//                         scale={scale}>

//                         <mesh
//                             name="defaultMaterial"
//                             geometry={nodes.defaultMaterial.geometry}
//                             material={materials.material_1}
//                             userData={{ name: "defaultMaterial" }}
//                         />
//                         <mesh
//                             name="defaultMaterial_1"
//                             geometry={nodes.defaultMaterial_1.geometry}
//                             material={materials.material}
//                             userData={{ name: "defaultMaterial" }}
//                         />
//                     </group>
//                 </Suspense>
//             </Canvas>
//         </>
//     );
// }
// useGLTF.preload("/assets/jar2final.gltf");

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                    <Image
                        priority
                        src="/preloadedGlasJar.png"
                        alt="placeholder-glasjar"
                        width={500}
                        height={500}
                    />

                    <p className="text-sm color text-white-100 font-extrabold p-3 justify-items-center">
                        {progress.toFixed(2)}%
                    </p>
                </div>
            </div>
        </Html >
    );
};


function GlassJarObject(props) {
    const { nodes, materials } = useLoader(GLTFLoader, "/assets/newjar2702.gltf");
    const scale = [2, 2, 2];

    return (
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
    )
}



export default function GlassJar() {

    // async function loadObject() {
    // }
    // const scale = [2, 2, 2];

    return (
        <>
            <Canvas
                frameloop="demand"
                shadows
                camera={{ position: [15, 0, 0], fov: 25 }}
                gl={true}
            >
                <Suspense fallback={<Loader />}>
                    <ambientLight color="white" intensity={6} />
                    {/* <directionalLight color="white" position={[5, 5, 5]} /> */}
                    {/* <pointLight position={[10, 10, 10]} decay={0} intensity={3} /> */}
                    <directionalLight position={[3.3, 1.0, 4.4]} />
                    <hemisphereLight skyColor="0xffffff" groundColor="black" intensity={3} />
                    <OrbitControls
                        target={[0, 0, 0]}
                        autoRotate
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / -2}
                    />


                    <GlassJarObject />

                </Suspense>
            </Canvas >
        </>
    );
}






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