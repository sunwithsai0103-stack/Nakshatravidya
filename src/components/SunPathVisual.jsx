import React from 'react';

const SunPathVisual = ({ longitude, declination, isUttarayana }) => {
    // Longitude 0-360.
    // We want to draw a sine wave representing the yearly path of the sun (Declination vs Longitude).

    // Canvas size
    const width = 280;
    const height = 100;
    const padding = 20;
    const graphH = height - 2 * padding;
    const graphW = width - 2 * padding;

    // Generate path for one full cycle (0 to 360)
    // X axis: Longitude
    // Y axis: Declination (-23.5 to +23.5)
    // Map 0..360 to 0..graphW
    // Map -25..+25 to graphH..0

    const mapX = (lon) => padding + (lon / 360) * graphW;
    const mapY = (deg) => padding + graphH / 2 - (deg / 25) * (graphH / 2);

    let pathD = `M ${mapX(0)} ${mapY(0)}`;
    for (let l = 1; l <= 360; l += 5) {
        // Dec approx 23.44 * sin(radians)
        const rad = (l * Math.PI) / 180;
        const dec = 23.44 * Math.sin(rad);
        pathD += ` L ${mapX(l)} ${mapY(dec)}`;
    }

    // Current Position
    const curX = mapX(longitude);
    const curY = mapY(declination);

    return (
        <div className="flex flex-col items-center w-full">
            <svg width={width} height={height} className="overflow-visible">
                {/* Axis Ref Lines */}
                <line x1={padding} y1={mapY(0)} x2={width - padding} y2={mapY(0)} stroke="rgba(255,255,255,0.1)" strokeDasharray="4" />

                {/* Text Labels */}
                <text x={padding} y={mapY(23.44) - 5} fill="#60a5fa" fontSize="10" textAnchor="start">Summer (N)</text>
                <text x={padding} y={mapY(-23.44) + 12} fill="#34d399" fontSize="10" textAnchor="start">Winter (S)</text>

                {/* The Path */}
                <path d={pathD} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

                {/* Highlight Path (Past? Future? Or just Ayana segments?) 
            Let's highlight the current Ayana segment roughly? 
            Visual complication. Let's stick to the dot.
        */}

                {/* Sun Indicator */}
                <circle cx={curX} cy={curY} r="6" fill="#f59e0b" filter="drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))" />

                {/* Vertical Line to current */}
                <line x1={curX} y1={curY} x2={curX} y2={mapY(0)} stroke="#f59e0b" strokeWidth="1" strokeDasharray="2" opacity="0.5" />

            </svg>
            <div className="flex justify-between w-full px-4 text-xs text-secondary mt-2">
                <span>0° (Mar)</span>
                <span>90° (Jun)</span>
                <span>180° (Sep)</span>
                <span>270° (Dec)</span>
                <span>360°</span>
            </div>
            <div className="mt-2 font-mono text-xs text-accent-sun">
                Declination: {declination.toFixed(2)}° ({isUttarayana ? 'Moving North' : 'Moving South'})
            </div>
        </div>
    );
};

export default SunPathVisual;
