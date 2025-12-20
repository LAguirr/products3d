import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { Car } from './Car';

function SceneContent() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[10, 4, 10]} fov={30} />

            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={2} />

            <Suspense fallback={null}>
                <Car />
                <Environment preset="studio" />
            </Suspense>

            <ContactShadows
                position={[0, 0, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
            />

            <OrbitControls
                enablePan={false}
                minDistance={5}
                maxDistance={16}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2.1}
                makeDefault
            />
        </>
    );
}

export function Configurator() {
    return (
        <div style={{ width: '100%', height: '100%', background: '#050505' }}>
            <Canvas
                shadows
                dpr={[1, 2]}
                onCreated={(state) => {
                    state.gl.setClearColor('#050505');
                }}
            >
                <SceneContent />
            </Canvas>
        </div>
    );
}
