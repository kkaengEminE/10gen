export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.85} color="#ffffff" />
      <directionalLight
        position={[8, 15, 5]}
        intensity={0.6}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={60}
      />
      <hemisphereLight args={['#ffffff', '#f0eded', 0.3]} />
    </>
  );
}
