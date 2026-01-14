import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ZodiacVisual = ({ sunLon, moonLon }) => {
    const width = 300;
    const height = 300;
    const cx = width / 2;
    const cy = height / 2;
    const rOuter = 130;
    const rInner = 90;

    const rashis = [
        { symbol: "♈", name: "Mesha", start: 0 },
        { symbol: "♉", name: "Vrishbha", start: 30 },
        { symbol: "♊", name: "Mithuna", start: 60 },
        { symbol: "♋", name: "Karka", start: 90 },
        { symbol: "♌", name: "Simha", start: 120 },
        { symbol: "♍", name: "Kanya", start: 150 },
        { symbol: "♎", name: "Tula", start: 180 },
        { symbol: "♏", name: "Vrishchika", start: 210 },
        { symbol: "♐", name: "Dhanu", start: 240 },
        { symbol: "♑", name: "Makara", start: 270 },
        { symbol: "♒", name: "Kumbha", start: 300 },
        { symbol: "♓", name: "Meena", start: 330 }
    ];

    const toRad = (deg) => (deg - 90) * (Math.PI / 180);

    const getPos = (deg, radius) => {
        const rad = toRad(deg);
        return {
            x: cx + radius * Math.cos(rad),
            y: cy + radius * Math.sin(rad)
        };
    };

    return (
        <div className="flex flex-col items-center relative">
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="zodiac-wheel overflow-visible">
                <defs>
                    <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="85%" stopColor="transparent" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                    </radialGradient>
                    <filter id="glow-sun">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background Circle */}
                <circle cx={cx} cy={cy} r={rOuter} fill="url(#wheelGrad)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <circle cx={cx} cy={cy} r={rInner} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Segments */}
                {rashis.map((sign, i) => {
                    const startAngle = i * 30;
                    // Tick marks instead of full lines for cleaner look
                    const p1 = getPos(startAngle, rInner);
                    const p2 = getPos(startAngle, rInner + 10);
                    const p3 = getPos(startAngle, rOuter - 10);
                    const p4 = getPos(startAngle, rOuter);

                    // Label Pos
                    const midAngle = startAngle + 15;
                    const labelPos = getPos(midAngle, (rInner + rOuter) / 2);

                    return (
                        <g key={i}>
                            <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                            <line x1={p3.x} y1={p3.y} x2={p4.x} y2={p4.y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                            <text x={labelPos.x} y={labelPos.y + 5} textAnchor="middle" fill="#94a3b8" fontSize="18" fontWeight="400" style={{ opacity: 0.8 }}>
                                {sign.symbol}
                            </text>
                        </g>
                    );
                })}

                {/* Sun Marker - Glowing dot on the track */}
                <g transform={`translate(${getPos(sunLon, rInner + 20).x}, ${getPos(sunLon, rInner + 20).y})`}>
                    <circle r="6" fill="#f59e0b" filter="url(#glow-sun)" />
                    <circle r="3" fill="#fff" />
                </g>

                {/* Moon Marker */}
                <g transform={`translate(${getPos(moonLon, rInner + 20).x}, ${getPos(moonLon, rInner + 20).y})`}>
                    <circle r="6" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2" />
                </g>

                {/* Center Info */}
                <text x={cx} y={cy - 10} textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="300" letterSpacing="2px" opacity="0.7">SIDEREAL</text>
                <text x={cx} y={cy + 15} textAnchor="middle" fill="#64748b" fontSize="10" opacity="0.5">ZODIAC</text>

            </svg>
        </div>
    );
};

export default ZodiacVisual;
