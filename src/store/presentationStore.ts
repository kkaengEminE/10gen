import { create } from 'zustand';

export type Phase = 'title' | 'presenting';

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2.5;
const ZOOM_STEP = 0.15;

interface PresentationState {
  phase: Phase;
  currentSlide: number;
  totalSlides: number;
  zoom: number;

  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (n: number) => void;
  startPresentation: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  setZoom: (z: number) => void;
}

export const usePresentationStore = create<PresentationState>((set, get) => ({
  phase: 'title',
  currentSlide: 0,
  totalSlides: 10,
  zoom: 1,

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
  zoomIn: () =>
    set({ zoom: Math.min(ZOOM_MAX, get().zoom + ZOOM_STEP) }),
  zoomOut: () =>
    set({ zoom: Math.max(ZOOM_MIN, get().zoom - ZOOM_STEP) }),
  setZoom: (z) =>
    set({ zoom: Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z)) }),
}));
