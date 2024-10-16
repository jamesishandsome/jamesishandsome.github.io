import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Box, CameraControls, OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three'
import { useControllableValue, useMouse } from 'ahooks'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
const Scene = () => {
    const [focus, setFocus] = React.useState(false)
    useEffect(() => {
        console.log('focus', focus)
    }, [focus])
    return (
        <>
            <Rig focus={focus} />
            <ambientLight />
            <JamesMesh focus={focus} onChange={setFocus} />
        </>
    )
}

const JamesMesh = (props: {
    focus: boolean
    onChange?: (value: ((prevState: boolean) => boolean) | boolean) => void
}) => {
    const [focus, setFocus] = useControllableValue(props, {
        defaultValue: false,
    })
    const { pointer } = useThree()
    const obj = useLoader(
        OBJLoader,
        '/models/obj/Lowpoly_Notebook_2.obj',
        () => {},
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        }
    )

    const boxRef = useRef()
    return (
        <primitive
            object={obj}
            onClick={(e) => {
                console.log('click')
                if (!focus) setFocus(true)
            }}
            onPointerEnter={(e) => {
                console.log('enter')
                // change cursor to pointer
                document.body.style.cursor = 'pointer'
            }}
            onPointerLeave={(e) => {
                console.log('leave')
                document.body.style.cursor = 'auto'
            }}
            onPointerMissed={() => {
                console.log('missed')
                if (focus) setFocus(false)
            }}
            ref={boxRef}
            args={[1, 1, 1]}
            rotation={[0, Math.PI / 2, 0]}
        >
            <meshNormalMaterial />
        </primitive>
    )
}

function Rig(props: { focus: boolean }) {
    const { camera, pointer } = useThree()
    const vec = new Vector3()
    const { focus } = props

    if (focus) {
        return useFrame(() => {
            camera.position.lerp(vec.set(0, 0, 3), 0.1)
            camera.lookAt(0, 0, 0)
        })
    } else {
        return useFrame(() => {
            camera.position.lerp(vec.set(pointer.x * 3, pointer.y * 3, 6), 0.1)
            camera.lookAt(0, 0, 0)
        })
    }
}

const App = () => {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>
            <Scene />
        </Canvas>
    )
}

export default App
