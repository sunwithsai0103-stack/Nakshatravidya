// Utility functions for calculating auspicious and inauspicious timings

/**
 * Calculate Rahu Kaal (inauspicious period)
 * Rahu Kaal is 1/8th of the day duration, timing depends on day of week
 */
export const getRahuKaal = (sunrise, sunset) => {
    if (!sunrise || !sunset) return null;

    const dayDuration = sunset - sunrise;
    const segmentDuration = dayDuration / 8;

    const dayOfWeek = sunrise.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Rahu Kaal segment index for each day
    const rahuKaalSegments = {
        0: 7, // Sunday: 7th segment
        1: 1, // Monday: 1st segment
        2: 6, // Tuesday: 6th segment
        3: 4, // Wednesday: 4th segment
        4: 5, // Thursday: 5th segment
        5: 3, // Friday: 3rd segment
        6: 2  // Saturday: 2nd segment
    };

    const segment = rahuKaalSegments[dayOfWeek];
    const start = new Date(sunrise.getTime() + (segment * segmentDuration));
    const end = new Date(start.getTime() + segmentDuration);

    return { start, end };
};

/**
 * Calculate Gulika Kaal (inauspicious period)
 */
export const getGulikaKaal = (sunrise, sunset) => {
    if (!sunrise || !sunset) return null;

    const dayDuration = sunset - sunrise;
    const segmentDuration = dayDuration / 8;

    const dayOfWeek = sunrise.getDay();

    // Gulika Kaal segment index for each day
    const gulikaSegments = {
        0: 6, // Sunday: 6th segment
        1: 5, // Monday: 5th segment
        2: 4, // Tuesday: 4th segment
        3: 3, // Wednesday: 3rd segment
        4: 2, // Thursday: 2nd segment
        5: 1, // Friday: 1st segment
        6: 0  // Saturday: 0th segment (before sunrise, so we use 7th)
    };

    const segment = gulikaSegments[dayOfWeek];
    const start = new Date(sunrise.getTime() + (segment * segmentDuration));
    const end = new Date(start.getTime() + segmentDuration);

    return { start, end };
};

/**
 * Calculate Yamaganda (inauspicious period)
 */
export const getYamaganda = (sunrise, sunset) => {
    if (!sunrise || !sunset) return null;

    const dayDuration = sunset - sunrise;
    const segmentDuration = dayDuration / 8;

    const dayOfWeek = sunrise.getDay();

    // Yamaganda segment index for each day
    const yamagandaSegments = {
        0: 4, // Sunday: 4th segment
        1: 3, // Monday: 3rd segment
        2: 2, // Tuesday: 2nd segment
        3: 1, // Wednesday: 1st segment
        4: 0, // Thursday: 0th segment
        5: 6, // Friday: 6th segment
        6: 5  // Saturday: 5th segment
    };

    const segment = yamagandaSegments[dayOfWeek];
    const start = new Date(sunrise.getTime() + (segment * segmentDuration));
    const end = new Date(start.getTime() + segmentDuration);

    return { start, end };
};

/**
 * Calculate Abhijit Muhurta (most auspicious period)
 * Abhijit is the 8th muhurta (middle of the day)
 */
export const getAbhijitMuhurta = (sunrise, sunset) => {
    if (!sunrise || !sunset) return null;

    const dayDuration = sunset - sunrise;
    const muhurtaDuration = dayDuration / 15; // Day divided into 15 muhurtas

    // Abhijit is the 8th muhurta (middle of the day)
    const start = new Date(sunrise.getTime() + (7 * muhurtaDuration));
    const end = new Date(start.getTime() + muhurtaDuration);

    return { start, end };
};

/**
 * Format time for display
 */
export const formatTime = (date) => {
    if (!date) return '--:--';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

/**
 * Format time range
 */
export const formatTimeRange = (start, end) => {
    return `${formatTime(start)} - ${formatTime(end)}`;
};

/**
 * Check if current time is within a period
 */
export const isCurrentlyActive = (start, end, currentTime = new Date()) => {
    return currentTime >= start && currentTime <= end;
};

/**
 * Get moon phase name from fraction
 */
export const getMoonPhaseName = (fraction) => {
    if (fraction < 0.03) return 'New Moon';
    if (fraction < 0.22) return 'Waxing Crescent';
    if (fraction < 0.28) return 'First Quarter';
    if (fraction < 0.47) return 'Waxing Gibbous';
    if (fraction < 0.53) return 'Full Moon';
    if (fraction < 0.72) return 'Waning Gibbous';
    if (fraction < 0.78) return 'Last Quarter';
    if (fraction < 0.97) return 'Waning Crescent';
    return 'New Moon';
};
