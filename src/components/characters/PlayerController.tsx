import { useFrame } from '@react-three/fiber';
import { useRef, type MutableRefObject } from 'react';
import { Group, Vector3 } from 'three';
import { CylinderPerson } from '@/components/characters/CylinderPerson';
import type { InputState } from '@/hooks/useInput';

const WALK_SPEED = 4;
const BOUNDARY = 15;
const SQ = Math.SQRT1_2;

const tmpMove = new Vector3();

interface PlayerControllerProps {
  inputRef: MutableRefObject<InputState>;
  positionRef: MutableRefObject<Vector3>;
  active: boolean;
}

export function PlayerController({
  inputRef,
  positionRef,
  active,
}: PlayerControllerProps) {
  const groupRef = useRef<Group>(null);
  const facingYaw = useRef(0);

  useFrame((_, dt) => {
    const g = groupRef.current;
    if (!g || !active) return;

    const input = inputRef.current;

    let ix = 0;
    let iz = 0;
    if (input.forward) iz -= 1;
    if (input.back) iz += 1;
    if (input.left) ix -= 1;
    if (input.right) ix += 1;

    const hasMove = ix !== 0 || iz !== 0;
    if (hasMove) {
      const len = Math.hypot(ix, iz);
      ix /= len;
      iz /= len;
    }

    // Screen-relative isometric mapping (camera at [15, 25, 15])
    const wx = (ix + iz) * SQ;
    const wz = (iz - ix) * SQ;

    tmpMove.set(wx * WALK_SPEED * dt, 0, wz * WALK_SPEED * dt);
    g.position.add(tmpMove);

    // Clamp to boundary
    g.position.x = Math.max(-BOUNDARY, Math.min(BOUNDARY, g.position.x));
    g.position.z = Math.max(-BOUNDARY, Math.min(BOUNDARY, g.position.z));
    g.position.y = 0;

    // Update position ref for camera
    positionRef.current.copy(g.position);

    // Facing direction
    if (hasMove) {
      facingYaw.current = Math.atan2(wx, wz);
    }

    // Smooth rotation
    const cur = g.rotation.y;
    let diff = facingYaw.current - cur;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    g.rotation.y = cur + diff * Math.min(1, dt * 10);
  });

  return (
    <group ref={groupRef} position={[0, 0, 6]}>
      <CylinderPerson color="#e8e5e2" accentColor="#b91c1c" />
    </group>
  );
}
