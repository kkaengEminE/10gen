import { useSyncExternalStore } from 'react';

const query =
  typeof window !== 'undefined'
    ? window.matchMedia('(pointer: coarse)')
    : null;

function subscribe(cb: () => void) {
  query?.addEventListener('change', cb);
  return () => query?.removeEventListener('change', cb);
}

function getSnapshot() {
  return query?.matches ?? false;
}

export function useIsTouch(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
