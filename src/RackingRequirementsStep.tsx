import React from 'react';
import { useWizard } from './WizardContext';

export default function RackingRequirementsStep() {
  const { rackingRequirements, updateRackingRequirements } = useWizard();

  return (
    <div>
      <h2>Racking Requirements</h2>
      <label>
        Desired Pallet Capacity:
        <input
          type="number"
          value={rackingRequirements.palletCapacity || ''}
          onChange={e => updateRackingRequirements({ palletCapacity: Number(e.target.value) })}
          placeholder="e.g. 150"
        />
      </label>
      <br />
      <label>
        Pallet Dimensions:
        <input
          type="text"
          value={rackingRequirements.palletDimensions || ''}
          onChange={e => updateRackingRequirements({ palletDimensions: e.target.value })}
          placeholder="e.g. 1200x1000mm"
        />
      </label>
      <br />
      <label>
        Maximum Pallet Weight (kg):
        <input
          type="number"
          value={rackingRequirements.maxPalletWeight || ''}
          onChange={e => updateRackingRequirements({ maxPalletWeight: Number(e.target.value) })}
          placeholder="e.g. 1000"
        />
      </label>
      <br />
      <label>
        Types of Goods Stored:
        <input
          type="text"
          value={rackingRequirements.goodsType || ''}
          onChange={e => updateRackingRequirements({ goodsType: e.target.value })}
          placeholder="e.g. Electronics, Bulk"
        />
      </label>
    </div>
  );
}