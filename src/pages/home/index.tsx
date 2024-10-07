import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

const Home = () => {
    const obj = useLoader(OBJLoader, '/models/obj/Lowpoly_Notebook_2.obj')
    return (
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 5] }}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
            />
            <pointLight
                position={[-10, -10, -10]}
                decay={0}
                intensity={Math.PI}
            />
            <primitive object={obj} />
        </Canvas>
    )
}

export default Home
