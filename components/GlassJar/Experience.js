import { OrbitControls, Float, Billboard } from "@react-three/drei";
import BreakingJar from "./BreakingJar";

export default function Experience() {
    return (<>

        <OrbitControls enableZoom={false} />
        <Float floatIntensity={2} speed={1}>

            <BreakingJar
                className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1"
            />
            <Lights />

        </Float>
        {/* <LidObject /> */}
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