import { useEffect, useRef, type MutableRefObject } from 'react';
import { usePresentationStore } from '@/store/presentationStore';

export interface InputState {
  forward: boolean;
  back: boolean;
  left: boolean;
  right: boolean;
}

const MOVE_KEYS: Record<string, keyof InputState> = {
  ArrowUp: 'forward',
  KeyW: 'forward',
  ArrowDown: 'back',
  KeyS: 'back',
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
};

export function useInput(): MutableRefObject<InputState> {
  const stateRef = useRef<InputState>({
    forward: false,
    back: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const s = stateRef.current;

    function onKeyDown(e: KeyboardEvent) {
      if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();

      const phase = usePresentationStore.getState().phase;
      if (phase !== 'presenting') return;

      // Slide navigation
      if (e.code === 'BracketRight' || e.code === 'PageDown') {
        usePresentationStore.getState().nextSlide();
        return;
      }
      if (e.code === 'BracketLeft' || e.code === 'PageUp') {
        usePresentationStore.getState().prevSlide();
        return;
      }

      const key = MOVE_KEYS[e.code];
      if (key) s[key] = true;
    }

    function onKeyUp(e: KeyboardEvent) {
      const key = MOVE_KEYS[e.code];
      if (key) s[key] = false;
    }

    function onBlur() {
      s.forward = s.back = s.left = s.right = false;
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return stateRef;
}
