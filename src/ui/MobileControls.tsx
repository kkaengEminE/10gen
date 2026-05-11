import { type MutableRefObject, type PointerEvent as RPE } from 'react';
import type { InputState } from '@/hooks/useInput';
import { usePresentationStore } from '@/store/presentationStore';

interface MobileControlsProps {
  inputRef: MutableRefObject<InputState>;
}

export function MobileControls({ inputRef }: MobileControlsProps) {
  const phase = usePresentationStore((s) => s.phase);
  if (phase !== 'presenting') return null;

  const hold = (k: keyof InputState, v: boolean) => {
    (inputRef.current as unknown as Record<string, boolean>)[k as string] = v;
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-between px-3 pb-20">
      {/* D-Pad */}
      <div className="pointer-events-auto relative h-44 w-44 select-none">
        <DPadBtn
          cls="left-1/2 top-0 -translate-x-1/2"
          label="▲"
          onDown={() => hold('forward', true)}
          onUp={() => hold('forward', false)}
        />
        <DPadBtn
          cls="left-1/2 bottom-0 -translate-x-1/2"
          label="▼"
          onDown={() => hold('back', true)}
          onUp={() => hold('back', false)}
        />
        <DPadBtn
          cls="left-0 top-1/2 -translate-y-1/2"
          label="◀"
          onDown={() => hold('left', true)}
          onUp={() => hold('left', false)}
        />
        <DPadBtn
          cls="right-0 top-1/2 -translate-y-1/2"
          label="▶"
          onDown={() => hold('right', true)}
          onUp={() => hold('right', false)}
        />
      </div>
    </div>
  );
}

function DPadBtn({
  cls,
  label,
  onDown,
  onUp,
}: {
  cls: string;
  label: string;
  onDown: () => void;
  onUp: () => void;
}) {
  const press = (e: RPE<HTMLButtonElement>) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    onDown();
  };
  const release = () => onUp();
  return (
    <button
      className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-tengen-crimson/80 bg-white/90 text-xl font-extrabold text-tengen-crimson shadow-tengen active:translate-x-[1px] active:translate-y-[1px] ${cls}`}
      onPointerDown={press}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
      onContextMenu={(e) => e.preventDefault()}
    >
      {label}
    </button>
  );
}
