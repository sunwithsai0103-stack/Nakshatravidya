import React from 'react';
import { TrendingDown, Gauge } from 'lucide-react';

export const AveragesWidget = ({ value, subtext }) => {
    return (
        <div className="glass-card">
            <div className="text-label mb-3">
                <TrendingDown size={14} /> AVERAGES
            </div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-[10px] text-white/60 mb-4">{subtext}</div>

            <div className="flex justify-between text-[11px] text-white/80 border-t border-white/5 pt-3">
                <span>Today</span>
                <span>H:23°</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/40 mt-1">
                <span>Average</span>
                <span>H:25°</span>
            </div>
        </div>
    );
};

export const PressureWidget = ({ value, label }) => {
    return (
        <div className="glass-card flex flex-col items-center">
            <div className="text-label self-start mb-2">
                <Gauge size={14} /> PRESSURE
            </div>

            <div className="gauge-container w-full">
                <svg viewBox="0 0 100 60" className="gauge-svg">
                    <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        className="gauge-bg"
                        stroke="rgba(255,255,255,0.1)"
                    />
                    <path
                        d="M 10 50 A 40 40 0 0 1 50 10"
                        className="gauge-fill"
                        stroke="url(#grad-blue)"
                        strokeDasharray="125"
                        strokeDashoffset="60"
                    />
                    <defs>
                        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>
                    <text x="50" y="35" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">=</text>
                    <text x="50" y="45" textAnchor="middle" fill="#fff" fontSize="6">{value}</text>
                    <text x="50" y="52" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="4">hPa</text>
                </svg>
            </div>

            <div className="flex justify-between w-full text-[10px] text-white/40 px-2">
                <span>Low</span>
                <span>High</span>
            </div>
        </div>
    );
};
