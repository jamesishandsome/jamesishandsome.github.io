import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useControllableValue } from 'ahooks'
import { useCubeTexture, useGLTF, Environment } from '@react-three/drei'

const Scene = () => {
    const [focus, setFocus] = React.useState(false)
    useEffect(() => {
        console.log('focus', focus)
    }, [focus])
    return (
        <>
            <Rig focus={focus} />
            <ambientLight />
            <CubeTexture />
            <JamesMesh focus={focus} onChange={setFocus} />
        </>
    )
}

const CubeTexture = () => {
    return (
        <Environment
            // background={false}
            // background
            // files={['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']}
            // path={'/textures/background/'}
            preset="city"
        />
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

    const { nodes, materials } = useGLTF('/models/office/scene.gltf')

    const boxRef = useRef()
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.Big_Wallpaper}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Cactus}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Drawer}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.File_Stand}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.File_Storage}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Keyboard}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Lamp}
                />
                <mesh
                    onClick={() => {
                        console.log('computer')
                    }}
                    // onClick={(e) => {
                    //     if (!focus) setFocus(true)
                    // }}
                    onPointerEnter={() => {
                        // change cursor to pointer
                        document.body.style.cursor = 'pointer'
                    }}
                    onPointerLeave={() => {
                        document.body.style.cursor = 'auto'
                    }}
                    // onPointerMissed={() => {
                    //     if (focus) setFocus(false)
                    // }}
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.Monitor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.material_15}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.material_16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.Pencil}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Photo}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.PinBoard}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.Shelf01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.Shelf02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.Shelf03}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Stool}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.Table}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.Tape}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.Telephone}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.Walls}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.Water_Cooler}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.Big_Bottle}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.Big_Bottle}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.File01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials.File02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.File03}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.File04}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.File_Stack}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.Paper01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.Paper02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.Paper03}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.Paper_Cup}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={materials.Paper_Stack}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials.material_24}
                />
            </group>
        </group>
        // <primitive
        //     object={office.scene}
        //
        //     ref={boxRef}
        //     args={[1, 1, 1]}
        //     rotation={[0, Math.PI / 2, 0]}
        // ></primitive>
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
            camera.position.lerp(
                vec.set(-10 + pointer.x * 3, 10 + pointer.y * 3, -10),
                0.1
            )
            camera.lookAt(0, 0, 0)
        })
    }
}

const App = () => {
    return (
        <Canvas
            camera={{
                position: [-10, 10, -10],
            }}
        >
            <Scene />
        </Canvas>
    )
}

export default App
