import React, { useState } from 'react';
import { MapPin, Search, Navigation, Globe } from 'lucide-react';
import { INDIAN_CITIES } from '../data/indianCities';

// Combine Indian cities with international locations
const ALL_LOCATIONS = [
    ...INDIAN_CITIES,
    { name: 'London', lat: 51.5074, lon: -0.1278, state: 'UK' },
    { name: 'New York', lat: 40.7128, lon: -74.0060, state: 'USA' },
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503, state: 'Japan' },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093, state: 'Australia' },
];

const LocationSelector = ({ onSelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showManual, setShowManual] = useState(false);
    const [manualCoords, setManualCoords] = useState({ lat: '', lon: '', name: '' });

    const filteredCities = ALL_LOCATIONS.filter(city =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.state.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleManualSubmit = () => {
        if (manualCoords.lat && manualCoords.lon && manualCoords.name) {
            onSelect({
                name: manualCoords.name,
                lat: parseFloat(manualCoords.lat),
                lon: parseFloat(manualCoords.lon)
            });
        }
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    onSelect({
                        name: 'Current Location',
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                    alert('Unable to get your current location. Please select manually.');
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };

    return (
        <div className="location-selector">
            <div className="location-header">
                <h3 className="text-lg font-light text-white mb-1">Select Location</h3>
                <p className="text-xs text-secondary mb-4">Choose your city for accurate astrological data</p>
            </div>

            {/* Search Bar */}
            <div className="portal-search-container premium-search">
                <Search className="portal-search-icon" size={18} />
                <input
                    type="text"
                    className="portal-search-input"
                    placeholder="Search for a city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Quick Actions */}
            <div className="location-quick-actions">
                <button
                    onClick={handleCurrentLocation}
                    className="location-quick-button premium-button"
                >
                    <Navigation size={16} className="text-accent" />
                    <span>Use Current Location</span>
                </button>
                <button
                    onClick={() => setShowManual(!showManual)}
                    className="location-quick-button premium-button"
                >
                    <Globe size={16} className="text-accent" />
                    <span>Enter Coordinates</span>
                </button>
            </div>

            {/* Manual Coordinates Input */}
            {showManual && (
                <div className="location-manual-input fade-in">
                    <input
                        type="text"
                        className="portal-input"
                        placeholder="Location Name"
                        value={manualCoords.name}
                        onChange={(e) => setManualCoords({ ...manualCoords, name: e.target.value })}
                    />
                    <div className="location-coords-row">
                        <input
                            type="number"
                            step="0.0001"
                            className="portal-input"
                            placeholder="Latitude"
                            value={manualCoords.lat}
                            onChange={(e) => setManualCoords({ ...manualCoords, lat: e.target.value })}
                        />
                        <input
                            type="number"
                            step="0.0001"
                            className="portal-input"
                            placeholder="Longitude"
                            value={manualCoords.lon}
                            onChange={(e) => setManualCoords({ ...manualCoords, lon: e.target.value })}
                        />
                    </div>
                    <button
                        onClick={handleManualSubmit}
                        className="portal-button portal-button-primary"
                    >
                        Confirm Location
                    </button>
                </div>
            )}

            {/* Cities List */}
            <div className="location-list-container">
                <h4 className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2 ml-1">
                    {searchQuery ? 'Search Results' : 'Popular Locations'}
                </h4>
                <div className="location-list">
                    {filteredCities.slice(0, 50).map((city, index) => (
                        <button
                            key={index}
                            onClick={() => onSelect(city)}
                            className="location-list-item"
                        >
                            <div className="location-icon-wrapper">
                                <MapPin size={18} />
                            </div>
                            <div className="location-info">
                                <h3 className="location-name">{city.name}</h3>
                                <p className="location-detail">{city.state}</p>
                            </div>
                            <div className="location-coords">
                                <span>{city.lat.toFixed(2)}°N</span>
                                <span>{city.lon.toFixed(2)}°E</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationSelector;
