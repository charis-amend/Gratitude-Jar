import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import htm from 'htm';

const html = htm.bind(React.createElement)

export default function GlassJar() {


    function Jar(props) {
        const meshRef = useRef()
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01))
        return html` <mesh
        ...${props}
        ref=${meshRef}
        scale=${active ? 1.5 : 1}
        onClick=${() => setActive(!active)}
        onPointerOver=${() => setHover(true)}
        onPointerOut=${() => setHover(false)}
      >
        <boxGeometry args=${[1, 1, 1]} />
        <meshStandardMaterial color=${hovered ? 'hotpink' : 'orange'} />
      </mesh>`
    }
    ReactDOM.render(

        html` <${Canvas}>
                <ambientLight />
                <pointLight position=${[10, 10, 10]} />
                <${Jar} position=${[-1.2, 0, 0]} />
                <${Jar} position=${[1.2, 0, 0]} />
            <//>`,
        document.getElementById('root'),
    )
}



