import { useGLTF } from '@react-three/drei';
import { useStore } from '../store';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export function Car() {
    const { bodyColor, models, currentModelIndex } = useStore();
    const currentModel = models[currentModelIndex];
    const groupRef = useRef();

    // Load the current model
    const { scene } = useGLTF(currentModel.path);

    // Smooth transition when model changes
    useEffect(() => {
        if (groupRef.current) {
            // Reset and animate
            gsap.fromTo(groupRef.current.scale,
                { x: 0, y: 0, z: 0 },
                {
                    x: currentModel.scale,
                    y: currentModel.scale,
                    z: currentModel.scale,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        }
    }, [currentModel]);

    // Apply colors to the specific body parts
    useMemo(() => {
        scene.traverse((node) => {
            if (node.isMesh) {
                const nodeName = node.name.toLowerCase();
                const isColorable = currentModel.colorableParts.some(part => nodeName.includes(part));

                if (isColorable && node.material) {
                    node.material.color.set(bodyColor);
                }
            }
        });
    }, [scene, bodyColor, currentModel]);

    return (
        <group ref={groupRef}>
            <primitive
                key={currentModel.path}
                object={scene}
                rotation={[0, -Math.PI / 4, 0]}
                position={currentModel.position}
            />
        </group>
    );
}

// Preload all models
useStore.getState().models.forEach(model => {
    useGLTF.preload(model.path);
});
