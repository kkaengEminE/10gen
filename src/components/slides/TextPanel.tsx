import { Html } from '@react-three/drei';
import type { ReactNode } from 'react';

interface TextPanelProps {
  position?: [number, number, number];
  children: ReactNode;
  variant?: 'title' | 'body' | 'accent';
  width?: number;
  delay?: number;
  animation?: 'fade' | 'slide-right' | 'slide-left' | 'scale';
}

const variantStyles: Record<string, string> = {
  title:
    'bg-white/95 border-l-4 border-[#b91c1c] text-[#1c1917] font-bold px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.1)] rounded-xl',
  body:
    'bg-white/92 text-[#1c1917] leading-relaxed px-5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-xl border border-[#e7e5e4]',
  accent:
    'bg-[#b91c1c]/8 border-2 border-[#b91c1c]/30 text-[#b91c1c] font-bold px-5 py-3 rounded-xl',
};

const animationMap: Record<string, string> = {
  fade: 'fadeIn',
  'slide-right': 'slideInRight',
  'slide-left': 'slideInLeft',
  scale: 'scaleIn',
};

export function TextPanel({
  position = [0, 0, 0],
  children,
  variant = 'body',
  width = 320,
  delay = 0,
  animation = 'slide-right',
}: TextPanelProps) {
  const animName = animationMap[animation] || 'fadeIn';

  return (
    <Html position={position} transform distanceFactor={5} zIndexRange={[10, 0]}>
      <div
        className={`pointer-events-none select-none ${variantStyles[variant]}`}
        style={{
          width: `${width}px`,
          fontFamily: '"Noto Sans JP", "Inter", system-ui, sans-serif',
          animation: `${animName} 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
        }}
      >
        {children}
      </div>
    </Html>
  );
}
