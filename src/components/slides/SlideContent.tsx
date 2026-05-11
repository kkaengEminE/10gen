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
      <TextPanel position={[5, 3.0, 0]} variant="title" width={300} delay={0}>
        <div style={{ fontSize: '28px', lineHeight: 1.2 }}>
          {warlord.nameJa}
        </div>
        <div
          style={{
            fontSize: '14px',
            color: '#78716c',
            marginTop: '2px',
            fontWeight: 400,
          }}
        >
          {warlord.nameEn}
        </div>
      </TextPanel>

      {/* Info panel — epithet + years + territory */}
      <TextPanel position={[5, 1.5, 0]} variant="accent" width={300} delay={0.1}>
        <div style={{ fontSize: '16px' }}>{warlord.epithet}</div>
        <div
          style={{
            fontSize: '12px',
            marginTop: '4px',
            opacity: 0.8,
          }}
        >
          {warlord.years}　|　{warlord.territory}
        </div>
      </TextPanel>

      {/* Description panel */}
      <TextPanel position={[5, -0.5, 0]} variant="body" width={300} delay={0.2}>
        <div style={{ fontSize: '13px', lineHeight: 1.7 }}>
          {warlord.description}
        </div>
      </TextPanel>

      {/* Japan map — left side */}
      <JapanMap
        position={[-5, 1.5, 0]}
        highlightPosition={warlord.mapPosition}
        highlightColor={warlord.color}
        territoryName={warlord.territory.split('(')[0].trim()}
      />
    </group>
  );
}
