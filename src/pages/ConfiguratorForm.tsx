
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConfiguratorForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    warehouseType: '',
    dimensions: { length: '', width: '', height: '' },
    systems: [],
    options: { installation: false, fireRating: false, loadCapacity: false },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (step === 1) {
      setFormData({ ...formData, warehouseType: value });
    } else if (step === 2) {
      setFormData({
        ...formData,
        dimensions: { ...formData.dimensions, [name]: value },
      });
    } else if (step === 3) {
      const updated = formData.systems.includes(value)
        ? formData.systems.filter((s) => s !== value)
        : [...formData.systems, value];
      setFormData({ ...formData, systems: updated });
    } else if (step === 4) {
      setFormData({
        ...formData,
        options: { ...formData.options, [name]: checked },
      });
    }
  };

  const next = () => {
    if (step === 4) navigate('/preview', { state: formData });
    else setStep(step + 1);
  };

  const prev = () => step > 1 && setStep(step - 1);

  return (
    <div>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>Step {step} of 4</p>
      {step === 1 && (
        <>
          <h2>🏭 Select Your Warehouse Type</h2>
          <select name="warehouseType" onChange={handleChange} value={formData.warehouseType}>
            <option value="">-- Choose one --</option>
            <option value="Cold Storage">❄️ Cold Storage</option>
            <option value="Retail">🛒 Retail</option>
            <option value="Industrial">🏗 Industrial</option>
          </select>
        </>
      )}
      {step === 2 && (
        <>
          <h2>📏 Enter Warehouse Dimensions</h2>
          <label>Length (m):</label>
          <input type="number" name="length" onChange={handleChange} />
          <label>Width (m):</label>
          <input type="number" name="width" onChange={handleChange} />
          <label>Height (m):</label>
          <input type="number" name="height" onChange={handleChange} />
        </>
      )}
      {step === 3 && (
        <>
          <h2>🧱 Select Required Systems</h2>
          <div style={{ display: 'grid', gap: '8px' }}>
            <label><input type="checkbox" value="Pallet Racking" onChange={handleChange} /> 📦 Pallet Racking</label>
            <label><input type="checkbox" value="Mezzanine" onChange={handleChange} /> 🪜 Mezzanine Floor</label>
            <label><input type="checkbox" value="Partitioning" onChange={handleChange} /> 🧱 Steel Partitioning</label>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <h2>⚙️ Additional Options</h2>
          <label><input type="checkbox" name="installation" onChange={handleChange} /> 🚛 Installation Required</label>
          <label><input type="checkbox" name="fireRating" onChange={handleChange} /> 🔥 Fire Rated System</label>
          <label><input type="checkbox" name="loadCapacity" onChange={handleChange} /> 🏋️ High Load Capacity</label>
        </>
      )}
      <div style={{ marginTop: 20 }}>
        {step > 1 && <button onClick={prev}>← Back</button>}
        <button onClick={next} style={{ marginLeft: 10 }}>{step === 4 ? 'View Preview →' : 'Next →'}</button>
      </div>
    </div>
  );
}
