import React, { useState, useEffect } from 'react';
import { Map, ExternalLink } from 'lucide-react';
import { getAstroData } from './utils/astro';
import PremiumHeader from './components/PremiumHeader';
import MoonOverviewCard from './components/MoonOverviewCard';
import { AveragesWidget, PressureWidget } from './components/StatWidgets';
import MoonDetailView from './components/MoonDetailView';
import LocationPicker from './components/LocationPicker';

function App() {
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLive, setIsLive] = useState(true);
  const [customDate, setCustomDate] = useState(new Date());
  const [location, setLocation] = useState({ name: "San Diego", lat: 32.7157, lon: -117.1611 });
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);

  useEffect(() => {
    let timer;

    const update = () => {
      try {
        const now = isLive ? new Date() : customDate;
        setCurrentTime(now);
        const observer = { latitude: location.lat, longitude: location.lon, height: 0 };
        const astroData = getAstroData(now, observer);
        setData(astroData);
      } catch (err) {
        console.error("Astro update failed:", err);
      }
    };

    update();
    if (isLive) timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [isLive, customDate, location]);

  if (!data) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <>
      <div id="main-overview" className={`transition-all duration-500 ${showDetailView ? 'blur-lg scale-95 opacity-50' : 'opacity-100'}`}>
        <PremiumHeader
          location={location.name}
          status={`17° | ${data.moon.tithi.paksha} Paksha`}
        />

        <div id="moon-card-trigger">
          <MoonOverviewCard
            phaseName={data.moon.phase.name || "WAXING GIBBOUS"}
            illumination={Math.round(data.moon.phase.fraction * 100)}
            moonrise={new Date(data.moon.rise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            nextFullMoon="4 DAYS"
            onClick={() => setShowDetailView(true)}
          />
        </div>

        <div className="stat-grid">
          <AveragesWidget
            value="-2°"
            subtext="from average daily high"
          />
          <PressureWidget
            value="1,016"
          />
        </div>

        {/* Map Link Card */}
        <div className="glass-card flex flex-col gap-4">
          <div className="text-label">
            <Map size={14} /> OPEN IN MAPS
            <ExternalLink size={12} className="ml-auto" />
          </div>

          <div className="h-20 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
            <p className="text-[10px] text-white/50 relative z-10">Weather for {location.name}, United States</p>
            <p className="text-[8px] text-white/30 relative z-10 mt-1">Learn more about weather data and map data</p>
          </div>
        </div>

        {/* Location Switcher Trigger */}
        <button
          onClick={() => setShowLocationPicker(true)}
          className="w-full py-3 text-xs text-white/40 hover:text-white/60 transition-colors uppercase tracking-widest"
        >
          Change Location
        </button>
      </div>

      {showDetailView && (
        <MoonDetailView
          data={data}
          onClose={() => setShowDetailView(false)}
        />
      )}

      {showLocationPicker && (
        <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-xl p-6">
          <LocationPicker
            currentLocation={location}
            onSelect={(loc) => {
              setLocation(loc);
              setShowLocationPicker(false);
            }}
            onClose={() => setShowLocationPicker(false)}
          />
        </div>
      )}
    </>
  );
}

export default App;
