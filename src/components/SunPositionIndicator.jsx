import React from 'react';
import { Sun, Sunrise, Sunset } from 'lucide-react';

const SunPositionIndicator = ({
    currentTime = new Date(),
    sunriseTime = '06:00',
    sunsetTime = '18:00',
    onTimeSelect,
    showLabels = true
}) => {
    // Calculate sun position (0 = sunrise, 0.5 = noon, 1 = sunset)
    const calculateSunPosition = () => {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const totalMinutes = hours * 60 + minutes;

        const [sunriseHour, sunriseMin] = sunriseTime.split(':').map(Number);
        const [sunsetHour, sunsetMin] = sunsetTime.split(':').map(Number);

        const sunriseMinutes = sunriseHour * 60 + sunriseMin;
        const sunsetMinutes = sunsetHour * 60 + sunsetMin;

        if (totalMinutes < sunriseMinutes || totalMinutes > sunsetMinutes) {
            return -1; // Night time
        }

        const dayLength = sunsetMinutes - sunriseMinutes;
        const minutesSinceSunrise = totalMinutes - sunriseMinutes;

        return minutesSinceSunrise / dayLength;
    };

    const sunPosition = calculateSunPosition();
    const isNightTime = sunPosition < 0;

    const getSunPositionStyle = () => {
        if (isNightTime) return { display: 'none' };

        // Position along the arc (0-100%)
        const arcPosition = sunPosition * 100;

        return {
            left: `${arcPosition}%`,
            transform: `translateX(-50%) translateY(${Math.sin(sunPosition * Math.PI) * -100}%)`,
        };
    };

    const handleArcClick = (e) => {
        if (!onTimeSelect) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;

        // Calculate time based on click position
        const [sunriseHour, sunriseMin] = sunriseTime.split(':').map(Number);
        const [sunsetHour, sunsetMin] = sunsetTime.split(':').map(Number);

        const sunriseMinutes = sunriseHour * 60 + sunriseMin;
        const sunsetMinutes = sunsetHour * 60 + sunsetMin;
        const dayLength = sunsetMinutes - sunriseMinutes;

        const selectedMinutes = sunriseMinutes + (dayLength * percentage);
        const selectedHour = Math.floor(selectedMinutes / 60);
        const selectedMin = Math.floor(selectedMinutes % 60);

        const newTime = new Date(currentTime);
        newTime.setHours(selectedHour, selectedMin);
        onTimeSelect(newTime);
    };

    return (
        <div className="sun-position-indicator">
            {showLabels && (
                <div className="sun-position-header">
                    <Sun size={18} className="sun-icon" />
                    <h3 className="sun-position-title">Solar Path</h3>
                </div>
            )}

            <div className="sun-arc-container" onClick={handleArcClick}>
                <img
                    src="/assets/sun_movement_arc.png"
                    alt="Sun Movement Arc"
                    className="sun-arc-background"
                />

                {!isNightTime && (
                    <div className="sun-current-position" style={getSunPositionStyle()}>
                        <div className="sun-marker">
                            <Sun size={24} className="sun-marker-icon" />
                        </div>
                    </div>
                )}

                {showLabels && (
                    <>
                        <div className="sun-time-marker sunrise-marker">
                            <Sunrise size={16} />
                            <span>{sunriseTime}</span>
                        </div>
                        <div className="sun-time-marker noon-marker">
                            <Sun size={16} />
                            <span>12:00</span>
                        </div>
                        <div className="sun-time-marker sunset-marker">
                            <Sunset size={16} />
                            <span>{sunsetTime}</span>
                        </div>
                    </>
                )}
            </div>

            {showLabels && (
                <div className="sun-position-info">
                    {isNightTime ? (
                        <span className="sun-status night">🌙 Night Time</span>
                    ) : (
                        <span className="sun-status day">
                            ☀️ {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SunPositionIndicator;
