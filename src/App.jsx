import React, { useState, useEffect } from 'react';
import { Map, ExternalLink } from 'lucide-react';
import { getAstroData } from './utils/astro';
import PremiumHeader from './components/PremiumHeader';
import MoonOverviewCard from './components/MoonOverviewCard';
import PanchangCard from './components/PanchangCard';
import SunMoonTimeline from './components/SunMoonTimeline';
import AuspiciousTimings from './components/AuspiciousTimings';
import { AveragesWidget, PressureWidget } from './components/StatWidgets';
import MoonDetailView from './components/MoonDetailView';
import LocationPicker from './components/LocationPicker';
import LoginModal from './components/LoginModal';
import UserProfile from './components/UserProfile';
import { useAuth } from './components/AuthProvider';
import Portal from './components/Portal';

function App() {
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLive, setIsLive] = useState(true);
  const [customDate, setCustomDate] = useState(new Date());
  const [location, setLocation] = useState({ name: "San Diego", lat: 32.7157, lon: -117.1611 });
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPortal, setShowPortal] = useState(() => {
    // Check if user has completed portal before
    return !localStorage.getItem('portalCompleted');
  });
  const { user } = useAuth();

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

  const handlePortalComplete = (portalData) => {
    if (portalData.location) {
      setLocation(portalData.location);
    }
    if (portalData.dateTime) {
      setCustomDate(portalData.dateTime);
      setIsLive(false);
    }
    localStorage.setItem('portalCompleted', 'true');
    setShowPortal(false);
  };

  const handlePortalSkip = () => {
    localStorage.setItem('portalCompleted', 'true');
    setShowPortal(false);
  };

  if (!data) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <>
      {showPortal && (
        <Portal
          onComplete={handlePortalComplete}
          onSkip={handlePortalSkip}
        />
      )}

      <div id="main-overview" className={`transition-all duration-500 ${showDetailView ? 'blur-lg scale-95 opacity-50' : 'opacity-100'}`}>
        <PremiumHeader
          location={location.name}
          status={`${Math.round(data.moon.phase.fraction * 100)}% | ${data.moon.tithi.paksha} Paksha`}
          onAuthClick={() => setShowAuthModal(true)}
        />

        {/* Moon Overview - Hero Card */}
        <div id="moon-card-trigger">
          <MoonOverviewCard
            phaseName={data.moon.phase.name}
            illumination={Math.round(data.moon.phase.fraction * 100)}
            moonrise={data.moon.rise ? new Date(data.moon.rise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
            nextFullMoon="4 DAYS"
            onClick={() => setShowDetailView(true)}
            phaseData={data.moon.phase}
          />
        </div>

        {/* Vedic Panchang Card */}
        <PanchangCard data={data} />

        {/* Sun & Moon Timeline */}
        <SunMoonTimeline data={data} />

        {/* Auspicious Timings */}
        <AuspiciousTimings data={data} />

        {/* Stats Grid */}
        <div className="stat-grid">
          <AveragesWidget
            value="-2°"
            subtext="from average daily high"
          />
          <PressureWidget
            value="1,016"
          />
        </div>

        {/* Rashi Information Card */}
        <div className="glass-card fade-in">
          <div className="text-label mb-3">
            ZODIAC POSITIONS
          </div>
          <div className="space-y-3">
            <div className="data-row">
              <span className="text-sm text-white/50">Sun Rashi</span>
              <span className="text-value text-sm">{data.sun.rashi.name}</span>
            </div>
            <div className="data-row !border-0">
              <span className="text-sm text-white/50">Moon Rashi</span>
              <span className="text-value text-sm">{data.moon.rashi.name}</span>
            </div>
          </div>
        </div>

        {/* Map Link Card */}
        <div className="glass-card flex flex-col gap-4 fade-in">
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

      {showAuthModal && (
        user ? (
          <UserProfile onClose={() => setShowAuthModal(false)} />
        ) : (
          <LoginModal onClose={() => setShowAuthModal(false)} />
        )
      )}
    </>
  );
}

export default App;
