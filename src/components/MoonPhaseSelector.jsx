import React from 'react';
import { Moon } from 'lucide-react';

const MOON_PHASES = [
    { name: 'New Moon', phase: 0, emoji: '🌑' },
    { name: 'Waxing Crescent', phase: 0.125, emoji: '🌒' },
    { name: 'First Quarter', phase: 0.25, emoji: '🌓' },
    { name: 'Waxing Gibbous', phase: 0.375, emoji: '🌔' },
    { name: 'Full Moon', phase: 0.5, emoji: '🌕' },
    { name: 'Waning Gibbous', phase: 0.625, emoji: '🌖' },
    { name: 'Last Quarter', phase: 0.75, emoji: '🌗' },
    { name: 'Waning Crescent', phase: 0.875, emoji: '🌘' },
];

const MoonPhaseSelector = ({ currentPhase = 0.5, onPhaseSelect, showLabels = true }) => {
    const getCurrentPhaseIndex = () => {
        const normalized = currentPhase % 1;
        return MOON_PHASES.reduce((closest, phase, index) => {
            const diff = Math.abs(phase.phase - normalized);
            const closestDiff = Math.abs(MOON_PHASES[closest].phase - normalized);
            return diff < closestDiff ? index : closest;
        }, 0);
    };

    const currentIndex = getCurrentPhaseIndex();

    return (
        <div className="moon-phase-selector">
            {showLabels && (
                <div className="moon-phase-header">
                    <Moon size={18} className="moon-icon" />
                    <h3 className="moon-phase-title">Lunar Phases</h3>
                </div>
            )}

            <div className="moon-phases-container">
                <img
                    src="/assets/moon_phases_8k.png"
                    alt="Moon Phases"
                    className="moon-phases-background"
                />

                <div className="moon-phases-grid">
                    {MOON_PHASES.map((phase, index) => (
                        <button
                            key={index}
                            onClick={() => onPhaseSelect && onPhaseSelect(phase.phase)}
                            className={`moon-phase-item ${index === currentIndex ? 'active' : ''}`}
                            title={phase.name}
                        >
                            <div className="moon-phase-emoji">{phase.emoji}</div>
                            {showLabels && (
                                <div className="moon-phase-name">{phase.name}</div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {showLabels && (
                <div className="moon-phase-current">
                    <span className="moon-phase-label">Current Phase:</span>
                    <span className="moon-phase-value">
                        {MOON_PHASES[currentIndex].name} {MOON_PHASES[currentIndex].emoji}
                    </span>
                </div>
            )}
        </div>
    );
};

export default MoonPhaseSelector;
