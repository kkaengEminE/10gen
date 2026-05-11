import { usePresentationStore } from '@/store/presentationStore';

export function ZoomControls() {
  const zoom = usePresentationStore((s) => s.zoom);
  const zoomIn = usePresentationStore((s) => s.zoomIn);
  const zoomOut = usePresentationStore((s) => s.zoomOut);

  const btnClass =
    'flex h-10 w-10 items-center justify-center rounded-lg border-2 border-tengen-crimson text-tengen-crimson text-xl font-bold transition select-none bg-white/90 hover:bg-tengen-crimson hover:text-white active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer shadow-tengen';

  return (
    <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2">
      <button className={btnClass} onClick={zoomIn} aria-label="Zoom in">
        +
      </button>
      <div className="text-xs font-bold text-tengen-ash select-none">
        {Math.round(zoom * 100)}%
      </div>
      <button className={btnClass} onClick={zoomOut} aria-label="Zoom out">
        &minus;
      </button>
    </div>
  );
}
