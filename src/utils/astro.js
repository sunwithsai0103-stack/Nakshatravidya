import { MakeTime, Body, GeoVector, Ecliptic, SearchSunLongitude, SearchMoonPhase, Illumination, Equator } from 'astronomy-engine';

// Vedic Astrology Constants
const NAKSHATRAS = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashirsha", "Ardra",
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const RASHIS = [
    "Mesha (Aries)", "Vrishabha (Taurus)", "Mithuna (Gemini)", "Karka (Cancer)",
    "Simha (Leo)", "Kanya (Virgo)", "Tula (Libra)", "Vrishchika (Scorpio)",
    "Dhanu (Sagittarius)", "Makara (Capricorn)", "Kumbha (Aquarius)", "Meena (Pisces)"
];

// Calculate Lahiri Ayanamsa
const getLahiriAyanamsa = (date) => {
    // Ayanamsa at J2000 (Jan 1, 2000 12:00 UTC) approx 23.855 deg
    // Precession rate approx 50.29 arcseconds per year = 0.013969 deg/year
    const J2000 = new Date('2000-01-01T12:00:00Z');
    const daysSinceJ2000 = (date - J2000) / (1000 * 60 * 60 * 24);
    const yearsSinceJ2000 = daysSinceJ2000 / 365.25;
    return 23.855 + (yearsSinceJ2000 * 0.013969);
};

const getSidereal = (tropicalLon, ayanamsa) => {
    let sidereal = tropicalLon - ayanamsa;
    if (sidereal < 0) sidereal += 360;
    return sidereal;
};

const getRashi = (lon) => {
    const index = Math.floor(lon / 30);
    return {
        index: index,
        name: RASHIS[index],
        progress: (lon % 30).toFixed(2)
    };
};

const getNakshatra = (lon) => {
    const split = 360 / 27; // 13.3333...
    const index = Math.floor(lon / split);
    const progress = lon % split;
    const pada = Math.floor(progress / (split / 4)) + 1; // 1 to 4
    const percent = (progress / split) * 100;

    return {
        index: index,
        name: NAKSHATRAS[index],
        pada: pada,
        percentage: percent.toFixed(1),
        degrees: progress.toFixed(2)
    };
};

