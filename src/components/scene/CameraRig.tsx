import { OrthographicCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, type MutableRefObject } from 'react';
import { Group, Vector3 } from 'three';

const CAMERA_OFFSET: [number, number, number] = [15, 25, 15];
const CAMERA_FRUSTUM = 12;

interface CameraRigProps {
  targetRef: MutableRefObject<Vector3>;
}

export function CameraRig({ targetRef }: CameraRigProps) {
  const groupRef = useRef<Group>(null);
  const { size } = useThree();

  useFrame(() => {
    const g = groupRef.current;
    if (!g) return;
    g.position.lerp(targetRef.current, 0.08);
  });

  const aspect = size.width / size.height;
  const vertical = CAMERA_FRUSTUM;
  const horizontal = vertical * aspect;

  return (
    <group ref={groupRef}>
      <OrthographicCamera
        makeDefault
        position={CAMERA_OFFSET}
        left={-horizontal}
        right={horizontal}
        top={vertical}
        bottom={-vertical}
        near={0.1}
        far={200}
        zoom={1}
        onUpdate={(cam) => cam.lookAt(0, 0, 0)}
      />
    </group>
  );
}
