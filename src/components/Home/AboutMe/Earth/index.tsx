'use client'

import { Canvas, useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three'; // Adjust the import statement
import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion-3d';
import { useScroll } from 'framer-motion';

interface TexturesState {
    color: Texture | null;
    normal: Texture | null;
    aoMap: Texture | null;
    loaded: boolean;
}

const EarthComponent = () => {
    const [textures, setTextures] = useState<TexturesState>({
        color: null,
        normal: null,
        aoMap: null,
        loaded: false,
    });
    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start'],
    });

    useEffect(() => {
        const loadTextures = async () => {
            try {
                const [color, normal, aoMap] = await Promise.all([
                    new TextureLoader().loadAsync('/assets/color.jpg'),
                    new TextureLoader().loadAsync('/assets/normal.png'),
                    new TextureLoader().loadAsync('/assets/occlusion.jpg'),
                ]);
                setTextures({ color, normal, aoMap, loaded: true });
            } catch (error) {
                console.error('Error loading textures:', error);
            }
        };
        if (!textures.loaded) {
            loadTextures();
        }
    }, [textures]);

    if (!textures.loaded) {
        return null; // Return a placeholder or loading indicator while textures are loading
    }

    const { color, normal, aoMap } = textures;

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color!} normalMap={normal!} aoMap={aoMap!} />
            </motion.mesh>
        </Canvas>
    );
};

export default EarthComponent;
