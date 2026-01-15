import React from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import {
    getRahuKaal,
    getGulikaKaal,
    getAbhijitMuhurta,
    formatTimeRange,
    isCurrentlyActive
} from '../utils/timings';

const AuspiciousTimings = ({ data }) => {
    if (!data) return null;

    const { sun } = data;
    const sunrise = sun.rise ? new Date(sun.rise) : null;
    const sunset = sun.set ? new Date(sun.set) : null;

    if (!sunrise || !sunset) {
        return (
            <div className="glass-card fade-in">
                <div className="text-label mb-4">
                    <Sparkles size={14} /> MUHURTA & TIMINGS
                </div>
                <div className="text-center text-white/40 text-sm py-4">
                    Location data required
                </div>
            </div>
        );
    }

    const rahuKaal = getRahuKaal(sunrise, sunset);
    const gulikaKaal = getGulikaKaal(sunrise, sunset);
    const abhijit = getAbhijitMuhurta(sunrise, sunset);

    const now = new Date();

    const timings = [
        {
            name: 'Abhijit Muhurta',
            period: abhijit,
            type: 'auspicious',
            icon: <Sparkles size={14} />,
            description: 'Most auspicious time'
        },
        {
            name: 'Rahu Kaal',
            period: rahuKaal,
            type: 'inauspicious',
            icon: <AlertCircle size={14} />,
            description: 'Inauspicious period'
        },
        {
            name: 'Gulika Kaal',
            period: gulikaKaal,
            type: 'inauspicious',
            icon: <AlertCircle size={14} />,
            description: 'Inauspicious period'
        }
    ];

    return (
        <div className="glass-card fade-in">
            <div className="text-label mb-4">
                <Sparkles size={14} /> MUHURTA & TIMINGS
            </div>

            <div className="space-y-3">
                {timings.map((timing, index) => {
                    const isActive = timing.period && isCurrentlyActive(timing.period.start, timing.period.end, now);

                    return (
                        <div
                            key={index}
                            className={`p-3 rounded-xl border transition-all ${isActive
                                    ? 'bg-white/10 border-white/20'
                                    : 'bg-white/5 border-white/5'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div className={`badge ${timing.type === 'auspicious' ? 'badge-auspicious' : 'badge-inauspicious'
                                        } !p-1.5`}>
                                        {timing.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">
                                            {timing.name}
                                            {isActive && (
                                                <span className="ml-2 text-xs text-white/60 glow-pulse">● Active</span>
                                            )}
                                        </div>
                                        <div className="text-xs text-white/40">{timing.description}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-white/70 font-mono">
                                {timing.period ? formatTimeRange(timing.period.start, timing.period.end) : '--:-- - --:--'}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Ayana Information */}
            <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40">Current Ayana</span>
                    <span className="badge badge-neutral !text-xs">
                        {sun.ayana}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuspiciousTimings;
