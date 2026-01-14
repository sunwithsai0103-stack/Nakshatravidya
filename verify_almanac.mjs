import { getAlmanac } from './src/utils/astro.js';

console.log("Verifying Almanac Data for 2026...");
const events = getAlmanac(2026);
events.forEach(e => {
    console.log(`${e.date.toISOString()} - ${e.name}`);
});
