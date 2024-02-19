import { extend } from "react-three-fiber"
export default function Floor({ ...props }) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh)
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial color='white' />
        </mesh>
    )
}