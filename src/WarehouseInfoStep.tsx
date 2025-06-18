import React from 'react';
import { useWizard } from './WizardContext';

export default function WarehouseInfoStep() {
  const { warehouseInfo, updateWarehouseInfo } = useWizard();

  return (
    <div>
      <h2>Warehouse & Site Details</h2>
      <label>
        Total Warehouse Area (sqm):
        <input
          type="number"
          value={warehouseInfo.totalArea || ''}
          onChange={e => updateWarehouseInfo({ totalArea: Number(e.target.value) })}
          placeholder="e.g. 1000"
        />
      </label>
      <br />
      <label>
        Clear Height (m):
        <input
          type="number"
          value={warehouseInfo.clearHeight || ''}
          onChange={e => updateWarehouseInfo({ clearHeight: Number(e.target.value) })}
          placeholder="e.g. 6"
        />
      </label>
      <br />
      <label>
        Floor Load Capacity (kg/sqm):
        <input
          type="number"
          value={warehouseInfo.floorLoadCapacity || ''}
          onChange={e => updateWarehouseInfo({ floorLoadCapacity: Number(e.target.value) })}
          placeholder="e.g. 1500"
        />
      </label>
      <br />
      <label>
        Access Points / Loading Dock Details:
        <textarea
          value={warehouseInfo.accessPoints || ''}
          onChange={e => updateWarehouseInfo({ accessPoints: e.target.value })}
          placeholder="Describe access points"
          rows={3}
          cols={30}
        />
      </label>
    </div>
  );
}