
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
      const systems = [...formData.systems];
      if (checked) systems.push(value);
      else systems.splice(systems.indexOf(value), 1);
      setFormData({ ...formData, systems });
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
    <div style={{ padding: 20 }}>
      <h2>Step {step}</h2>
      {step === 1 && (
        <select name="warehouseType" onChange={handleChange} value={formData.warehouseType}>
          <option value="">Select Warehouse Type</option>
          <option value="Cold Storage">Cold Storage</option>
          <option value="Retail">Retail</option>
          <option value="Industrial">Industrial</option>
        </select>
      )}
      {step === 2 && (
        <>
          <input type="number" name="length" placeholder="Length" onChange={handleChange} />
          <input type="number" name="width" placeholder="Width" onChange={handleChange} />
          <input type="number" name="height" placeholder="Height" onChange={handleChange} />
        </>
      )}
      {step === 3 && (
        <>
          <label><input type="checkbox" value="Pallet Racking" onChange={handleChange} /> Pallet Racking</label><br/>
          <label><input type="checkbox" value="Mezzanine" onChange={handleChange} /> Mezzanine</label><br/>
          <label><input type="checkbox" value="Partitioning" onChange={handleChange} /> Partitioning</label>
        </>
      )}
      {step === 4 && (
        <>
          <label><input type="checkbox" name="installation" onChange={handleChange} /> Installation Required</label><br/>
          <label><input type="checkbox" name="fireRating" onChange={handleChange} /> Fire Rated</label><br/>
          <label><input type="checkbox" name="loadCapacity" onChange={handleChange} /> Load Capacity Needed</label>
        </>
      )}
      <div style={{ marginTop: 20 }}>
        {step > 1 && <button onClick={prev}>Back</button>}
        <button onClick={next} style={{ marginLeft: 10 }}>Next</button>
      </div>
    </div>
  );
}
