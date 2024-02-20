import CrumpledPaper from "../CrumbledPaper/CrumbledPaper"
import Model from "../GlassJar/GlassJar"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

export default function GlassJarSection() {

    return (
        <>
            <div className="h-screen w-screen">
                <Canvas className="h-full w-full">
                    <Suspense fallback={null}>
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <Model className="modelJar w-28 h-28" />
                        {/* <Environment preset="dawn" background /> */}
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>

            <CrumpledPaper />
        </>
    )
}