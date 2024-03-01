import { Canvas } from "@react-three/fiber";
import Experience from "../../components/GlassJar/Experience";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function BreakingPage() {
    return (
        <>
            <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
                <Canvas
                    plugins={[new DRACOLoader()]}
                    shadows
                    camera={
                        {
                            position: [0, 10, 25], // camera position for scene and jar
                            fov: 50,
                            scale: [1, 1, 1],
                            rotation: [-13.7, 2.3, 0.58],
                            far: 1000,
                            near: 0.01,
                            frustumCulled: true,
                            visible: true,
                        }}>
                    <Experience />
                </Canvas>

                <button
                    // onClick={handleAnimationPaper}
                    className="animationbutton border-solid border-2 w-20 h-20 justify-center place-self-center align-middle">
                    Animate Break</button>


            </div>

        </>)
}