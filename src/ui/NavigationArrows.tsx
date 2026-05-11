import { usePresentationStore } from '@/store/presentationStore';

export function NavigationArrows() {
  const currentSlide = usePresentationStore((s) => s.currentSlide);
  const totalSlides = usePresentationStore((s) => s.totalSlides);
  const nextSlide = usePresentationStore((s) => s.nextSlide);
  const prevSlide = usePresentationStore((s) => s.prevSlide);

  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  const btnClass =
    'flex h-14 w-14 items-center justify-center rounded-full border-2 border-tengen-crimson text-tengen-crimson text-2xl font-bold shadow-tengen transition select-none';
  const enabledClass = 'bg-white/90 hover:bg-tengen-crimson hover:text-white active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer';
  const disabledClass = 'opacity-30 cursor-not-allowed bg-white/50';

  return (
    <>
      <button
        className={`absolute bottom-6 left-6 z-20 ${btnClass} ${isFirst ? disabledClass : enabledClass}`}
        onClick={prevSlide}
        disabled={isFirst}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        className={`absolute bottom-6 right-6 z-20 ${btnClass} ${isLast ? disabledClass : enabledClass}`}
        onClick={nextSlide}
        disabled={isLast}
        aria-label="Next slide"
      >
        &gt;
      </button>
    </>
  );
}
