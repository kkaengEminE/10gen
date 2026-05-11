import { OrthographicCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, type MutableRefObject } from 'react';
import { Group, OrthographicCamera as OrthoCamera, Vector3 } from 'three';
import { usePresentationStore } from '@/store/presentationStore';

const CAMERA_DIST = 35;
const CAMERA_FRUSTUM = 12;
const MIN_POLAR = 0.3;
const MAX_POLAR = Math.PI / 2 - 0.05;

interface CameraRigProps {
  targetRef: MutableRefObject<Vector3>;
  /** Exposes current camera yaw so PlayerController can make movement camera-relative */
  yawRef: MutableRefObject<number>;
}

/**
 * Orbital camera that follows the player.
 * - Right-mouse-drag rotates the view.
 * - Scroll wheel zooms.
 */
export function CameraRig({ targetRef, yawRef }: CameraRigProps) {
  const groupRef = useRef<Group>(null);
  const camRef = useRef<OrthoCamera>(null);
  const { size } = useThree();

  const azimuth = useRef(Math.PI / 4);
  const polar = useRef(Math.PI / 4);
  const dragging = useRef(false);

  const zoom = usePresentationStore((s) => s.zoom);
  const phase = usePresentationStore((s) => s.phase);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (e.button === 2 || e.button === 1 || e.pointerType === 'touch') {
        dragging.current = true;
      }
    }
    function onPointerUp() {
      dragging.current = false;
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragging.current) return;
      if (phase !== 'presenting') return;
      azimuth.current -= e.movementX * 0.005;
      polar.current = Math.max(
        MIN_POLAR,
        Math.min(MAX_POLAR, polar.current - e.movementY * 0.005),
      );
    }
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const store = usePresentationStore.getState();
      if (e.deltaY > 0) store.zoomOut();
      else store.zoomIn();
    }
    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
    }

    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('contextmenu', onContextMenu);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('contextmenu', onContextMenu);
    };
  }, [phase]);

  useFrame(() => {
    const g = groupRef.current;
    const cam = camRef.current;
    if (!g || !cam) return;

    // Smooth follow player
    g.position.lerp(targetRef.current, 0.08);

    // Camera position from spherical
    const az = azimuth.current;
    const po = polar.current;
    cam.position.set(
      CAMERA_DIST * Math.sin(po) * Math.sin(az),
      CAMERA_DIST * Math.cos(po),
      CAMERA_DIST * Math.sin(po) * Math.cos(az),
    );
    cam.lookAt(0, 0, 0);

    // Update frustum for zoom
    const aspect = size.width / size.height;
    const vertical = CAMERA_FRUSTUM / zoom;
    const horizontal = vertical * aspect;
    cam.left = -horizontal;
    cam.right = horizontal;
    cam.top = vertical;
    cam.bottom = -vertical;
    cam.updateProjectionMatrix();

    // Expose yaw for movement
    yawRef.current = az;
  });

  const aspect = size.width / size.height;
  const vertical = CAMERA_FRUSTUM / zoom;
  const horizontal = vertical * aspect;

  return (
    <group ref={groupRef}>
      <OrthographicCamera
        ref={camRef}
        makeDefault
        position={[
          CAMERA_DIST * Math.sin(Math.PI / 4) * Math.sin(Math.PI / 4),
          CAMERA_DIST * Math.cos(Math.PI / 4),
          CAMERA_DIST * Math.sin(Math.PI / 4) * Math.cos(Math.PI / 4),
        ]}
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
