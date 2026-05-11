import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Vector3 } from 'three';
import { Lighting } from '@/components/scene/Lighting';
import { Ground } from '@/components/scene/Ground';
import { CameraRig } from '@/components/scene/CameraRig';
import { PlayerController } from '@/components/characters/PlayerController';
import { SlideManager } from '@/components/slides/SlideManager';
import { useInput } from '@/hooks/useInput';
import { useIsTouch } from '@/hooks/useIsTouch';
import { NavigationArrows } from '@/ui/NavigationArrows';
import { SlideIndicator } from '@/ui/SlideIndicator';
import { TitleScreen } from '@/ui/TitleScreen';
import { MobileControls } from '@/ui/MobileControls';
import { usePresentationStore } from '@/store/presentationStore';

export default function App() {
  const inputRef = useInput();
  const playerPosRef = useRef(new Vector3(0, 0, 6));
  const isTouch = useIsTouch();
  const phase = usePresentationStore((s) => s.phase);

  return (
    <div className="relative h-full w-full">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
        <color attach="background" args={['#fefefe']} />
        <fog attach="fog" args={['#fefefe', 30, 80]} />
        <Lighting />
        <Suspense fallback={null}>
          <Ground />
          <SlideManager />
          <PlayerController
            inputRef={inputRef}
            positionRef={playerPosRef}
            active={phase === 'presenting'}
          />
          <CameraRig targetRef={playerPosRef} />
        </Suspense>
      </Canvas>

      {/* UI Layer */}
      {phase === 'presenting' && (
        <>
          <NavigationArrows />
          <SlideIndicator />
        </>
      )}

      {/* Title overlay */}
      <TitleScreen />

      {/* Mobile controls */}
      {isTouch && phase === 'presenting' && (
        <MobileControls inputRef={inputRef} />
      )}
    </div>
  );
}
