import React from 'react';
import { X, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const MoonDetailView = ({ data, onClose }) => {
    // Mock data for the timeline/calendar since we need to generate it from dates
    const weekDays = ['FRI', 'SAT', 'SUN', 'TODAY', 'TUE', 'WED', 'THU'];

    return (
        <div className="detail-view custom-scrollbar">
            <button className="close-button" onClick={onClose}>
                <X size={20} />
            </button>

            <div className="flex flex-col items-center mt-10">
                <div className="text-label mb-2">
                    <div className="w-2 h-2 rounded-full bg-white mr-1"></div> MOON
                </div>

                {/* Large Realistic Moon Visual */}
                <div className="relative w-64 h-64 my-8 perspective-1000">
                    <div className="w-full h-full rounded-full bg-[#1a1c24] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),0_0_100px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/moon.png')] opacity-60 scale-150 animate-pulse"></div>
                        {/* Shadow overlay based on phase */}
                        <div
                            className="absolute inset-0 bg-black/80 transition-all duration-700"
                            style={{ clipPath: `inset(0 0 0 ${data.moon.phase.fraction * 100}%)` }}
                        ></div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-1">{data.moon.tithi.summary}</h2>
                <p className="text-sm text-white/50 mb-8">Monday, 25 September at 4 AM</p>

                {/* Timeline Slider */}
                <div className="w-full flex justify-between items-end h-16 px-4 mb-4">
                    {weekDays.map((day, i) => (
                        <div key={day} className="flex flex-col items-center gap-2">
                            <div className={`w-[1px] h-6 ${day === 'TODAY' ? 'bg-blue-400 w-[2px]' : 'bg-white/20'}`}></div>
                            <span className={`text-[10px] ${day === 'TODAY' ? 'text-white font-bold' : 'text-white/40'}`}>{day}</span>
                        </div>
                    ))}
                    {/* Active indicator */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[130px]">
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-400"></div>
                    </div>
                </div>

                <div className="w-full space-y-2 mt-4">
                    <div className="glass-card">
                        <div className="flex justify-between py-2 border-b border-white/5">
                            <span className="text-label text-white/60">Illumination</span>
                            <span className="text-value">{data.moon.phase.fraction * 100}%</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/5">
                            <span className="text-label text-white/60">Moonset</span>
                            <span className="text-value">2:03 AM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/5">
                            <span className="text-label text-white/60">Moonrise</span>
                            <span className="text-value">4:42 PM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/5">
                            <span className="text-label text-white/60">Next Full Moon</span>
                            <span className="text-value">4 DAYS</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-label text-white/60">Distance</span>
                            <span className="text-value">3,64,961 KM</span>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="text-label mb-6">
                            <CalendarIcon size={14} /> CALENDAR
                        </div>

                        <div className="flex justify-between items-center mb-6 px-2">
                            <ChevronLeft size={16} className="text-white/40" />
                            <span className="text-sm font-semibold">September 2023</span>
                            <ChevronRight size={16} className="text-white/40" />
                        </div>

                        <div className="grid grid-cols-7 text-[10px] text-white/40 text-center gap-y-4">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div key={i} className="flex flex-col items-center gap-1">
                                    <span className="text-white/80">{i + 1}</span>
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoonDetailView;
