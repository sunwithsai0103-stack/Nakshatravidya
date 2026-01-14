import React, { useMemo } from 'react';
import { getAlmanac } from '../utils/astro';

function Almanac({ year }) {
    const events = useMemo(() => getAlmanac(year), [year]);

    return (
        <div className="glass-panel">
            <h2 className="text-center mb-6">Yearly Almanac ({year})</h2>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div key={index} className="data-row">
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg">{event.name}</span>
                            <span className="text-sm text-secondary">
                                {event.date.toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="block font-mono text-sm opacity-80">
                                {event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            {event.type && (
                                <span className={`tag ${event.type} mt-1`}>
                                    {event.type === 'uttarayana' ? 'Start Uttarayana' : 'Start Dakshinayana'}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Almanac;
