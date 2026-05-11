import { create } from 'zustand';

export type Phase = 'title' | 'presenting';

interface PresentationState {
  phase: Phase;
  currentSlide: number;
  totalSlides: number;

  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (n: number) => void;
  startPresentation: () => void;
}

export const usePresentationStore = create<PresentationState>((set, get) => ({
  phase: 'title',
  currentSlide: 0,
  totalSlides: 10,

  nextSlide: () => {
    const { currentSlide, totalSlides } = get();
    if (currentSlide < totalSlides - 1) {
      set({ currentSlide: currentSlide + 1 });
    }
  },
  prevSlide: () => {
    const { currentSlide } = get();
    if (currentSlide > 0) {
      set({ currentSlide: currentSlide - 1 });
    }
  },
  goToSlide: (n) =>
    set({ currentSlide: Math.max(0, Math.min(n, get().totalSlides - 1)) }),
  startPresentation: () => set({ phase: 'presenting', currentSlide: 0 }),
}));
