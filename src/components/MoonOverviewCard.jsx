import React from 'react';
import { Moon } from 'lucide-react';

const MoonOverviewCard = ({ illumination, moonrise, nextFullMoon, phaseName, onClick }) => {
    return (
        <div className="glass-card cursor-pointer hover:bg-white/[0.08] transition-all" onClick={onClick}>
            <div className="flex justify-between">
                <div className="flex flex-col gap-5 flex-1">
                    <div className="text-label">
                        <Moon size={14} /> {phaseName}
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-label text-white/50">Illumination</span>
                            <span className="text-value">{illumination}%</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-label text-white/50">Moonrise</span>
                            <span className="text-value">{moonrise}</span>
                        </div>

                        <div className="flex justify-between items-center py-2">
                            <span className="text-label text-white/50">Next Full Moon</span>
                            <span className="text-value">{nextFullMoon}</span>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 flex items-center justify-center pl-4">
                    <div className="relative">
                        {/* Realistic Moon Placeholder / Visual */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-400 to-gray-800 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)] overflow-hidden">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoonOverviewCard;
