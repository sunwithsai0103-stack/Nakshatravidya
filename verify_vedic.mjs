import { getAstroData } from './src/utils/astro.js';

console.log("Verifying Vedic Astrology Data...");
const data = getAstroData(new Date());

console.log("Ayanamsa:", data.ayanamsa);
console.log("Sun Tropical Lon:", data.sun.longitude.toFixed(2));
console.log("Sun Sidereal Lon:", data.sun.sidereal.toFixed(2));
console.log("Sun Rashi:", data.sun.rashi.name);
console.log("Sun Nakshatra:", data.sun.nakshatra.name, "Pada:", data.sun.nakshatra.pada);

console.log("Moon Tropical Lon:", data.moon.longitude.toFixed(2));
console.log("Moon Sidereal Lon:", data.moon.sidereal.toFixed(2));
console.log("Moon Rashi:", data.moon.rashi.name);
console.log("Moon Nakshatra:", data.moon.nakshatra.name, "Pada:", data.moon.nakshatra.pada);
console.log("Nakshatra Progress:", data.moon.nakshatra.percentage + "%");
