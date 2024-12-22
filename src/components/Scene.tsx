import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';

export const Scene = () => {
  const groupRef = useRef();

  return (
    <Canvas className="w-full h-screen">
      <OrbitControls enableZoom={false} />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <motion.group
        ref={groupRef}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <mesh>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </mesh>
      </motion.group>
    </Canvas>
  );
};