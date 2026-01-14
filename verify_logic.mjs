import { getAstroData } from './src/utils/astro.js';

console.log("Verifying Astro Data with Timings...");
const data = getAstroData(new Date());
console.log("Sun Longitude:", data.sun.longitude);
console.log("Ayana:", data.sun.ayana);
console.log("Next Ayana:", data.sun.nextAyana);
console.log("Tithi:", data.moon.tithi.summary);
console.log("Tithi End:", data.moon.tithi.endTime);
