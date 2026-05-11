import { Grid } from '@react-three/drei';

export function Ground() {
  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#fafafa" />
      </mesh>
      <Grid
        position={[0, 0, 0]}
        args={[200, 200]}
        cellSize={2}
        cellThickness={0.3}
        cellColor="#b91c1c"
        sectionSize={10}
        sectionThickness={0.6}
        sectionColor="#991b1b"
        fadeDistance={40}
        fadeStrength={1.5}
        infiniteGrid
      />
    </group>
  );
}
