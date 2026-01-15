import React, { useState } from 'react';
import { MapPin, Calendar, Clock, User, ArrowRight, X, Sparkles } from 'lucide-react';
import LocationSelector from './LocationSelector';
import DateTimePicker from './DateTimePicker';

const Portal = ({ onComplete, onSkip }) => {
    const [step, setStep] = useState(1); // 1: Location, 2: DateTime, 3: Auth
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setStep(2);
    };

    const handleDateTimeSelect = (dateTime) => {
        setSelectedDateTime(dateTime);
        setStep(3);
    };

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        onComplete({
            location: selectedLocation,
            dateTime: selectedDateTime,
            user: formData
        });
    };

    const handleSkipAuth = () => {
        onComplete({
            location: selectedLocation || { name: "San Diego", lat: 32.7157, lon: -117.1611 },
            dateTime: selectedDateTime,
            user: null
        });
    };

    return (
        <div className="portal-overlay">
            <div className="portal-container">
                {/* Header */}
                <div className="portal-header">
                    <div className="portal-logo">
                        <Sparkles className="portal-logo-icon" />
                        <h1 className="portal-title">Nakshatra Vidya</h1>
                    </div>
                    <p className="portal-subtitle">Your Gateway to Vedic Astronomy</p>

                    {/* Progress Indicator */}
                    <div className="portal-progress">
                        <div className={`portal-progress-step ${step >= 1 ? 'active' : ''}`}>
                            <MapPin size={16} />
                        </div>
                        <div className="portal-progress-line" />
                        <div className={`portal-progress-step ${step >= 2 ? 'active' : ''}`}>
                            <Calendar size={16} />
                        </div>
                        <div className="portal-progress-line" />
                        <div className={`portal-progress-step ${step >= 3 ? 'active' : ''}`}>
                            <User size={16} />
                        </div>
                    </div>
                </div>

                {/* Step Content */}
                <div className="portal-content">
                    {step === 1 && (
                        <div className="portal-step fade-in">
                            <h2 className="portal-step-title">Select Your Location</h2>
                            <p className="portal-step-description">
                                Choose your location to get accurate astronomical data
                            </p>
                            <LocationSelector onSelect={handleLocationSelect} />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="portal-step fade-in">
                            <h2 className="portal-step-title">Choose Date & Time</h2>
                            <p className="portal-step-description">
                                Select a date and time to explore celestial events
                            </p>
                            <DateTimePicker
                                initialDateTime={selectedDateTime}
                                onSelect={handleDateTimeSelect}
                                onBack={() => setStep(1)}
                            />
                        </div>
                    )}

                    {step === 3 && (
                        <div className="portal-step fade-in">
                            <h2 className="portal-step-title">
                                {authMode === 'signin' ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="portal-step-description">
                                {authMode === 'signin'
                                    ? 'Sign in to save your preferences and history'
                                    : 'Join us to unlock personalized features'}
                            </p>

                            <form onSubmit={handleAuthSubmit} className="portal-auth-form">
                                {authMode === 'signup' && (
                                    <div className="portal-input-group">
                                        <label className="portal-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="portal-input"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required={authMode === 'signup'}
                                        />
                                    </div>
                                )}

                                <div className="portal-input-group">
                                    <label className="portal-label">Email</label>
                                    <input
                                        type="email"
                                        className="portal-input"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="portal-input-group">
                                    <label className="portal-label">Password</label>
                                    <input
                                        type="password"
                                        className="portal-input"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                </div>

                                <button type="submit" className="portal-button portal-button-primary">
                                    {authMode === 'signin' ? 'Sign In' : 'Create Account'}
                                    <ArrowRight size={18} />
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSkipAuth}
                                    className="portal-button portal-button-secondary"
                                >
                                    Continue as Guest
                                </button>

                                <div className="portal-auth-switch">
                                    {authMode === 'signin' ? (
                                        <p>
                                            Don't have an account?{' '}
                                            <button
                                                type="button"
                                                onClick={() => setAuthMode('signup')}
                                                className="portal-link"
                                            >
                                                Sign up
                                            </button>
                                        </p>
                                    ) : (
                                        <p>
                                            Already have an account?{' '}
                                            <button
                                                type="button"
                                                onClick={() => setAuthMode('signin')}
                                                className="portal-link"
                                            >
                                                Sign in
                                            </button>
                                        </p>
                                    )}
                                </div>
                            </form>

                            <button
                                onClick={() => setStep(2)}
                                className="portal-back-button"
                            >
                                ← Back
                            </button>
                        </div>
                    )}
                </div>

                {/* Skip Button */}
                {step < 3 && (
                    <button onClick={onSkip} className="portal-skip">
                        Skip for now
                    </button>
                )}
            </div>
        </div>
    );
};

export default Portal;