export const getAstroData = (date, observer = null) => {
    const time = MakeTime(date);

    // Ayanamsa
    const ayanamsa = getLahiriAyanamsa(date);

    // Sun Position (Geocentric Ecliptic)
    const sunVec = GeoVector(Body.Sun, time, true);
    const sunEcl = Ecliptic(sunVec);
    const sunLon = sunEcl.elon; // 0-360 degrees
    const sunSidereal = getSidereal(sunLon, ayanamsa);

    // Calculate Declination manually to avoid Observer error in Equator()
    const rad = Math.PI / 180;
    const epsilon = 23.4367 * rad;
    const sinDec = Math.sin(sunLon * rad) * Math.sin(epsilon);
    const sunDec = Math.asin(sinDec) / rad;

    // Local Sun Events (Sunrise, Sunset)
    let sunrise = null;
    let sunset = null;
    if (observer) {
        try {
            const rise = SearchRiseSet(Body.Sun, observer, 1, time, 1);
            const set = SearchRiseSet(Body.Sun, observer, -1, time, 1);
            if (rise) sunrise = rise.date;
            if (set) sunset = set.date;
        } catch (e) {
            console.error("Sunrise/Set Error:", e);
        }
    }

    // Moon Position (Geocentric Ecliptic)
    const moonVec = GeoVector(Body.Moon, time, true);
    const moonEcl = Ecliptic(moonVec);
    const moonLon = moonEcl.elon;
    const moonSidereal = getSidereal(moonLon, ayanamsa);
    const moonIllum = Illumination(Body.Moon, time);

    // Local Moon Events
    let moonrise = null;
    let moonset = null;
    if (observer) {
        try {
            const mrise = SearchRiseSet(Body.Moon, observer, 1, time, 1);
            const mset = SearchRiseSet(Body.Moon, observer, -1, time, 1);
            if (mrise) moonrise = mrise.date;
            if (mset) moonset = mset.date;
        } catch (e) {
            console.error("Moonrise/Set Error:", e);
        }
    }

    // Ayana Calculation (Tropical)
    const isUttarayana = (sunLon >= 270 || sunLon < 90);
    const ayana = isUttarayana ? 'Uttarayana' : 'Dakshinayana';

    // Tithi Calculation
    let diff = moonLon - sunLon;
    if (diff < 0) diff += 360;
    const tithiIndex = Math.floor(diff / 12) + 1; // 1 to 30
    const fraction = (diff % 12) / 12; // 0.0 to 1.0 progress within current Tithi

    const paksha = tithiIndex <= 15 ? 'Shukla' : 'Krishna';
    const dayInPaksha = tithiIndex <= 15 ? tithiIndex : tithiIndex - 15;

    const tithiNames = [
        "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
        "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
        "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi",
        (paksha === 'Shukla' ? "Purnima" : "Amavasya")
    ];

    const tithiName = tithiNames[dayInPaksha - 1];

    // Tithi Start and End Time Calculation
    let tithiEnd = null;
    let tithiStart = null;
    try {
        let targetEnd = (tithiIndex * 12) % 360;
        tithiEnd = SearchMoonPhase(targetEnd, time, 2);
        let targetStart = ((tithiIndex - 1) * 12) % 360;
        tithiStart = SearchMoonPhase(targetStart, time, -2);
    } catch (e) {
        console.error("Error calculating Tithi timings:", e);
    }

    // Next Ayana Calculation
    let nextAyanaTarget = isUttarayana ? 90 : 270;
    let nextAyanaName = isUttarayana ? 'Dakshinayana' : 'Uttarayana';
    let nextAyanaTime = null;
    try {
        nextAyanaTime = SearchSunLongitude(nextAyanaTarget, time, 200);
    } catch (e) {
        console.error("Error calculating Next Ayana:", e);
    }

    return {
        ayanamsa: ayanamsa.toFixed(4),
        sun: {
            longitude: sunLon,
            sidereal: sunSidereal,
            rashi: getRashi(sunSidereal),
            nakshatra: getNakshatra(sunSidereal),
            declination: sunDec,
            ayana: ayana,
            isUttarayana: isUttarayana,
            rise: sunrise,
            set: sunset,
            nextAyana: {
                name: nextAyanaName,
                date: nextAyanaTime ? nextAyanaTime.date : null,
                timestamp: nextAyanaTime ? nextAyanaTime.date.toISOString() : null
            }
        },
        moon: {
            longitude: moonLon,
            sidereal: moonSidereal,
            rashi: getRashi(moonSidereal),
            nakshatra: getNakshatra(moonSidereal),
            rise: moonrise,
            set: moonset,
            phase: {
                fraction: moonIllum.phase_fraction,
                angle: moonIllum.phase_angle,
            },
            tithi: {
                number: tithiIndex,
                name: tithiName,
                paksha: paksha,
                fraction_left: 1 - fraction,
                percentage: (fraction * 100).toFixed(1),
                summary: `${paksha} ${tithiName}`,
                startTime: tithiStart ? tithiStart.date : null,
                endTime: tithiEnd ? tithiEnd.date : null
            }
        },
        timestamp: date.toISOString()
    };
};

export const getAlmanac = (year) => {
    const events = [];

    const searchEvent = (deg, name, dateGuess, type) => {
        try {
            const start = MakeTime(dateGuess);
            // Explicitly pass 365 as limit to avoid undefined issues
            const t = SearchSunLongitude(deg, start, 365);
            if (t) {
                events.push({
                    name,
                    date: t.date,
                    timestamp: t.date.toISOString(),
                    type
                });
            }
        } catch (e) {
            console.error(`Error searching ${name}:`, e);
        }
    };

    // 0 deg: Vernal Equinox (March)
    searchEvent(0, "Vernal Equinox", new Date(year, 2, 1)); // March 1

    // 90 deg: Summer Solstice (June)
    searchEvent(90, "Summer Solstice (Dakshinayana Begins)", new Date(year, 5, 1), 'dakshinayana'); // June 1

    // 180 deg: Autumnal Equinox (Sept)
    searchEvent(180, "Autumnal Equinox", new Date(year, 8, 1)); // Sept 1

    // 270 deg: Winter Solstice (Dec)
    searchEvent(270, "Winter Solstice (Uttarayana Begins)", new Date(year, 11, 1), 'uttarayana'); // Dec 1

    return events.sort((a, b) => a.date - b.date);
};
