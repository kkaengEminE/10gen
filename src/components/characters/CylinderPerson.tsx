interface CylinderPersonProps {
  position?: [number, number, number];
  color?: string;
  accentColor?: string;
}

export function CylinderPerson({
  position = [0, 0, 0],
  color = '#d6d3d1',
  accentColor,
}: CylinderPersonProps) {
  return (
    <group position={position}>
      {/* Body — cylinder */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 1.2, 12]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Accent band */}
      {accentColor && (
        <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.31, 0.025, 8, 24]} />
          <meshStandardMaterial color={accentColor} />
        </mesh>
      )}

      {/* Head — sphere */}
      <mesh position={[0, 1.45, 0]} castShadow>
        <sphereGeometry args={[0.25, 14, 10]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.08, 1.5, 0.22]}>
        <sphereGeometry args={[0.03, 8, 6]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
      <mesh position={[0.08, 1.5, 0.22]}>
        <sphereGeometry args={[0.03, 8, 6]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
    </group>
  );
}
