import React, { useState } from 'react';
import TileSelector, { RackType } from './TileSelector';

export default function RackTypeStep() {
  const [selectedRack, setSelectedRack] = useState<RackType | undefined>();

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Select Your Rack Type</h2>
      <TileSelector selected={selectedRack} onSelect={setSelectedRack} />
      {selectedRack && (
        <p className="mt-4 text-center text-gray-600">You selected: <strong>{selectedRack}</strong></p>
      )}
    </div>
  );
}