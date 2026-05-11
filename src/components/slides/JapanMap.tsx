import { Html } from '@react-three/drei';

interface JapanMapProps {
  position?: [number, number, number];
  highlightPosition: [number, number];
  highlightColor: string;
  territoryName: string;
}

// Simplified Japan outline paths for each major island
const HONSHU =
  'M195,180 L210,170 225,165 240,155 250,145 260,140 270,145 275,155 280,170 285,185 280,200 275,215 270,225 260,240 250,255 240,265 230,275 220,285 210,295 200,305 190,315 180,320 170,325 160,330 150,340 140,345 130,350 120,355 115,365 120,375 130,380 140,375 155,365 165,360 175,350 185,345 195,350 200,360 195,370 185,375 175,385 170,395 175,405 185,400 195,390 205,385 210,375 215,365 225,360 235,358 240,365 235,375 225,385 220,395 225,400 235,395 245,385 250,375 255,365 260,360 265,365 260,375 250,385 245,395 250,400 260,395 268,385 270,378';

const HOKKAIDO =
  'M260,95 L270,85 285,80 300,82 310,90 315,100 310,115 300,125 290,130 278,128 270,120 265,110 260,100 260,95';

const KYUSHU =
  'M115,370 L105,375 95,385 90,395 95,405 100,415 110,420 120,418 130,410 135,400 130,390 125,380 120,372';

const SHIKOKU =
  'M155,370 L165,375 175,380 180,390 175,395 165,398 155,395 148,388 150,378 155,370';

export function JapanMap({
  position = [-5, 1.5, 0],
  highlightPosition,
  highlightColor,
  territoryName,
}: JapanMapProps) {
  const cx = highlightPosition[0] * 400;
  const cy = highlightPosition[1] * 500;

  return (
    <Html position={position} transform distanceFactor={5} zIndexRange={[10, 0]}>
      <div
        className="pointer-events-none select-none"
        style={{
          animation: 'scaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both',
        }}
      >
        <svg
          viewBox="0 0 400 500"
          width="280"
          style={{ overflow: 'visible' }}
        >
          {/* Map title */}
          <text
            x="200"
            y="60"
            textAnchor="middle"
            fill="#b91c1c"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Noto Sans JP, sans-serif"
            opacity="0.7"
          >
            日本地図
          </text>

          {/* Islands — with drawing animation */}
          <polyline
            points={HONSHU}
            fill="none"
            stroke="#b91c1c"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.5"
            className="animate-draw-line"
          />
          <polyline
            points={HOKKAIDO}
            fill="none"
            stroke="#b91c1c"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.5"
            className="animate-draw-line"
            style={{ animationDelay: '0.3s' }}
          />
          <polyline
            points={KYUSHU}
            fill="none"
            stroke="#b91c1c"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.5"
            className="animate-draw-line"
            style={{ animationDelay: '0.5s' }}
          />
          <polyline
            points={SHIKOKU}
            fill="none"
            stroke="#b91c1c"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.5"
            className="animate-draw-line"
            style={{ animationDelay: '0.6s' }}
          />

          {/* Territory highlight — animated entrance */}
          <g style={{ animation: 'popIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1s both' }}>
            {/* Outer pulse */}
            <circle
              cx={cx}
              cy={cy}
              r="28"
              fill={highlightColor}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values="28;38;28"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.15;0.05;0.15"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Middle ring */}
            <circle
              cx={cx}
              cy={cy}
              r="16"
              fill="none"
              stroke={highlightColor}
              strokeWidth="1.5"
              opacity="0.4"
            >
              <animate
                attributeName="r"
                values="16;22;16"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0.15;0.4"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Center dot */}
            <circle cx={cx} cy={cy} r="6" fill={highlightColor} opacity="0.9" />

            {/* Connection line from dot to label */}
            <line
              x1={cx}
              y1={cy - 8}
              x2={cx}
              y2={cy - 28}
              stroke={highlightColor}
              strokeWidth="1.2"
              opacity="0.5"
            />

            {/* Territory name with background */}
            <rect
              x={cx - 60}
              y={cy - 52}
              width="120"
              height="22"
              rx="4"
              fill={highlightColor}
              opacity="0.12"
            />
            <text
              x={cx}
              y={cy - 36}
              textAnchor="middle"
              fill={highlightColor}
              fontSize="14"
              fontWeight="bold"
              fontFamily="Noto Sans JP, sans-serif"
            >
              {territoryName}
            </text>
          </g>
        </svg>
      </div>
    </Html>
  );
}
