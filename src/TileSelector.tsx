import React from 'react';

export type RackType = 'AR' | 'STOW' | 'NotSure';

interface TileSelectorProps {
  selected?: RackType;
  onSelect: (rackType: RackType) => void;
}

const rackTypes: { id: RackType; label: string; logoUrl: string }[] = [
  {
    id: 'AR',
    label: 'AR Racking',
    logoUrl: 'https://via.placeholder.com/120x72?text=AR',
  },
  {
    id: 'STOW',
    label: 'STOW',
    logoUrl: 'https://via.placeholder.com/120x72?text=STOW',
  },
  {
    id: 'NotSure',
    label: 'Not Sure',
    logoUrl: 'https://via.placeholder.com/120x72?text=?',
  },
];

export default function TileSelector({ selected, onSelect }: TileSelectorProps) {
  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {rackTypes.map(({ id, label, logoUrl }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`border rounded-lg p-4 w-36 flex flex-col items-center cursor-pointer transition-shadow
            ${selected === id ? 'border-blue-600 shadow-lg bg-blue-50' : 'border-gray-300 hover:shadow-md hover:bg-gray-50'}`}
          aria-pressed={selected === id}
          aria-label={`Select rack type ${label}`}
        >
          <img src={logoUrl} alt={label} className="w-full mb-3 object-contain" />
          <span className="text-center font-semibold text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
}
