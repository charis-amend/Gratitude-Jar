import BreakingJar from "../../components/GlassJar/BreakingJar";
import { useState } from "react";
import Link from "next/link";


export default function BreakingPage() {
    // trigger for glassjar animation:
    const [glassJarState, setglassJarState] = useState(false); // Initial glassjar click state

    function handleClickBreak() {
        setglassJarState(!glassJarState); // Toggle the click state on click
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
                    <BreakingJar
                        glassJarState={glassJarState}
                    />
                </div>
            </div >

        </>)
}




// function LidObject({ startPosition, endPosition }) {
//     const { nodes, materials } = useLoader(GLTFLoader, "/jar-and-paper-scene.gltf");

//     // animation:
//     const { position } = useSpring({
//         from: { position: startPosition },
//         to: { position: endPosition },
//     })

//     // material:
//     const customMaterialLid = new MeshStandardMaterial({
//         ...materials.material, // Copy existing material properties
//         depthTest: true, // Override depthTest to true
//         depthWrite: true,
//     });


//     return (
//         <animated.group position={position}>
//             <group
//                 // {...props}
//                 dispose={null}
//                 scale={2}
//                 position={[0, -1.6, 0]}
//             >
//                 <group
//                     name="Sketchfab_model"
//                     position={[0, 0, 0]}>
//                     <group
//                         name="Collada_visual_scene_group"
//                         position={[0, 0, 0]}
//                         scale={4}>
//                         {/* top or  lid: */}
//                         <mesh
//                             name="defaultMaterial_1"
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.defaultMaterial_1.geometry}
//                             material={customMaterialLid}
//                             userData={{ name: "defaultMaterial" }}
//                         />
//                     </group>
//                 </group>
//             </group>
//         </animated.group>
//     )
// }
