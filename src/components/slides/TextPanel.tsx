import { Html } from '@react-three/drei';
import type { ReactNode } from 'react';

interface TextPanelProps {
  position?: [number, number, number];
  children: ReactNode;
  variant?: 'title' | 'body' | 'accent';
  width?: number;
  delay?: number;
}

const variantStyles: Record<string, string> = {
  title:
    'bg-white/92 border-l-4 border-[#b91c1c] text-[#1c1917] font-bold text-xl px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-lg',
  body:
    'bg-white/88 text-[#1c1917] text-sm leading-relaxed px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-lg border border-[#e7e5e4]',
  accent:
    'bg-[#b91c1c]/8 border border-[#b91c1c]/30 text-[#b91c1c] font-bold text-base px-4 py-2 rounded-lg',
};

export function TextPanel({
  position = [0, 0, 0],
  children,
  variant = 'body',
  width = 280,
  delay = 0,
}: TextPanelProps) {
  return (
    <Html position={position} transform distanceFactor={5} zIndexRange={[10, 0]}>
      <div
        className={`pointer-events-none select-none ${variantStyles[variant]}`}
        style={{
          width: `${width}px`,
          fontFamily: '"Noto Sans JP", "Inter", system-ui, sans-serif',
          animation: `fadeIn 0.5s ease-out ${delay}s both`,
        }}
      >
        {children}
      </div>
    </Html>
  );
}
