import { extend } from '@react-three/fiber'
import { BoxBufferGeometry } from 'three-stdlib'
extend({ BoxBufferGeometry })

export default function Floor({ props }) {
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial color='white' />
        </mesh>
    )
}