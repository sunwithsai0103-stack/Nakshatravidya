import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, Sunrise, Sunset, Moon, Sun } from 'lucide-react';
import MoonPhaseSelector from './MoonPhaseSelector';

const DateTimePicker = ({ initialDateTime, onSelect, onBack }) => {
    const [selectedDate, setSelectedDate] = useState(initialDateTime);
    const [currentMonth, setCurrentMonth] = useState(initialDateTime.getMonth());
    const [currentYear, setCurrentYear] = useState(initialDateTime.getFullYear());
    const [hours, setHours] = useState(initialDateTime.getHours());
    const [minutes, setMinutes] = useState(initialDateTime.getMinutes());

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateSelect = (day) => {
        const newDate = new Date(currentYear, currentMonth, day, hours, minutes);
        setSelectedDate(newDate);
    };

    const handleConfirm = () => {
        const finalDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            hours,
            minutes
        );
        onSelect(finalDate);
    };

    const handlePreset = (preset) => {
        const now = new Date();
        let presetDate;

        switch (preset) {
            case 'now':
                presetDate = now;
                break;
            case 'sunrise':
                presetDate = new Date(now.setHours(6, 0, 0));
                break;
            case 'sunset':
                presetDate = new Date(now.setHours(18, 0, 0));
                break;
            case 'noon':
                presetDate = new Date(now.setHours(12, 0, 0));
                break;
            case 'midnight':
                presetDate = new Date(now.setHours(0, 0, 0));
                break;
            default:
                presetDate = now;
        }

        setSelectedDate(presetDate);
        setCurrentMonth(presetDate.getMonth());
        setCurrentYear(presetDate.getFullYear());
        setHours(presetDate.getHours());
        setMinutes(presetDate.getMinutes());
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        // Empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day-empty" />);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear;

            const isToday =
                new Date().getDate() === day &&
                new Date().getMonth() === currentMonth &&
                new Date().getFullYear() === currentYear;

            days.push(
                <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div className="datetime-picker">
            {/* Quick Presets */}
            <div className="datetime-presets">
                <button onClick={() => handlePreset('now')} className="preset-button">
                    <Clock size={16} />
                    Now
                </button>
                <button onClick={() => handlePreset('sunrise')} className="preset-button">
                    <Sunrise size={16} />
                    Sunrise
                </button>
                <button onClick={() => handlePreset('noon')} className="preset-button">
                    <Sun size={16} />
                    Noon
                </button>
                <button onClick={() => handlePreset('sunset')} className="preset-button">
                    <Sunset size={16} />
                    Sunset
                </button>
                <button onClick={() => handlePreset('midnight')} className="preset-button">
                    <Moon size={16} />
                    Midnight
                </button>
            </div>

            {/* Calendar */}
            <div className="calendar-container">
                {/* Month/Year Header */}
                <div className="calendar-header">
                    <button
                        onClick={() => {
                            if (currentMonth === 0) {
                                setCurrentMonth(11);
                                setCurrentYear(currentYear - 1);
                            } else {
                                setCurrentMonth(currentMonth - 1);
                            }
                        }}
                        className="calendar-nav-button"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="calendar-month-year">
                        <select
                            value={currentMonth}
                            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                            className="calendar-select"
                        >
                            {monthNames.map((month, index) => (
                                <option key={index} value={index}>{month}</option>
                            ))}
                        </select>
                        <select
                            value={currentYear}
                            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                            className="calendar-select"
                        >
                            {Array.from({ length: 21 }, (_, i) => currentYear - 10 + i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={() => {
                            if (currentMonth === 11) {
                                setCurrentMonth(0);
                                setCurrentYear(currentYear + 1);
                            } else {
                                setCurrentMonth(currentMonth + 1);
                            }
                        }}
                        className="calendar-nav-button"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Day Labels */}
                <div className="calendar-weekdays">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="calendar-weekday">{day}</div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="calendar-grid">
                    {renderCalendar()}
                </div>
            </div>

            {/* Time Picker */}
            <div className="time-picker">
                <div className="time-picker-label">
                    <Clock size={16} />
                    Select Time
                </div>
                <div className="time-picker-controls">
                    <div className="time-input-group">
                        <label className="time-label">Hour</label>
                        <input
                            type="number"
                            min="0"
                            max="23"
                            value={hours}
                            onChange={(e) => setHours(Math.min(23, Math.max(0, parseInt(e.target.value) || 0)))}
                            className="time-input"
                        />
                    </div>
                    <span className="time-separator">:</span>
                    <div className="time-input-group">
                        <label className="time-label">Minute</label>
                        <input
                            type="number"
                            min="0"
                            max="59"
                            value={minutes}
                            onChange={(e) => setMinutes(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
                            className="time-input"
                        />
                    </div>
                </div>
            </div>

            {/* Moon Phase Selector */}
            <MoonPhaseSelector
                currentPhase={(selectedDate.getDate() / 30) % 1}
                showLabels={false}
            />

            {/* Selected DateTime Display */}
            <div className="datetime-display">
                <Calendar size={16} />
                {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
                {' at '}
                {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}
            </div>

            {/* Action Buttons */}
            <div className="datetime-actions">
                <button onClick={onBack} className="portal-button portal-button-secondary">
                    ← Back
                </button>
                <button onClick={handleConfirm} className="portal-button portal-button-primary">
                    Continue →
                </button>
            </div>
        </div>
    );
};

export default DateTimePicker;
