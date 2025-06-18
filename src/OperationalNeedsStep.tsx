import React from 'react';
import { useWizard } from './WizardContext';

export default function OperationalNeedsStep() {
  const { operationalNeeds, updateOperationalNeeds } = useWizard();

  return (
    <div>
      <h2>Operational Needs</h2>
      <label>
        Pallet Movement Frequency:
        <input
          type="text"
          value={operationalNeeds.palletMovementFrequency || ''}
          onChange={e => updateOperationalNeeds({ palletMovementFrequency: e.target.value })}
          placeholder="e.g. Daily, Weekly"
        />
      </label>
      <br />
      <label>
        Equipment Used:
        <input
          type="text"
          value={operationalNeeds.equipmentUsed || ''}
          onChange={e => updateOperationalNeeds({ equipmentUsed: e.target.value })}
          placeholder="e.g. Forklift, Pallet Jack"
        />
      </label>
      <br />
      <label>
        Required Aisle Width (m):
        <input
          type="number"
          value={operationalNeeds.aisleWidth || ''}
          onChange={e => updateOperationalNeeds({ aisleWidth: Number(e.target.value) })}
          placeholder="e.g. 3.5"
        />
      </label>
    </div>
  );
}