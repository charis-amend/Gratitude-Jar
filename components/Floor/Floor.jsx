export default function Floor({ props }) {
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial color='white' />
        </mesh>
    )
}