
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Summary() {
  const { state } = useLocation();

  return (
    <div style={{ padding: 20 }}>
      <h2>Project Summary</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <form onSubmit={() => alert('Submitted!')}>
        <input name="name" placeholder="Name" required /><br/>
        <input name="email" placeholder="Email" required /><br/>
        <input name="phone" placeholder="Phone" required /><br/>
        <input name="company" placeholder="Company" /><br/>
        <button type="submit">Request Quote</button>
      </form>
    </div>
  );
}
