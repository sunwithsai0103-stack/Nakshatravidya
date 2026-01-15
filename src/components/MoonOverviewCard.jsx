import React from 'react';
import { Moon } from 'lucide-react';
import { getMoonPhaseName } from '../utils/timings';

const MoonOverviewCard = ({ illumination, moonrise, nextFullMoon, phaseName, onClick, phaseData }) => {
    // Calculate moon phase angle for visual
    const phaseAngle = phaseData?.angle || 0;
    const fraction = phaseData?.fraction || illumination / 100;

    // Determine if waxing or waning
    const isWaxing = phaseAngle < 180;

    // Get descriptive phase name
    const displayPhaseName = phaseName || getMoonPhaseName(fraction);

    return (
        <div className="glass-card cursor-pointer hover:bg-white/[0.08] transition-all scale-in" onClick={onClick}>
            <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <div className="text-label">
                        <Moon size={14} /> {displayPhaseName.toUpperCase()}
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="data-row !py-2">
                            <span className="text-sm text-white/50">Illumination</span>
                            <span className="text-value">{illumination}%</span>
                        </div>

                        <div className="data-row !py-2">
                            <span className="text-sm text-white/50">Moonrise</span>
                            <span className="text-value">{moonrise}</span>
                        </div>

                        <div className="data-row !py-2 !border-0">
                            <span className="text-sm text-white/50">Next Full Moon</span>
                            <span className="text-value">{nextFullMoon}</span>
                        </div>
                    </div>
                </div>

                {/* Realistic Moon Visual */}
                <div className="w-32 flex items-center justify-center">
                    <div className="relative w-28 h-28">
                        {/* Moon sphere */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 shadow-2xl overflow-hidden">
                            {/* Craters texture */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

                            {/* Shadow overlay for phase */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"
                                style={{
                                    clipPath: isWaxing
                                        ? `inset(0 ${100 - illumination}% 0 0)`
                                        : `inset(0 0 0 ${100 - illumination}%)`
                                }}
                            />

                            {/* Glow effect */}
                            <div className="absolute -inset-2 rounded-full bg-white/20 blur-xl -z-10" />
                        </div>

                        {/* Illumination percentage badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 badge badge-neutral !text-xs">
                            {illumination}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoonOverviewCard;
