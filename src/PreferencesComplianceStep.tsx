import React from 'react';
import { useWizard } from './WizardContext';

export default function PreferencesComplianceStep() {
  const { preferencesCompliance, updatePreferencesCompliance } = useWizard();

  return (
    <div>
      <h2>Preferences & Compliance</h2>
      <label>
        Preferred Brands (comma separated):
        <input
          type="text"
          value={preferencesCompliance.preferredBrands?.join(', ') || ''}
          onChange={e => updatePreferencesCompliance({ preferredBrands: e.target.value.split(',').map(s => s.trim()) })}
          placeholder="e.g. AR, Mecalux"
        />
      </label>
      <br />
      <label>
        New or Used Racking:
        <select
          value={preferencesCompliance.newOrUsed || ''}
          onChange={e => updatePreferencesCompliance({ newOrUsed: e.target.value as 'new' | 'used' })}
        >
          <option value="">Select</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </label>
      <br />
      <label>
        Modularity Required:
        <input
          type="checkbox"
          checked={preferencesCompliance.modularity || false}
          onChange={e => updatePreferencesCompliance({ modularity: e.target.checked })}
        />
      </label>
      <br />
      <label>
        Safety Features (comma separated):
        <input
          type="text"
          value={preferencesCompliance.safetyFeatures?.join(', ') || ''}
          onChange={e => updatePreferencesCompliance({ safetyFeatures: e.target.value.split(',').map(s => s.trim()) })}
          placeholder="e.g. Netting, Barriers"
        />
      </label>
      <br />
      <label>
        Compliance Standards (comma separated):
        <input
          type="text"
          value={preferencesCompliance.complianceStandards?.join(', ') || ''}
          onChange={e => updatePreferencesCompliance({ complianceStandards: e.target.value.split(',').map(s => s.trim()) })}
          placeholder="e.g. ISO, OSHA"
        />
      </label>
    </div>
  );
}