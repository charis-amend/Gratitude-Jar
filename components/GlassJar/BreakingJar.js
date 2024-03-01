/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/breakingJar.glb -o components/GlassJar/BreakingJarooo1.js -r public 
*/
import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { BackSide, MeshPhysicalMaterial, MeshStandardMaterial, NormalBlending } from 'three';


export default function BreakingJar() {
  const { nodes, materials } = useLoader(GLTFLoader, '/breakingJar0103.gltf')
  // Creating a new instance of MeshStandardMaterial with depthTest overridden
  const materialBreakingJar = new MeshPhysicalMaterial({
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
      dispose={null}>
      <directionalLight name="DirectionalLight" intensity={5} decay={2} color="#fffaeb" position={[-13.409, 48.408, -0.96]} userData={{ name: 'DirectionalLight' }} />
      <directionalLight name="DirectionalLightFromSide" intensity={5} decay={2} position={[8.558, 41.288, 25.153]} rotation={[-1.724, -0.007, 0.023]} scale={10.927} userData={{ name: 'DirectionalLightFromSide' }} />
      <pointLight name="PointLight" intensity={20} decay={2} color="#d2bdb1" position={[7.648, 13.877, 28.447]} rotation={[-2.318, 1.041, -2.644]} userData={{ name: 'PointLight' }} />
      <spotLight name="SpotLight" intensity={20} angle={0.7} penumbra={1} decay={2} position={[54.775, 73.158, -33.214]} rotation={[-1.923, 0.711, 3.048]} scale={[39.767, 102.189, 209.574]} userData={{ name: 'SpotLight' }} />

      <mesh name="defaultMaterial_cell" geometry={nodes.defaultMaterial_cell.geometry} material={materialBreakingJar} position={[-4.626, 4.751, -1.33]} userData={{ name: 'defaultMaterial_cell' }} />
      <mesh name="defaultMaterial_cell001" geometry={nodes.defaultMaterial_cell001.geometry} material={materialBreakingJar} position={[4.165, 9.714, -2.75]} userData={{ name: 'defaultMaterial_cell.001' }} />
      <mesh name="defaultMaterial_cell002" geometry={nodes.defaultMaterial_cell002.geometry} material={materialBreakingJar} position={[2.974, 15.793, -1.382]} userData={{ name: 'defaultMaterial_cell.002' }} />
      <mesh name="defaultMaterial_cell003" geometry={nodes.defaultMaterial_cell003.geometry} material={materialBreakingJar} position={[3.838, 1.357, 1.459]} userData={{ name: 'defaultMaterial_cell.003' }} />
      <mesh name="defaultMaterial_cell004" geometry={nodes.defaultMaterial_cell004.geometry} material={materialBreakingJar} position={[4.611, 11.428, 1.58]} userData={{ name: 'defaultMaterial_cell.004' }} />
      <mesh name="defaultMaterial_cell005" geometry={nodes.defaultMaterial_cell005.geometry} material={materialBreakingJar} position={[-4.151, 7.629, 1.829]} userData={{ name: 'defaultMaterial_cell.005' }} />
      <mesh name="defaultMaterial_cell006" geometry={nodes.defaultMaterial_cell006.geometry} material={materialBreakingJar} position={[2.016, 15.145, -2.623]} userData={{ name: 'defaultMaterial_cell.006' }} />
      <mesh name="defaultMaterial_cell007" geometry={nodes.defaultMaterial_cell007.geometry} material={materialBreakingJar} position={[4.062, 1.909, -2.602]} userData={{ name: 'defaultMaterial_cell.007' }} />
      <mesh name="defaultMaterial_cell009" geometry={nodes.defaultMaterial_cell009.geometry} material={materialBreakingJar} position={[-4.113, 13.314, -0.431]} userData={{ name: 'defaultMaterial_cell.009' }} />
      <mesh name="defaultMaterial_cell010" geometry={nodes.defaultMaterial_cell010.geometry} material={materialBreakingJar} position={[3.274, 5.619, -3.846]} userData={{ name: 'defaultMaterial_cell.010' }} />
      <mesh name="defaultMaterial_cell012" geometry={nodes.defaultMaterial_cell012.geometry} material={materialBreakingJar} position={[-2.37, 13.939, -3.036]} userData={{ name: 'defaultMaterial_cell.012' }} />
      <mesh name="defaultMaterial_cell013" geometry={nodes.defaultMaterial_cell013.geometry} material={materialBreakingJar} position={[-2.695, 8.358, -4.139]} userData={{ name: 'defaultMaterial_cell.013' }} />
      <mesh name="defaultMaterial_cell014" geometry={nodes.defaultMaterial_cell014.geometry} material={materialBreakingJar} position={[3.603, 12.142, 2.978]} userData={{ name: 'defaultMaterial_cell.014' }} />
      <mesh name="defaultMaterial_cell015" geometry={nodes.defaultMaterial_cell015.geometry} material={materialBreakingJar} position={[-2.888, 1.648, 3.446]} userData={{ name: 'defaultMaterial_cell.015' }} />
      <mesh name="defaultMaterial_cell017" geometry={nodes.defaultMaterial_cell017.geometry} material={materialBreakingJar} position={[-4.398, 12.563, -1.85]} userData={{ name: 'defaultMaterial_cell.017' }} />
      <mesh name="defaultMaterial_cell018" geometry={nodes.defaultMaterial_cell018.geometry} material={materialBreakingJar} position={[2.548, 14.585, 2.258]} userData={{ name: 'defaultMaterial_cell.018' }} />
      <mesh name="defaultMaterial_cell020" geometry={nodes.defaultMaterial_cell020.geometry} material={materialBreakingJar} position={[-3.474, 1.078, 1.664]} userData={{ name: 'defaultMaterial_cell.020' }} />
      <mesh name="defaultMaterial_cell021" geometry={nodes.defaultMaterial_cell021.geometry} material={materialBreakingJar} position={[1.424, 1.337, 3.976]} userData={{ name: 'defaultMaterial_cell.021' }} />
      <mesh name="defaultMaterial_cell022" geometry={nodes.defaultMaterial_cell022.geometry} material={materialBreakingJar} position={[1.632, 0.739, 2.151]} userData={{ name: 'defaultMaterial_cell.022' }} />
      <mesh name="defaultMaterial_cell024" geometry={nodes.defaultMaterial_cell024.geometry} material={materialBreakingJar} position={[-2.148, 14.945, 2.243]} userData={{ name: 'defaultMaterial_cell.024' }} />
      <mesh name="defaultMaterial_cell025" geometry={nodes.defaultMaterial_cell025.geometry} material={materialBreakingJar} position={[1.674, 16.018, 2.591]} userData={{ name: 'defaultMaterial_cell.025' }} />
      <mesh name="defaultMaterial_cell026" geometry={nodes.defaultMaterial_cell026.geometry} material={materialBreakingJar} position={[-0.427, 0.762, 3.109]} userData={{ name: 'defaultMaterial_cell.026' }} />
      <mesh name="defaultMaterial_cell027" geometry={nodes.defaultMaterial_cell027.geometry} material={materialBreakingJar} position={[-4.446, 1.736, -0.881]} userData={{ name: 'defaultMaterial_cell.027' }} />
      <mesh name="defaultMaterial_cell028" geometry={nodes.defaultMaterial_cell028.geometry} material={materialBreakingJar} position={[0.715, 0.82, -3.525]} userData={{ name: 'defaultMaterial_cell.028' }} />
      <mesh name="defaultMaterial_cell029" geometry={nodes.defaultMaterial_cell029.geometry} material={materialBreakingJar} position={[1.891, 0.732, -1.072]} userData={{ name: 'defaultMaterial_cell.029' }} />
      <mesh name="defaultMaterial_cell030" geometry={nodes.defaultMaterial_cell030.geometry} material={materialBreakingJar} position={[2.756, 1.588, 3.419]} userData={{ name: 'defaultMaterial_cell.030' }} />
      <mesh name="defaultMaterial_cell031" geometry={nodes.defaultMaterial_cell031.geometry} material={materialBreakingJar} position={[3.929, 13.81, -0.042]} userData={{ name: 'defaultMaterial_cell.031' }} />
      <mesh name="defaultMaterial_cell032" geometry={nodes.defaultMaterial_cell032.geometry} material={materialBreakingJar} position={[2.459, 12.523, 3.832]} userData={{ name: 'defaultMaterial_cell.032' }} />
      <mesh name="defaultMaterial_cell033" geometry={nodes.defaultMaterial_cell033.geometry} material={materialBreakingJar} position={[2.427, 13.21, -3.637]} userData={{ name: 'defaultMaterial_cell.033' }} />
      <mesh name="defaultMaterial_cell034" geometry={nodes.defaultMaterial_cell034.geometry} material={materialBreakingJar} position={[-4.035, 11.403, -2.819]} userData={{ name: 'defaultMaterial_cell.034' }} />
      <mesh name="defaultMaterial_cell035" geometry={nodes.defaultMaterial_cell035.geometry} material={materialBreakingJar} position={[-3.3, 0.754, -0.385]} userData={{ name: 'defaultMaterial_cell.035' }} />
      <mesh name="defaultMaterial_cell036" geometry={nodes.defaultMaterial_cell036.geometry} material={materialBreakingJar} position={[-1.553, 11.623, 4.376]} userData={{ name: 'defaultMaterial_cell.036' }} />
      <mesh name="defaultMaterial_cell037" geometry={nodes.defaultMaterial_cell037.geometry} material={materialBreakingJar} position={[4.758, 7.974, -1.216]} userData={{ name: 'defaultMaterial_cell.037' }} />
      <mesh name="defaultMaterial_cell039" geometry={nodes.defaultMaterial_cell039.geometry} material={materialBreakingJar} position={[3.871, 1.052, -1.372]} userData={{ name: 'defaultMaterial_cell.039' }} />
      <mesh name="defaultMaterial_cell040" geometry={nodes.defaultMaterial_cell040.geometry} material={materialBreakingJar} position={[-4.024, 13.509, 1.19]} userData={{ name: 'defaultMaterial_cell.040' }} />
      <mesh name="defaultMaterial_cell041" geometry={nodes.defaultMaterial_cell041.geometry} material={materialBreakingJar} position={[-0.948, 11.49, -4.673]} userData={{ name: 'defaultMaterial_cell.041' }} />
      <mesh name="defaultMaterial_cell042" geometry={nodes.defaultMaterial_cell042.geometry} material={materialBreakingJar} position={[-0.084, 13.02, 4.214]} userData={{ name: 'defaultMaterial_cell.042' }} />
      <mesh name="defaultMaterial_cell043" geometry={nodes.defaultMaterial_cell043.geometry} material={materialBreakingJar} position={[-4.054, 3.64, -3.032]} userData={{ name: 'defaultMaterial_cell.043' }} />
      <mesh name="defaultMaterial_cell044" geometry={nodes.defaultMaterial_cell044.geometry} material={materialBreakingJar} position={[0.144, 3.029, 4.744]} userData={{ name: 'defaultMaterial_cell.044' }} />
      <mesh name="defaultMaterial_cell045" geometry={nodes.defaultMaterial_cell045.geometry} material={materialBreakingJar} position={[-0.737, 13.677, -3.998]} userData={{ name: 'defaultMaterial_cell.045' }} />
      <mesh name="defaultMaterial_cell046" geometry={nodes.defaultMaterial_cell046.geometry} material={materialBreakingJar} position={[-4.417, 4.401, 1.852]} userData={{ name: 'defaultMaterial_cell.046' }} />
      <mesh name="defaultMaterial_cell048" geometry={nodes.defaultMaterial_cell048.geometry} material={materialBreakingJar} position={[4.717, 5.626, 1.091]} userData={{ name: 'defaultMaterial_cell.048' }} />
      <mesh name="defaultMaterial_cell049" geometry={nodes.defaultMaterial_cell049.geometry} material={materialBreakingJar} position={[5.026, 11.097, -0.644]} userData={{ name: 'defaultMaterial_cell.049' }} />
      <mesh name="defaultMaterial_cell051" geometry={nodes.defaultMaterial_cell051.geometry} material={materialBreakingJar} position={[4.811, 2.818, -0.948]} userData={{ name: 'defaultMaterial_cell.051' }} />
      <mesh name="defaultMaterial_cell053" geometry={nodes.defaultMaterial_cell053.geometry} material={materialBreakingJar} position={[-0.494, 7.338, -5.099]} userData={{ name: 'defaultMaterial_cell.053' }} />
      <mesh name="defaultMaterial_cell054" geometry={nodes.defaultMaterial_cell054.geometry} material={materialBreakingJar} position={[-0.107, 2.336, -4.935]} userData={{ name: 'defaultMaterial_cell.054' }} />
      <mesh name="defaultMaterial_cell055" geometry={nodes.defaultMaterial_cell055.geometry} material={materialBreakingJar} position={[-2.118, 13.453, 3.637]} userData={{ name: 'defaultMaterial_cell.055' }} />
      <mesh name="defaultMaterial_cell056" geometry={nodes.defaultMaterial_cell056.geometry} material={materialBreakingJar} position={[3.893, 11.89, -2.816]} userData={{ name: 'defaultMaterial_cell.056' }} />
      <mesh name="defaultMaterial_cell057" geometry={nodes.defaultMaterial_cell057.geometry} material={materialBreakingJar} position={[-2.793, 15.048, -1.764]} userData={{ name: 'defaultMaterial_cell.057' }} />
      <mesh name="defaultMaterial_cell058" geometry={nodes.defaultMaterial_cell058.geometry} material={materialBreakingJar} position={[-3.003, 15.321, 1.02]} userData={{ name: 'defaultMaterial_cell.058' }} />
      <mesh name="defaultMaterial_cell059" geometry={nodes.defaultMaterial_cell059.geometry} material={materialBreakingJar} position={[3.102, 15.003, 1.019]} userData={{ name: 'defaultMaterial_cell.059' }} />
      <mesh name="defaultMaterial_cell060" geometry={nodes.defaultMaterial_cell060.geometry} material={materialBreakingJar} position={[-0.924, 1.364, 4.168]} userData={{ name: 'defaultMaterial_cell.060' }} />
      <mesh name="defaultMaterial_cell061" geometry={nodes.defaultMaterial_cell061.geometry} material={materialBreakingJar} position={[1.509, 13.618, 3.717]} userData={{ name: 'defaultMaterial_cell.061' }} />
      <mesh name="defaultMaterial_cell062" geometry={nodes.defaultMaterial_cell062.geometry} material={materialBreakingJar} position={[-0.86, 14.805, 3.048]} userData={{ name: 'defaultMaterial_cell.062' }} />
      <mesh name="defaultMaterial_cell063" geometry={nodes.defaultMaterial_cell063.geometry} material={materialBreakingJar} position={[-1.789, 15.64, -2.657]} userData={{ name: 'defaultMaterial_cell.063' }} />
      <mesh name="defaultMaterial_cell064" geometry={nodes.defaultMaterial_cell064.geometry} material={materialBreakingJar} position={[-2.891, 1.163, -2.842]} userData={{ name: 'defaultMaterial_cell.064' }} />
      <mesh name="defaultMaterial_cell065" geometry={nodes.defaultMaterial_cell065.geometry} material={materialBreakingJar} position={[-0.737, 0.737, -0.173]} userData={{ name: 'defaultMaterial_cell.065' }} />
      <mesh name="defaultMaterial_cell066" geometry={nodes.defaultMaterial_cell066.geometry} material={materialBreakingJar} position={[-4.269, 6.502, -2.547]} userData={{ name: 'defaultMaterial_cell.066' }} />
      <mesh name="defaultMaterial_cell067" geometry={nodes.defaultMaterial_cell067.geometry} material={materialBreakingJar} position={[-3.782, 12.37, 2.18]} userData={{ name: 'defaultMaterial_cell.067' }} />
      <mesh name="defaultMaterial_cell068" geometry={nodes.defaultMaterial_cell068.geometry} material={materialBreakingJar} position={[1.765, 14.732, 2.758]} userData={{ name: 'defaultMaterial_cell.068' }} />
      <mesh name="defaultMaterial_cell070" geometry={nodes.defaultMaterial_cell070.geometry} material={materialBreakingJar} position={[-4.708, 10.222, -1.311]} userData={{ name: 'defaultMaterial_cell.070' }} />
      <mesh name="defaultMaterial_cell071" geometry={nodes.defaultMaterial_cell071.geometry} material={materialBreakingJar} position={[-2.333, 5.636, -4.386]} userData={{ name: 'defaultMaterial_cell.071' }} />
      <mesh name="defaultMaterial_cell072" geometry={nodes.defaultMaterial_cell072.geometry} material={materialBreakingJar} position={[1.721, 4.228, -4.755]} userData={{ name: 'defaultMaterial_cell.072' }} />
      <mesh name="defaultMaterial_cell074" geometry={nodes.defaultMaterial_cell074.geometry} material={materialBreakingJar} position={[-2.064, 2.147, -4.276]} userData={{ name: 'defaultMaterial_cell.074' }} />
      <mesh name="defaultMaterial_cell075" geometry={nodes.defaultMaterial_cell075.geometry} material={materialBreakingJar} position={[4.768, 9.348, 1.171]} userData={{ name: 'defaultMaterial_cell.075' }} />
      <mesh name="defaultMaterial_cell076" geometry={nodes.defaultMaterial_cell076.geometry} material={materialBreakingJar} position={[-0.733, 15.975, 2.932]} userData={{ name: 'defaultMaterial_cell.076' }} />
      <mesh name="defaultMaterial_cell077" geometry={nodes.defaultMaterial_cell077.geometry} material={materialBreakingJar} position={[2.128, 1.583, -4.184]} userData={{ name: 'defaultMaterial_cell.077' }} />
      <mesh name="defaultMaterial_cell078" geometry={nodes.defaultMaterial_cell078.geometry} material={materialBreakingJar} position={[-2.925, 16.155, -1.203]} userData={{ name: 'defaultMaterial_cell.078' }} />
      <mesh name="defaultMaterial_cell079" geometry={nodes.defaultMaterial_cell079.geometry} material={materialBreakingJar} position={[1.771, 8.25, -4.784]} userData={{ name: 'defaultMaterial_cell.079' }} />
      <mesh name="defaultMaterial_cell080" geometry={nodes.defaultMaterial_cell080.geometry} material={materialBreakingJar} position={[4.701, 4.195, -1.644]} userData={{ name: 'defaultMaterial_cell.080' }} />
      <mesh name="defaultMaterial_cell081" geometry={nodes.defaultMaterial_cell081.geometry} material={materialBreakingJar} position={[0.257, 15.763, -3.223]} userData={{ name: 'defaultMaterial_cell.081' }} />
      <mesh name="defaultMaterial_cell082" geometry={nodes.defaultMaterial_cell082.geometry} material={materialBreakingJar} position={[-3.069, 16.366, -0.357]} userData={{ name: 'defaultMaterial_cell.082' }} />
      <mesh name="defaultMaterial_cell083" geometry={nodes.defaultMaterial_cell083.geometry} material={materialBreakingJar} position={[0.036, 14.748, -3.441]} userData={{ name: 'defaultMaterial_cell.083' }} />
      <mesh name="defaultMaterial_cell084" geometry={nodes.defaultMaterial_cell084.geometry} material={materialBreakingJar} position={[3.538, 14.023, -1.734]} userData={{ name: 'defaultMaterial_cell.084' }} />
      <mesh name="defaultMaterial_cell085" geometry={nodes.defaultMaterial_cell085.geometry} material={materialBreakingJar} position={[1.265, 8.389, 4.239]} userData={{ name: 'defaultMaterial_cell.085' }} />
      <mesh name="defaultMaterial_cell086" geometry={nodes.defaultMaterial_cell086.geometry} material={materialBreakingJar} position={[4.857, 5.029, -1.049]} userData={{ name: 'defaultMaterial_cell.086' }} />
      <mesh name="defaultMaterial_cell087" geometry={nodes.defaultMaterial_cell087.geometry} material={materialBreakingJar} position={[-1.958, 16.138, 2.276]} userData={{ name: 'defaultMaterial_cell.087' }} />
      <mesh name="defaultMaterial_cell088" geometry={nodes.defaultMaterial_cell088.geometry} material={materialBreakingJar} position={[-3.842, 2.997, 2.681]} userData={{ name: 'defaultMaterial_cell.088' }} />
      <mesh name="defaultMaterial_cell089" geometry={nodes.defaultMaterial_cell089.geometry} material={materialBreakingJar} position={[3.202, 15.286, -0.743]} userData={{ name: 'defaultMaterial_cell.089' }} />
      <mesh name="defaultMaterial_cell091" geometry={nodes.defaultMaterial_cell091.geometry} material={materialBreakingJar} position={[2.626, 16.157, 1.421]} userData={{ name: 'defaultMaterial_cell.091' }} />
      <mesh name="defaultMaterial_cell094" geometry={nodes.defaultMaterial_cell094.geometry} material={materialBreakingJar} position={[0.544, 15.379, 3.019]} userData={{ name: 'defaultMaterial_cell.094' }} />
      <mesh name="defaultMaterial_cell096" geometry={nodes.defaultMaterial_cell096.geometry} material={materialBreakingJar} position={[-3.109, 15.499, -0.151]} userData={{ name: 'defaultMaterial_cell.096' }} />
      <mesh name="defaultMaterial_cell008" geometry={nodes.defaultMaterial_cell008.geometry} material={materialBreakingJar} position={[3.343, 3.873, 3.461]} userData={{ name: 'defaultMaterial_cell.008' }} />
      <mesh name="defaultMaterial_cell011" geometry={nodes.defaultMaterial_cell011.geometry} material={materialBreakingJar} position={[-2.936, 16.384, 0.786]} userData={{ name: 'defaultMaterial_cell.011' }} />

      {/* jar origin:*/}
      <mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materialBreakingJar} position={[0.06, 8.605, -0.132]} scale={7.915} userData={{ name: 'defaultMaterial' }} />
    </group>
  )
}

// function LidObject() {
//   const { nodes, materials } = useLoader(GLTFLoader, "/jar-and-paper-scene.gltf");
//   const customMaterialLid = new MeshStandardMaterial({
//     ...materials.material, // Copy existing material properties
//     depthTest: true, // Override depthTest to true
//     depthWrite: true,
//   });
//   return (
//     <group position={[-0.471, 1.491, 0.736]} rotation={[-Math.PI / 2, 0, 0]}>
//       <group position={[0.532, 0.868, 7.115]} rotation={[Math.PI / 2, 0, 0]} scale={7.915}>
//         <mesh geometry={nodes.defaultMaterial.geometry} material={customMaterialLid} />
//         <mesh geometry={nodes.defaultMaterial_1.geometry} material={customMaterialLid} />
//       </group>
//     </group>
//   )
// }




