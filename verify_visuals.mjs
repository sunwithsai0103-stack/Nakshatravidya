import { getAstroData } from './src/utils/astro.js';

console.log("Verifying Logic for Visualization...");
const data = getAstroData(new Date());
console.log("Sun Longitude:", data.sun.longitude.toFixed(2));
console.log("Sun Declination:", data.sun.declination.toFixed(2));
console.log("Moon Phase Angle:", data.moon.phase.angle.toFixed(2));
console.log("Moon Fraction:", data.moon.phase.fraction.toFixed(2));
