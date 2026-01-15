import React from 'react';
import { Sunrise, Sunset, MoonIcon, Clock } from 'lucide-react';
import { formatTime } from '../utils/timings';

const SunMoonTimeline = ({ data }) => {
    if (!data) return null;

    const { sun, moon } = data;
    const sunrise = sun.rise ? new Date(sun.rise) : null;
    const sunset = sun.set ? new Date(sun.set) : null;
    const moonrise = moon.rise ? new Date(moon.rise) : null;
    const moonset = moon.set ? new Date(moon.set) : null;

    const now = new Date();

    // Calculate day progress
    let dayProgress = 0;
    if (sunrise && sunset) {
        const totalDayDuration = sunset - sunrise;
        const elapsed = now - sunrise;
        dayProgress = Math.max(0, Math.min(100, (elapsed / totalDayDuration) * 100));
    }

    const isNightTime = sunrise && sunset && (now < sunrise || now > sunset);

    return (
        <div className="glass-card fade-in">
            <div className="text-label mb-4">
                <Clock size={14} /> SUN & MOON EVENTS
            </div>

            {/* Day/Night Progress Bar */}
            <div className="mb-6">
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="absolute h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-1000"
                        style={{ width: `${isNightTime ? 0 : dayProgress}%` }}
                    />
                    {!isNightTime && (
                        <div
                            className="absolute w-3 h-3 bg-yellow-300 rounded-full shadow-lg -mt-0.5 transition-all duration-1000"
                            style={{ left: `calc(${dayProgress}% - 6px)` }}
                        />
                    )}
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-xs text-white/40">
                        {isNightTime ? 'Night' : 'Day'}
                    </span>
                    <span className="text-xs text-white/40">
                        {isNightTime ? '🌙' : '☀️'} {Math.round(dayProgress)}%
                    </span>
                </div>
            </div>

            {/* Sun Events */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                        <Sunrise size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs text-white/40">Sunrise</div>
                        <div className="text-value text-sm">{formatTime(sunrise)}</div>
                    </div>
                    <div className="flex-1 text-right">
                        <div className="text-xs text-white/40">Sunset</div>
                        <div className="text-value text-sm">{formatTime(sunset)}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Sunset size={16} className="text-white" />
                    </div>
                </div>
            </div>

            <div className="divider" />

            {/* Moon Events */}
            <div className="mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center">
                        <MoonIcon size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs text-white/40">Moonrise</div>
                        <div className="text-value text-sm">{formatTime(moonrise)}</div>
                    </div>
                    <div className="flex-1 text-right">
                        <div className="text-xs text-white/40">Moonset</div>
                        <div className="text-value text-sm">{formatTime(moonset)}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                        <MoonIcon size={16} className="text-white" />
                    </div>
                </div>
            </div>

            {/* Day Duration */}
            {sunrise && sunset && (
                <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-white/40">Day Duration</span>
                        <span className="text-sm text-white/70">
                            {Math.floor((sunset - sunrise) / (1000 * 60 * 60))}h {Math.floor(((sunset - sunrise) % (1000 * 60 * 60)) / (1000 * 60))}m
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SunMoonTimeline;
