import { usePresentationStore } from '@/store/presentationStore';

export function TitleScreen() {
  const phase = usePresentationStore((s) => s.phase);
  const start = usePresentationStore((s) => s.startPresentation);

  if (phase !== 'title') return null;

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/85 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <h1 className="font-title text-7xl font-extrabold tracking-tight text-tengen-ink">
          <span className="text-tengen-crimson">10</span>gen
        </h1>
        <p className="mt-2 font-display text-2xl font-bold text-tengen-ash">
          戦国十傑
        </p>
        <p className="mt-1 font-display text-sm text-tengen-ash/70">
          Sengoku Legends — Interactive 3D Presentation
        </p>
        <button
          className="tengen-btn mt-8 px-8 py-3 text-lg"
          onClick={start}
        >
          始める
        </button>
        <div className="mt-6 flex flex-col items-center gap-1 text-xs text-tengen-ash/50">
          <p>WASD / Arrow keys to move &nbsp;|&nbsp; ◀ ▶ to navigate slides</p>
          <p>Right-click drag to rotate view &nbsp;|&nbsp; Scroll to zoom</p>
        </div>
      </div>
    </div>
  );
}
