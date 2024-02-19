import Floor from "../Floor/Floor"
import { Canvas } from "@react-three/fiber"

export default function GlassJar() {

    return (
        <>
            <div className="scene3D w-screen h-auto">
                <Canvas
                    shadows
                    className="canvas3D bg-transparent"
                    camera={{ position: [-6, 7, 7] }}>
                    <Floor />
                </Canvas>
            </div>

            <p>Glass Jar 3D Object</p>
        </>
    )
}