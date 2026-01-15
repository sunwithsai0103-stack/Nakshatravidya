import React from 'react';
import { Calendar, Moon, Sun } from 'lucide-react';

const PanchangCard = ({ data }) => {
    if (!data) return null;

    const { moon, sun } = data;
    const tithi = moon.tithi;
    const nakshatra = moon.nakshatra;

    // Calculate Yoga (simplified - sum of Sun and Moon longitudes)
    const yogaLongitude = (sun.sidereal + moon.sidereal) % 360;
    const yogaIndex = Math.floor(yogaLongitude / 13.333333);
    const yogaNames = [
        "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
        "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
        "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan",
        "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
        "Brahma", "Indra", "Vaidhriti"
    ];
    const yoga = yogaNames[yogaIndex] || "Unknown";

    // Calculate Karana (half of Tithi)
    const karanaIndex = Math.floor((tithi.number - 1) * 2 + (tithi.percentage > 50 ? 1 : 0)) % 11;
    const karanaNames = [
        "Bava", "Balava", "Kaulava", "Taitila", "Garaja",
        "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga", "Kimstughna"
    ];
    const karana = karanaNames[karanaIndex] || "Unknown";

    return (
        <div className="glass-card fade-in">
            <div className="text-label mb-4">
                <Calendar size={14} /> VEDIC PANCHANG
            </div>

            {/* Tithi Section */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Tithi</span>
                    <span className="text-value">{tithi.summary}</span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill-vedic"
                        style={{ width: `${tithi.percentage}%` }}
                    />
                </div>
                <div className="flex justify-between mt-1">
                    <span className="text-xs text-white/40">{tithi.percentage}% complete</span>
                    {tithi.endTime && (
                        <span className="text-xs text-white/40">
                            Ends {new Date(tithi.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    )}
                </div>
            </div>

            <div className="divider" />

            {/* Nakshatra Section */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Nakshatra</span>
                    <span className="text-value">{nakshatra.name}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40">Pada {nakshatra.pada}</span>
                    <span className="text-xs text-white/40">{nakshatra.percentage}% complete</span>
                </div>
            </div>

            <div className="divider" />

            {/* Yoga & Karana Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="text-xs text-white/40 mb-1">Yoga</div>
                    <div className="text-value text-sm">{yoga}</div>
                </div>
                <div>
                    <div className="text-xs text-white/40 mb-1">Karana</div>
                    <div className="text-value text-sm">{karana}</div>
                </div>
            </div>

            {/* Paksha Badge */}
            <div className="mt-4 flex justify-center">
                <div className={`badge ${tithi.paksha === 'Shukla' ? 'badge-neutral' : 'badge-neutral'}`}>
                    <Moon size={12} />
                    {tithi.paksha} Paksha
                </div>
            </div>
        </div>
    );
};

export default PanchangCard;
