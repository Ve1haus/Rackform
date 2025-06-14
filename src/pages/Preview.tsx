
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Preview() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Preview Layout</h2>
      <svg width="300" height="200" style={{ background: '#e0e0e0' }}>
        <rect x="20" y="20" width="260" height="160" fill="#ccc" />
        <text x="30" y="50" fill="#000">[Placeholder Layout]</text>
      </svg>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => navigate('/summary', { state })}>Continue</button>
      </div>
    </div>
  );
}
