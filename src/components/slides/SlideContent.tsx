import type { Warlord } from '@/data/warlords';
import { TextPanel } from '@/components/slides/TextPanel';
import { JapanMap } from '@/components/slides/JapanMap';

interface SlideContentProps {
  warlord: Warlord;
}

export function SlideContent({ warlord }: SlideContentProps) {
  return (
    <group>
      {/* Name panel — right side, elevated */}
      <TextPanel
        position={[5.5, 3.2, 0]}
        variant="title"
        width={340}
        delay={0}
        animation="slide-right"
      >
        <div style={{ fontSize: '32px', lineHeight: 1.2, letterSpacing: '2px' }}>
          {warlord.nameJa}
        </div>
        <div
          style={{
            fontSize: '15px',
            color: '#78716c',
            marginTop: '4px',
            fontWeight: 400,
          }}
        >
          {warlord.nameEn}
        </div>
      </TextPanel>

      {/* Info panel — epithet + years + territory */}
      <TextPanel
        position={[5.5, 1.5, 0]}
        variant="accent"
        width={340}
        delay={0.12}
        animation="slide-right"
      >
        <div style={{ fontSize: '18px', letterSpacing: '1px' }}>
          {warlord.epithet}
        </div>
        <div
          style={{
            fontSize: '13px',
            marginTop: '6px',
            opacity: 0.8,
          }}
        >
          {warlord.years}　|　{warlord.territory}
        </div>
      </TextPanel>

      {/* Description panel */}
      <TextPanel
        position={[5.5, -0.5, 0]}
        variant="body"
        width={340}
        delay={0.24}
        animation="slide-right"
      >
        <div style={{ fontSize: '14px', lineHeight: 1.8 }}>
          {warlord.description}
        </div>
      </TextPanel>

      {/* Slide number indicator in 3D space */}
      <TextPanel
        position={[5.5, -2.5, 0]}
        variant="accent"
        width={100}
        delay={0.3}
        animation="fade"
      >
        <div style={{ fontSize: '13px', textAlign: 'center', opacity: 0.6 }}>
          {warlord.id} / 10
        </div>
      </TextPanel>

      {/* Japan map — left side */}
      <JapanMap
        position={[-5.5, 1.5, 0]}
        highlightPosition={warlord.mapPosition}
        highlightColor={warlord.color}
        territoryName={warlord.territory.split('(')[0].trim()}
      />
    </group>
  );
}
