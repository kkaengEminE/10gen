import { usePresentationStore } from '@/store/presentationStore';
import { WARLORDS } from '@/data/warlords';
import { ConeNarrator } from '@/components/characters/ConeNarrator';
import { CylinderPerson } from '@/components/characters/CylinderPerson';
import { SlideContent } from '@/components/slides/SlideContent';

const AUDIENCE_POSITIONS: [number, number, number][] = [
  [-3, 0, 4],
  [2, 0, 5],
  [-1.5, 0, 7],
  [3.5, 0, 6.5],
  [-4, 0, 6],
];

const AUDIENCE_COLORS = ['#d6d3d1', '#c8c5c2', '#bfbcb9', '#d4d0cd', '#cbc7c4'];

export function SlideManager() {
  const phase = usePresentationStore((s) => s.phase);
  const currentSlide = usePresentationStore((s) => s.currentSlide);

  const warlord = WARLORDS[currentSlide];

  return (
    <group>
      {/* Narrator — always present at center */}
      <ConeNarrator position={[0, 0, 0]} />

      {/* NPC audience — scattered around */}
      {AUDIENCE_POSITIONS.map((pos, i) => (
        <CylinderPerson key={i} position={pos} color={AUDIENCE_COLORS[i]} />
      ))}

      {/* Slide content — only shown during presentation */}
      {phase === 'presenting' && warlord && (
        <SlideContent key={currentSlide} warlord={warlord} />
      )}
    </group>
  );
}
