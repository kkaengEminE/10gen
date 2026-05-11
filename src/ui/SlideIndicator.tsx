import { usePresentationStore } from '@/store/presentationStore';

export function SlideIndicator() {
  const currentSlide = usePresentationStore((s) => s.currentSlide);
  const totalSlides = usePresentationStore((s) => s.totalSlides);

  return (
    <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
      {Array.from({ length: totalSlides }, (_, i) => (
        <div
          key={i}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            i === currentSlide
              ? 'w-6 bg-tengen-crimson'
              : 'w-2.5 bg-tengen-ash/40'
          }`}
        />
      ))}
    </div>
  );
}
