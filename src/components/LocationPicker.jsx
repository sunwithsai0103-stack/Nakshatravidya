import React, { useState } from 'react';
import { MapPin, Search, Globe, X } from 'lucide-react';

const CITIES = [
    { name: "Mumbai, India", lat: 19.0760, lon: 72.8777 },
    { name: "New Delhi, India", lat: 28.6139, lon: 77.2090 },
    { name: "London, UK", lat: 51.5074, lon: -0.1278 },
    { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
    { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503 },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Varanasi, India", lat: 25.3176, lon: 82.9739 },
];

const LocationPicker = ({ currentLocation, onSelect, onClose }) => {
    const [search, setSearch] = useState("");
    const [manualLat, setManualLat] = useState("");
    const [manualLon, setManualLon] = useState("");

    const filteredCities = CITIES.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleManualSubmit = (e) => {
        e.preventDefault();
        const lat = parseFloat(manualLat);
        const lon = parseFloat(manualLon);
        if (!isNaN(lat) && !isNaN(lon)) {
            onSelect({ name: `Custom (${lat.toFixed(2)}, ${lon.toFixed(2)})`, lat, lon });
        }
    };

    return (
        <div className="fixed inset-0 z-[100001] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl transition-all animate-in fade-in duration-300" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-slate-900/80 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Target Location</h2>
                            <p className="text-slate-400 text-sm">Select a city or enter coordinates</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search cities..."
                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent-sun/50 transition-colors"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* City List */}
                    <div className="space-y-2 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                        {filteredCities.map((city) => (
                            <button
                                key={city.name}
                                onClick={() => onSelect(city)}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${currentLocation.name === city.name
                                        ? 'bg-accent-sun/10 border border-accent-sun/20 text-accent-sun'
                                        : 'hover:bg-white/5 border border-transparent text-slate-300 hover:text-white'
                                    }`}
                            >
                                <div className={`p-2 rounded-xl ${currentLocation.name === city.name ? 'bg-accent-sun/20' : 'bg-white/5'}`}>
                                    <MapPin size={18} />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">{city.name}</div>
                                    <div className="text-[10px] opacity-60 font-mono">{city.lat.toFixed(4)}°, {city.lon.toFixed(4)}°</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Manual Entry */}
                    <div className="pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                            <Globe size={14} />
                            Manual Coordinates
                        </div>
                        <form onSubmit={handleManualSubmit} className="grid grid-cols-2 gap-4">
                            <input
                                type="number"
                                step="any"
                                placeholder="Latitude"
                                className="bg-white/5 border border-white/5 rounded-xl py-2 px-4 text-white text-sm focus:outline-none focus:border-white/20 transition-colors"
                                value={manualLat}
                                onChange={(e) => setManualLat(e.target.value)}
                            />
                            <input
                                type="number"
                                step="any"
                                placeholder="Longitude"
                                className="bg-white/5 border border-white/5 rounded-xl py-2 px-4 text-white text-sm focus:outline-none focus:border-white/20 transition-colors"
                                value={manualLon}
                                onChange={(e) => setManualLon(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="col-span-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-2xl transition-all active:scale-95 border border-white/5"
                            >
                                Set Custom Location
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPicker;
