/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
// import CrumpledPaper from "../CrumbledPaper/CrumbledPaper.js"

import { Suspense } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { EnvironmentMap, OrbitControls, Preload } from '@react-three/drei'
import React from "react";
import { Html, useProgress } from "@react-three/drei";
import Image from 'next/image';
import { BackSide, DoubleSide, FrontSide, MeshPhysicalMaterial, MeshStandardMaterial, MultiplyBlending, NormalBlending } from 'three';
// import { RoomEnvironment } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/environments/RoomEnvironment.js';
// import { PMREMGenerator } from 'three';

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
    const { nodes, materials } = useLoader(GLTFLoader, "/sceneOverWrites.gltf");
    const scale = [2, 2, 2];

    // Create a new instance of MeshStandardMaterial with depthTest overridden
    const customMaterialJar = new MeshPhysicalMaterial({
        ...materials.material_1, // Copy existing material properties
        depthTest: false, // Override depthTest to false
        depthWrite: false, // Override depthTest to false
        side: BackSide,
        blending: NormalBlending,
        transparent: true,
        reflectivity: 2.1,

        // add material_1_baseColor.png for MAP -maybe
        // add darker sheen  color
        // color: 0xB0B0B0,

    });

    // Create a new instance of MeshStandardMaterial with depthTest overridden
    const customMaterialLid = new MeshStandardMaterial({
        ...materials.material, // Copy existing material properties
        depthTest: true, // Override depthTest to false
        depthWrite: true,
    });

    return (
        <group {...props}
            dispose={null}
            scale={scale}>

            {/* jar: */}
            <mesh
                name="defaultMaterial"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={customMaterialJar}
                userData={{ name: "defaultMaterial" }}
            />

            {/* top or  lid: */}
            <mesh
                name="defaultMaterial_1"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_1.geometry}
                material={customMaterialLid}
                userData={{ name: "defaultMaterial" }}
            />
        </group>
    )
}

export default function GlassJar() {
    // const pmremGenerator = new PMREMGenerator(renderer);
    // const roomTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;


    return (
        <>
            <Canvas
                frameloop="demand"
                shadows
                camera={{ position: [15, 0, 0], fov: 25 }}
                gl={true}
            >
                <Suspense fallback={<Loader />}>

                    <EnvironmentMap background="black" />
                    {/* <primitive object={roomTexture} attach="background" /> */}

                    <spotLight
                        name="SpotLight"
                        intensity={20}
                        angle={0.444}
                        penumbra={1}
                        decay={2}
                        distance={2}
                        position={[26.709, 34.772, 2.75]}
                        rotation={[0.111, 0.048, 1.016]}
                        scale={[39.767, 102.189, 209.574]}
                        userData={{ name: "SpotLight" }}
                    />
                    <directionalLight
                        name="DirectionalLight"
                        intensity={5}
                        decay={2}
                        color="#fffaeb"
                        position={[-13.409, 48.408, -0.96]}
                        userData={{ name: "DirectionalLight" }}
                    />
                    <directionalLight
                        name="DirectionalLightFromSide"
                        intensity={5}
                        decay={2}
                        position={[-11.225, 13.52, -17.363]}
                        rotation={[-1.168, 0, 0.04]}
                        scale={10.927}
                        userData={{ name: "DirectionalLightFromSide" }}
                    />
                    <pointLight
                        name="PointLight"
                        intensity={20}
                        decay={2}
                        color="#d2bdb1"
                        position={[7.648, 13.877, 28.447]}
                        rotation={[-2.318, 1.041, -2.644]}
                        userData={{ name: "PointLight" }}
                    />

                    <OrbitControls
                        target={[0, 0, 0]}
                        autoRotate
                    />


                    <GlassJarObject />

                </Suspense>
            </Canvas >
        </>
    );
}
