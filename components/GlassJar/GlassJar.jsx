import { Canvas } from "react-three-fiber"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
};


export default function GlassJar() {

    return (
        // Canvas is responsive to fit the parent node, so you can control how big it is by changing the parents width and height, in this case #canvas-container.
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshPhysicalMaterial />
                </mesh>
            </Canvas>
        </div>
    )

}

