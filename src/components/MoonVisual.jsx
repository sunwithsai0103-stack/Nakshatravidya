import React from 'react';
import moonTexture from '../assets/moon_texture.png';

const MoonVisual = ({ phaseAngle, fraction }) => {
    // phaseAngle: 0=New, 90=First Quarter, 180=Full, 270=Third Quarter
    // fraction: 0 to 1

    const size = 200;
    const radius = size / 2;
    const cx = radius;
    const cy = radius;

    // Calculate the terminator path
    // The terminator is an elliptical arc. 
    // For First Half (0-180), light is on the right.
    // For Second Half (180-360), light is on the left.

    const isWaning = phaseAngle > 180;

    // The inner arc width varies from -radius to +radius
    // Cosine of phase angle gives this multiplier
    const cosPhase = Math.cos(phaseAngle * Math.PI / 180);
    const rx = Math.abs(cosPhase) * radius;

    // Sweep flag for the elliptical arc: 
    // Change based on waxing/waning and if current phase is crescent vs gibbous
    const sweepFlag = (phaseAngle <= 180) ? 0 : 1;

    // Path components:
    // 1. Semi-circle (always light or shadow)
    // 2. Elliptical arc (the terminator)

    // Large arc flag for the elliptical part
    // If phase is > 90 and < 270, it's more than half full (Gibbous)
    // But wait, the math for SVG elliptical arcs can be simplified:
    // We draw a full circle of the texture, and then mask it.

    return (
        <div className="relative flex flex-col items-center">
            <div className="relative" style={{ width: size, height: size }}>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-[#e2e8f0]/10 blur-2xl" />

                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative z-10">
                    <defs>
                        <mask id="moonMask">
                            {/* 
                  We want to show the illuminated part.
                  Basic strategy: 
                  - Start with a semi-circle on the light-facing side.
                  - Add/Subtract an elliptical arc for the terminator.
                */}

                            {/* Default: Black background (hidden) */}
                            <rect x="0" y="0" width={size} height={size} fill="black" />

                            {/* If Waxing (0-180): Light is on the RIGHT */}
                            {/* If Waning (180-360): Light is on the LEFT */}

                            {phaseAngle <= 180 ? (
                                // Waxing
                                <g>
                                    {/* Right semi-circle is always lit for waxing? No, only after 180.
                            Actually, let's use a more robust logic:
                            If fraction < 0.5 (Crescent): 
                               Lit is [Semi-circle - Ellipse]
                            If fraction > 0.5 (Gibbous):
                               Lit is [Semi-circle + Ellipse]
                        */}
                                    {fraction < 0.5 ? (
                                        // Crescent Waxing
                                        <path
                                            d={`M ${cx} 0 A ${radius} ${radius} 0 0 1 ${cx} ${size} A ${rx} ${radius} 0 0 0 ${cx} 0`}
                                            fill="white"
                                        />
                                    ) : (
                                        // Gibbous Waxing
                                        <g>
                                            <path d={`M ${cx} 0 A ${radius} ${radius} 0 0 1 ${cx} ${size} L ${cx} 0`} fill="white" />
                                            <path d={`M ${cx} 0 A ${rx} ${radius} 0 0 1 ${cx} ${size} L ${cx} 0`} fill="white" />
                                        </g>
                                    )}
                                </g>
                            ) : (
                                // Waning
                                <g>
                                    {fraction < 0.5 ? (
                                        // Crescent Waning
                                        <path
                                            d={`M ${cx} 0 A ${radius} ${radius} 0 0 0 ${cx} ${size} A ${rx} ${radius} 0 0 1 ${cx} 0`}
                                            fill="white"
                                        />
                                    ) : (
                                        // Gibbous Waning
                                        <g>
                                            <path d={`M ${cx} 0 A ${radius} ${radius} 0 0 0 ${cx} ${size} L ${cx} 0`} fill="white" />
                                            <path d={`M ${cx} 0 A ${rx} ${radius} 0 0 0 ${cx} ${size} L ${cx} 0`} fill="white" />
                                        </g>
                                    )}
                                </g>
                            )}
                        </mask>

                        <filter id="moonGlow">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Background fully dark moon (base layer) */}
                    <circle cx={cx} cy={cy} r={radius} fill="#111" />

                    {/* Textured illuminated part */}
                    <image
                        href={moonTexture}
                        width={size}
                        height={size}
                        mask="url(#moonMask)"
                        style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                    />

                    {/* Subtle atmosphere/glow stroke */}
                    <circle
                        cx={cx}
                        cy={cy}
                        r={radius - 1}
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="mt-4 text-center">
                <span className="text-secondary text-xs uppercase tracking-widest font-bold">
                    Illumination: {(fraction * 100).toFixed(1)}%
                </span>
            </div>
        </div>
    );
};

export default MoonVisual;
