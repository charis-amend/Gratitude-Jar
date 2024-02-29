
import { Suspense, useState } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { EnvironmentMap, OrbitControls, useMatcapTexture } from '@react-three/drei'
import React from "react";
import { Html, useProgress } from "@react-three/drei";
import Image from 'next/image';
import { BackSide, DoubleSide, FrontSide, MeshMatcapMaterial, MeshPhysicalMaterial, MeshStandardMaterial, NormalBlending } from 'three';
import { useSpring, animated } from '@react-spring/three'
import AnimationControl from './AnimationControl';

import * as THREE from "three";
import { TextureLoader } from 'three';
const textureLoader = new THREE.TextureLoader();

function Loader() {
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

function JarObject() {
    const { nodes, materials } = useLoader(GLTFLoader, "/jar-and-paper-scene.gltf");
    // Creating a new instance of MeshStandardMaterial with depthTest overridden
    const customMaterialJar = new MeshPhysicalMaterial({
        ...materials.material_1, // Copy existing material properties
        depthTest: true, // Override depthTest to false so glass = transparent
        depthWrite: false, // Override depthTest to false so glass = transparent
        side: BackSide,
        blending: NormalBlending,
        transparent: true,
        reflectivity: 2.1,
    });
    return (
        <group
            // {...props}
            dispose={null}
            scale={2}
        >
            <group
                name="Sketchfab_model"
                position={[0, 0, 0]}>
                <group
                    name="Collada_visual_scene_group"
                    position={[0, 0, 0]}
                    scale={4}>
                    <mesh
                        name="defaultMaterial"
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={customMaterialJar}
                        userData={{ name: "defaultMaterial" }} />
                </group>
            </group>
        </group >
    )
}

function LidObject() {
    const { nodes, materials } = useLoader(GLTFLoader, "/jar-and-paper-scene.gltf");
    const customMaterialLid = new MeshStandardMaterial({
        ...materials.material, // Copy existing material properties
        depthTest: true, // Override depthTest to true
        depthWrite: true,
    });
    return (
        <group
            // {...props}
            dispose={null}
            scale={2}
        >
            <group
                name="Sketchfab_model"
                position={[0, 0, 0]}>
                <group
                    name="Collada_visual_scene_group"
                    position={[0, 0, 0]}
                    scale={4}>
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
            </group>
        </group>

    )
}

// function PaperObject({ startPosition, endPosition, startOpacity, endOpacity, startRotation, endRotation }) {
function PaperObject({ startPosition, endPosition }) {
    const { nodes, materials } = useLoader(GLTFLoader, "/jar-and-paper-scene.gltf");
    const mapTexture = textureLoader.load("/materialpaper.jpg")

    // const [showPaper, setShowPaper] = useState(true) //  default always showing paper
    // const fadeInTime = 500  // half a second for paper to appear from opacity 0->1
    // const restingTime = 3000; // 3 seconds for full opacity where the paper should chill
    // const fadeOutTime = 5000; // 5 seconds to fade out


    // animation:
    const { position
        // animatedOpacity, 
        // animatedRotation 
    } = useSpring({
        from: {
            position: startPosition,
            // opacity: startOpacity,
            // rotation: startRotation
        },
        to: { position: endPosition },

        // async (next) => {
        //     await new Promise((resolve) => setTimeout(resolve, fadeInTime))
        //     await next({ position: endPosition, rotation: endRotation });
        //     await new Promise((resolve) => setTimeout(resolve, restingTime))
        //     await next({ opacity: endOpacity })
        //     await new Promise((resolve) => setTimeout(resolve, fadeOutTime));
        //     // setShowPaper(false);
        //     await next({ position: startPosition, opacity: startOpacity, rotation: startRotation });
        //     // setShowPaper(true);
        // },
        // onRest: () => setShowPaper(false), // Hide the paper after animation completes
    })

    const customPaperMaterial = new MeshStandardMaterial({
        ...materials.MeshMatcapMaterial,
        color: 0x959178,
        side: DoubleSide,
        transparent: true,
        depthTest: true,
        depthWrite: true,
        blending: NormalBlending,
        opacity: 1,
        roughness: 1,
        metalness: 0.5,
        emissive: 0x000000,
        map: mapTexture,


    });

    return (
        // <animated.group
        //     position={position}
        // // rotation={animatedRotation}
        // >
        <animated.group position={position}>
            <group name="finalpapergltf">
                <group name="Folded_Paperobj" scale={0.25}>
                    <mesh
                        name="Map07"
                        geometry={nodes.Map07.geometry}
                        material={customPaperMaterial}
                    />
                </group>
            </group>
        </animated.group>
        // </animated.group>

    )
}

function Lights() {

    return (
        <>
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
                color={0xd2bdb1}
                position={[7.648, 13.877, 28.447]}
                rotation={[-2.318, 1.041, -2.644]}
                userData={{ name: "PointLight" }}
            />
        </>
    )
}

export default function GlassJar() {
    const [animatePaper, setAnimatePaper] = useState(false);
    // const [animatePaper, setAnimatePaper] = useState([[0.890, -6.613, 0.397]]);


    function handleAddingStatementAnimationClick() {
        setAnimatePaper(!animatePaper);
    };

    return (
        <>
            <Canvas
                // frameloop="demand"
                shadows
                camera={
                    {
                        position: [0, 10, 25], // camera position for scene and jar
                        // position: [10, 30, 20],  // camera position for paper
                        // fov: 100, //  for paper
                        fov: 50,
                        scale: [1, 1, 1],
                        rotation: [-13.7, 2.3, 0.58],
                        far: 1000,
                        near: 0.01,
                        frustumCulled: true,
                        visible: true,
                    }}>
                <Suspense fallback={<Loader />}>
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        autoRotate
                    />
                    <EnvironmentMap background="white" />
                    {/* <primitive object={roomTexture} attach="background" /> */}

                    <Lights />

                    <JarObject />
                    <LidObject />


                    {animatePaper &&
                        <PaperObject
                            startPosition={[-7.897, 21.232, -0.181]}
                            endPosition={[0.890, -7.613, 0.397]} />
                    }

                    {/* 
                    {animatePaper && animatePaper.map((position) => <PaperObject
                        startPosition={[-7.897, 21.232, -0.181]}
                        endPosition={position} />
                    )
                    }
                     */}

                    {/* <PaperObject */}
                    {/* // startPosition={[-7.897, 21.232, -0.181]}
                    // startRotation={[0, 0, 0]}
                    // startOpacity={1}
                    // endPosition={[1.890, 1.213, 0.397]}
                    // endRotation={[13.20, 25.91, 142.91]}
                    // endOpacity={0} */}
                    {/* /> */}
                </Suspense>
            </Canvas >
            <AnimationControl onAnimate={handleAddingStatementAnimationClick} />
        </>
    );
}


