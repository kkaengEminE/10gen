import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

interface ConeNarratorProps {
  position?: [number, number, number];
}

export function ConeNarrator({ position = [0, 0, 0] }: ConeNarratorProps) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    const g = groupRef.current;
    if (!g) return;
    g.position.y = position[1] + Math.sin(clock.elapsedTime * 1.5) * 0.05;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Body — cone */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <coneGeometry args={[0.6, 2.0, 16]} />
        <meshStandardMaterial color="#f0eeec" />
      </mesh>

      {/* Accent ring */}
      <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.03, 8, 32]} />
        <meshStandardMaterial color="#b91c1c" />
      </mesh>

      {/* Second accent ring higher */}
      <mesh position={[0, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 32]} />
        <meshStandardMaterial color="#b91c1c" opacity={0.6} transparent />
      </mesh>

      {/* Head — sphere */}
      <mesh position={[0, 2.35, 0]} castShadow>
        <sphereGeometry args={[0.35, 16, 12]} />
        <meshStandardMaterial color="#e8e5e2" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.12, 2.4, 0.3]}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
      <mesh position={[0.12, 2.4, 0.3]}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
    </group>
  );
}
