/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: FrancescoMilanese (https://sketchfab.com/FrancescoMilanese)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/empty-plastic-jar-98b06be0357a46cfa3a7aa9e0d0e80e6
Title: Empty plastic jar
*/

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
    const { nodes, materials } = GLTFLoader(sceneFile)
    return (

        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material_1} />
                    <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.material} />
                </group>
            </group>
        </group>

    )
}

GLTFLoader.preload(sceneFile)
