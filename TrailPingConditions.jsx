import React from 'react';
import { Droplet, Tent, CloudDrizzle, Bug, Snowflake, AlertTriangle, MapPin, Sun } from 'lucide-react';

export default function TrailPingConditions() {
  return (
    <div style={{ padding: '1.5rem', maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <h2>Select Your Hike</h2>
        <label>Trail Name</label>
        <input placeholder="e.g. Kungsleden" style={{ width: '100%', marginBottom: '0.5rem' }} />
        <label>Start Date</label>
        <input type="date" style={{ width: '100%', marginBottom: '0.5rem' }} />
        <label>Direction</label>
        <input placeholder="e.g. Northbound" style={{ width: '100%' }} />
        <button style={{ width: '100%', marginTop: '1rem' }}>Start Trail</button>
      </div>

      <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '1rem' }}>
        <h3>Recent Trail Conditions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <button><Droplet size={16}/> Water Available</button>
          <button><Tent size={16}/> Hut Open</button>
          <button><CloudDrizzle size={16}/> Mud</button>
          <button><Bug size={16}/> Bugs</button>
          <button><Snowflake size={16}/> Snow</button>
          <button><AlertTriangle size={16}/> Blocked Path</button>
        </div>
      </div>

      <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '8px' }}>
        <h3>Weather & UV</h3>
        <div><Sun size={16}/> UV Index: Moderate</div>
        <div><MapPin size={16}/> Temp: 18°C | Light Rain</div>
      </div>
    </div>
  );
}