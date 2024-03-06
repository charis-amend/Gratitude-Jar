import { Canvas } from "@react-three/fiber";
import { ScrollControls, OrbitControls } from "@react-three/drei";
import { Float } from "@react-three/drei";
import BreakingJar from "../../components/GlassJar/BreakingJar";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Suspense } from "react";
import Loader from "../../components/GlassJar/Loader";
import { useState } from "react";
import Link from "next/link";

export default function BreakingPage() {
    // trigger for animation:
    const [clickState, setClickState] = useState(false); // Initial click state
    function handleClickBreak() {
        setClickState(!clickState); // Toggle the click state on click
    };
    return (
        <>
            <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">


                <Link
                    href="/"
                >
                    <div className="back-button-section z-50 fixed top-5 left-1 h-10 inset-1/4 w-1/6 flex justify-center items-center"
                    >
                        <button
                            className="backbutton button place-self-end text-lg w-fit border-1 rounded-xl py-2 px-3 my-1 shadow-xl border-2 border-Grey-jar transition-all duration-400"
                        >🔙</button>
                    </div>
                </Link >

                <div
                    onClick={handleClickBreak}
                    className="shatter-div z-40 top-0 left-0 fixed h-screen w-screen flex"
                >
                    <Canvas
                        frameloop="demand"
                        // className="canvas-no-scrolling"
                        plugins={[new DRACOLoader()]}
                        shadows
                        camera={
                            {
                                position: [0, 10, 25], // camera position for  breaking jar
                                fov: 50,
                                scale: [1, 1, 1],
                                rotation: [-13.7, 2.3, 0.58],
                                far: 700,
                                near: 0.01,
                                frustumCulled: true,
                                visible: true,
                            }}>
                        <Suspense fallback={<Loader />}>
                            <ScrollControls pages={3}>
                                <OrbitControls
                                    enableZoom={false}
                                    autoRotate
                                />
                                <Float floatIntensity={2} speed={2}>

                                    <BreakingJar
                                        // className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1"
                                        clickState={clickState}
                                    />
                                    <Lights />
                                </Float>

                            </ScrollControls>
                        </Suspense>
                    </Canvas>
                </div>
            </div >

        </>)
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