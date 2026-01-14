import React from 'react';

const NakshatraVisual = ({ percentage, pada, color = "#a78bfa" }) => {
    // 4 Padas per Nakshatra
    const segments = [1, 2, 3, 4];

    return (
        <div className="mt-4">
            <div className="flex justify-between text-[10px] text-secondary uppercase tracking-widest mb-2 px-1">
                <span>Nakshatra Journey</span>
                <span>{percentage}% Complete</span>
            </div>

            <div className="relative h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 flex p-[2px]">
                {/* Segments Background (Padas) */}
                {segments.map((s) => (
                    <div
                        key={s}
                        className={`flex-1 h-full border-r border-white/10 last:border-r-0 flex items-center justify-center transition-all ${pada === s ? 'bg-white/5' : ''}`}
                    >
                        {/* Pada Number (Subtle) */}
                        <span className={`text-[8px] font-bold ${pada === s ? 'text-white' : 'text-white/20'}`}>
                            P{s}
                        </span>
                    </div>
                ))}

                {/* Actual Progress Overlay */}
                <div
                    className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
                    style={{
                        width: `${percentage}%`,
                        background: `linear-gradient(90deg, transparent, ${color}44, ${color})`,
                        boxShadow: `0 0 15px ${color}44`,
                        opacity: 0.8
                    }}
                />
            </div>

            {/* Micro-labels for Padas */}
            <div className="flex w-full mt-1 px-1">
                <div className="flex-1 text-[8px] text-secondary/30">Q1</div>
                <div className="flex-1 text-[8px] text-secondary/30">Q2</div>
                <div className="flex-1 text-[8px] text-secondary/30">Q3</div>
                <div className="flex-1 text-[8px] text-secondary/30">Q4</div>
            </div>
        </div>
    );
};

export default NakshatraVisual;
