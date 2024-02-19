import CrumpledPaper from "../CrumbledPaper/CrumbledPaper"
import Model from "../GlassJar/GlassJar"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

export default function GlassJarSection() {

    return (
        <>
            <div className="canvasSection3D">
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight />
                        <Model />
                        <Environment preset="sunset" background />
                    </Suspense>
                </Canvas>
            </div>

            <CrumpledPaper />
        </>
    )
}